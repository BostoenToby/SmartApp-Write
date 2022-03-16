import { Ionicons } from "@expo/vector-icons"
import { Text, View } from "react-native"
import Note from "../interfaces/Note"
import card from "../styles/card"
import core from "../styles/core"

export default ({ note }: { note?: Note}) => {
    if (!note){
        return (
            <View style={[core.backgroundGray500, core.rounded, card.card, card.cardAdd, card.cardSmall]}>
                <Ionicons name='add' size={36}/>
            </View>
        )
    } else {
        return(
            <View style={[core.backgroundLight, core.rounded, card.card, card.cardSmall]}>
                <Text style={card.cardDate}>{new Date().toLocaleDateString('nl-BE')}</Text>
                <Text style={card.cardTitle}>{'An ode to Javascript'}</Text>
                <Text style={card.cardPages}>{2} pages</Text>
            </View>
        )
    }
}