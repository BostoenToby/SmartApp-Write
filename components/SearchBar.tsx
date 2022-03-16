import { StyleSheet, TextInput } from "react-native"
import Color from "../styles/color"

export default () => {
    return <TextInput style={styles.textSearch} placeholder={'Search'} placeholderTextColor={Color.gray[100]} />
}

export const styles = StyleSheet.create({
    textSearch: {
        backgroundColor: Color.gray[500],
        color: Color.light,
        paddingVertical: 10, //veelvouden van 8 gebruiken
        paddingHorizontal: 16,
        textAlign: 'center',
        marginVertical: 8,
        borderRadius: 10,
    }
})