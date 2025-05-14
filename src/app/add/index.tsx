import { useState } from "react"
import { View, Text } from "react-native"
import { router } from "expo-router"

import { styles } from "./styles"
import { colors } from "@/styles/colors"

import { Icon } from "@/components/icon"
import { Button } from "@/components/button"
import { Input } from "@/components/input"
import { taskStorage } from "@/storage/task-Storage"


export default function Index() {
    const [task, setTask] = useState("")

    async function handlepress(){

    }

    return(
        <View style={styles.container}>
            <View style={styles.header}>
                <Icon iconName="arrow-back" iconcolor={colors.green[100]} onPress={() => router.back()}/>
            </View>
            <View style={styles.content}>
                <Input onChangeText={setTask}/>
                <Button buttonName="Create New Task" onPress={handlepress}/>
            </View>
        </View>
    )
}