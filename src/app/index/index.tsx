import { useState, useCallback } from "react"
import { View, Text, Image, FlatList } from "react-native"
import { router, useFocusEffect } from "expo-router"
import { TouchableOpacity } from "react-native";
import { MaterialIcons } from "@expo/vector-icons";

import { styles } from "./styles"
import { colors } from "@/styles/colors"

import { Icon } from "@/components/icon"
import { Button } from "@/components/button"
import { taskStorage, TaskStorage } from "@/storage/task-Storage"

export default function Index() {
    const [tasks, setTasks] = useState<TaskStorage[]>([])

    const task = taskStorage.get()

        async function getTasks() {
        try {
            const response = await taskStorage.get()
            setTasks(response)
        }catch (error){

        }
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
                <Icon iconName="add" iconcolor={colors.green[100]} onPress={() => router.navigate("./add")}/>
            </View>
            <View style={styles.content}>
                <Text style={styles.title}>There are no tasks yet...</Text>
                <Button buttonName="Create New Task" onPress={() => router.navigate("./add")}/>
                <TouchableOpacity  activeOpacity={0.6} onPress={() => console.log(task)}>
                    <MaterialIcons name="add" size={32} color={colors.gray[100]}/>
                </TouchableOpacity>
            </View>
            <FlatList
            data={tasks}
            keyExtractor={(item) => item.id}
            renderItem={({ item }) => (
                    <View>
                        <Text style={styles.name}>{item.name}</Text>
                    </View>
                )}

            />
        </View>
    )
}