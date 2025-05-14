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
        alignItems: "center"

    }, 
    logo:{
        width: 32,
        height:32
    }
})