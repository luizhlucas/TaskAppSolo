import { TouchableOpacity, TouchableOpacityProps, Text } from "react-native";
import { MaterialIcons } from "@expo/vector-icons";

import { colors } from "@/styles/colors";
import { styles } from "./styles";

type Props = TouchableOpacityProps & {
    buttonName: string
}

export function Button({buttonName, ...rest}: Props){
    return(
        <TouchableOpacity style={styles.button} activeOpacity={0.6} {...rest}>
            <MaterialIcons name="add" size={32} color={colors.gray[900]}/>
            <Text style={styles.title}>{buttonName}</Text>
        </TouchableOpacity>
    )
}