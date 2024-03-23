import {FlatList} from 'react-native';
import CardMeal from './CardMeal';

export default function ListMeal({list, numColumns = 1}) {
    return (
        <FlatList
            data={list}
            keyExtractor={(item) => item.id}
            renderItem={({item}) => <CardMeal {...item}/>}
            numColumns={numColumns}
            key={numColumns}
        />
    );
}
