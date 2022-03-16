import { StyleSheet, Dimensions } from "react-native";
import color from "./color";

export default StyleSheet.create({
    card: {
        padding: 24,
    },

    cardSmall: {
        flex: 1,
        justifyContent: 'space-between',
        alignItems: 'center',
        height: 200, //will be tested (maybe more or less)
        marginBottom: 16,
    },

    cardAdd: {
        // flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'center',
        // width: '50%',
    },

    cardTitle: {
        fontFamily: 'PlayfairDisplay_700Bold',
        fontSize: 16,
    },

    cardDate: {
        color: color.gray[100],
        fontSize: 12,
    },

    cardPages: {
        color: color.gray[100],
        fontSize: 12,
    }
})