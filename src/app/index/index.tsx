import { View, Image } from "react-native"

import { styles } from "./styles"
import { colors } from "@/styles/colors"

import { Icon } from "@/components/icon"

export default function Index() {
    return(
        <View style={styles.container}>
            <View style={styles.header}>
                <Image style={styles.logo} source={require("@/assents/logo.png")}/>
                <Icon iconName="add" iconcolor={colors.green[100]}/>
            </View>

        </View>
    )
}