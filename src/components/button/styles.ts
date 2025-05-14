import { StyleSheet } from "react-native";

import { colors } from "@/styles/colors";

export const styles = StyleSheet.create({
    button:{
        backgroundColor: colors.green[100],
        flexDirection: "row",
        alignItems: "center",
        padding: 16,
        borderRadius: 10,
        gap: 8,
    },
    title:{
        color: colors.gray[900],
        fontSize: 16,
        fontWeight: 600,
    }
})