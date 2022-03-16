import { StyleSheet } from "react-native";
import color from './color';

export default StyleSheet.create({
    // BACKGROUNDS
    backgroundDark: {
        backgroundColor: color.dark,
    },

    backgroundLight: {
        backgroundColor: color.light,
    },

    backgroundGray100: {
        backgroundColor: color.gray[100],
    },

    backgroundGray500: {
        backgroundColor: color.gray[500],
    },

    backgroundGray900: {
        backgroundColor: color.gray[900],
    },

    // TEXT-COLORS
    textDark: {
        color: color.dark,
    },

    textLight: {
        color: color.light,
    },

    container: {
        marginHorizontal: 16,
    },

    //Styling
    rounded: {
        borderRadius: 16,
    },
})

