import { useState, useCallback } from "react"
import { View, Text, Image, FlatList, Modal } from "react-native"
import { router, useFocusEffect } from "expo-router"

import { styles } from "./styles"
import { colors } from "@/styles/colors"

import { Icon } from "@/components/icon"
import { Button } from "@/components/button"
import { taskStorage, TaskStorage } from "@/storage/task-Storage"

export default function Index() {
    const [tasks, setTasks] = useState<TaskStorage[]>([])
    const [task, setTask] = useState<TaskStorage>({} as TaskStorage)
    const [modalVisible, setModalVisible] = useState(false)

        async function getTasks() {
        try {
            const response = await taskStorage.get()
            setTasks(response)
        }catch (error){

        }
    }

    function handleDetails(selected: TaskStorage) {
        setModalVisible(true)
        setTask(selected)
    }

    async function taskRemove(){
        await taskStorage.remove(task.id)
        getTasks()
        setModalVisible(false)
    }

    useFocusEffect(
        useCallback(() => {
            getTasks()
        }, [])
    )

    return(
        <View style={styles.container}>
            <View style={styles.header}>
                <Image style={styles.logo} source={require("@/assents/logo.png")}/>
                <Icon iconName="add" iconColor={colors.green[100]} onPress={() => router.navigate("./add")}/>
            </View>

            {tasks.length === 0 &&
            <View style={styles.content}>
                <Text style={styles.title}>There are no tasks yet...</Text>
                <Button buttonName="Create New Task" onPress={() => router.navigate("./add")}/>
            </View>
            }

            <FlatList
            data={tasks}
            keyExtractor={(item) => item.id}
            renderItem={({ item }) => (
                    <View style={styles.task}>
                        <Text style={styles.name}>{item.name}</Text>
                        <Icon iconName="more-horiz" iconColor={colors.gray[100]} onPress={() => handleDetails(item)}/>
                    </View>
                )}
            />
                <Modal transparent visible={modalVisible}>
                        <View style={styles.modal}>
                            <View style={styles.modalContent}>
                                <View style={styles.modalHeader}>
                                    <Text style={styles.modalCategory}>Task</Text>
                                    <Icon iconName="close" iconColor={colors.gray[100]} onPress={() => setModalVisible(false)}/>
                                </View>

                                <Text style={styles.modalTaskName}>{task.name}</Text>

                                <View style={styles.modalFooter}>
                                    <Icon iconName="delete" iconColor={colors.gray[100]} onPress={taskRemove}/>

                                </View>

                            </View>
                        </View>
                </Modal>

        </View>
    )
}