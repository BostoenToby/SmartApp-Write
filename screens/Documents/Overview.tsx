import { ScrollView, Text, FlatList, View } from "react-native"
import { SafeAreaView } from "react-native-safe-area-context";

import Card from "../../components/Card";
import SearchBar from "../../components/SearchBar";
import Note from "../../interfaces/Note";
import Core from '../../styles/core';

export default () => {
    const testNotes: Note[] = [{
        title: 'The flight of penguins',
        author: 'PJ',
        content: 'You stupid, penguins can\'t fly...',
    },
    {
        title: 'The flight of penguins',
        author: 'PJ',
        content: 'You stupid, penguins can\'t fly...',
    },
    {
        title: 'The flight of penguins',
        author: 'PJ',
        content: 'You stupid, penguins can\'t fly...',
    },
    {
        title: 'The flight of penguins',
        author: 'PJ',
        content: 'You stupid, penguins can\'t fly...',
    },
    {
        title: 'The flight of penguins',
        author: 'PJ',
        content: 'You stupid, penguins can\'t fly...',
    },
    {
        title: 'The flight of penguins',
        author: 'PJ',
        content: 'You stupid, penguins can\'t fly...',
    },
    {
        title: 'The flight of penguins',
        author: 'PJ',
        content: 'You stupid, penguins can\'t fly...',
    },
    {
        title: 'The flight of penguins',
        author: 'PJ',
        content: 'You stupid, penguins can\'t fly...',
    }]

    const renderTodo = ({ item }: { item: Note }) => (
        <Card note={item} key={item.id} />
    )


    return(
        <SafeAreaView style={Core.container}>
            <SearchBar />
            <>
                <FlatList data={testNotes} renderItem={renderTodo} numColumns={2} ListHeaderComponent={<Card />} ListHeaderComponentStyle={{ width: '50%'}} />
            </>
        </SafeAreaView>
    )
}