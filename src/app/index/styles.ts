import { StyleSheet } from "react-native";

import { colors } from "@/styles/colors";

export const styles = StyleSheet.create({
    container:{
        flex:1,
        padding:32,
        backgroundColor: colors.gray[900]
    }, 
    header:{
        width:"100%",
        flexDirection: "row",
        justifyContent: "space-between",
        alignItems: "center",
        marginBottom: 32
    }, 
    logo:{
        width: 32,
        height:32
    },
    content:{
        flex:1,
        justifyContent: "center",
        alignItems: "center",
        gap: 16,
    },
    title:{
        color: colors.gray[100],
        fontSize:22,
    },
        name: {
        color: colors.gray[100],
        fontSize: 18,
        fontWeight: "600",
    },
})