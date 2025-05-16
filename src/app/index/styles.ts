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
        justifyContent: "flex-end",
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
    task:{
        flexDirection: "row",
        justifyContent: "space-between",
        alignItems: "center",
        marginBottom: 8,
        backgroundColor: colors.green[200],
        padding: 16, 
        borderRadius: 10
        
    },
    modal: {
        flex: 1,
        justifyContent: "flex-end"
    },
    modalContent : {
        backgroundColor: colors.gray[800],
        borderTopWidth: 1,
        borderTopColor: colors.gray[700],
        paddingBottom: 52,
        padding: 24
    },
    modalHeader: {
        width: "100%",
        flexDirection: "row",
        alignItems: "center",
        marginBottom: 32
    },
    modalCategory: {
        flex: 1,
        fontSize: 16,
        fontWeight: "500",
        color: colors.gray[300]
    },
    modalTaskName: {
        fontSize: 18,
        fontWeight: "600",
        color: colors.gray[200]
    },
    modalFooter: {
        flexDirection: "row",
        marginTop: 32,
        width: "100%",
        justifyContent: "space-between",
        borderTopWidth: 1,
        borderTopColor: colors.gray[600],
        paddingVertical: 14,
      },
})