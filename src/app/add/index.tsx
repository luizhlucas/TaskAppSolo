import { useState } from "react"
import { View, Alert } from "react-native"
import { router } from "expo-router"


import { styles } from "./styles"
import { colors } from "@/styles/colors"

import { Icon } from "@/components/icon"
import { Button } from "@/components/button"
import { Input } from "@/components/input"
import { taskStorage } from "@/storage/task-Storage"


export default function Add() {
    const [name, setName] = useState("")

    async function handlepress(){
        if (!name.trim()) {
            return Alert.alert("No Task","enter some task")
        }

        await taskStorage.save({
            id: new Date().getTime().toString(),
            name,
        })

        Alert.alert("success", "New task added", [
                {
                    text: "Ok",
                    onPress: () => router.back()
                }   
        ])
    }

    return(
        <View style={styles.container}>
            <View style={styles.header}>
                <Icon iconName="arrow-back" iconColor={colors.green[100]} onPress={() => router.back()}/>
            </View>
            <View style={styles.content}>
                <Input onChangeText={setName}/>
                <Button buttonName="Create New Task" onPress={handlepress}/>
            </View>
        </View>
    )
}