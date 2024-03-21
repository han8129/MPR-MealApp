import {FlatList} from 'react-native';
import MealItem from './MealItem';

export default function ListMeal({list, numColumns = 1}) {
    return (
        <FlatList
            data={list}
            keyExtractor={(item) => item.id}
            renderItem={({item}) => <MealItem {...item}/>}
            numColumns={numColumns}
            key={numColumns}
        />
    );
}
