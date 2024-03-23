import { Context } from '../Context';
import { useContext } from 'react';
import { View, StyleSheet, Text, FlatList } from 'react-native';
import { MEALS } from '../data/dummy-data';
import CardMealFavorite from '../components/CardMealFavorite';
import Colors from '../constants/Colors';

export default function ScreenMealFavorite({}) {
    const context = useContext(Context);

    const favMeals = MEALS.filter((meal) =>
        context.favorites.includes(meal.id)
    );

    let child = (
        <Text
            style={{
                color: Colors.primary,
                textAlign: 'center',
            }}
        >
            You don't have any favorite meal. Let have a tatse!
        </Text>
    );

    if (favMeals.length > 0) {
        child = <ListMeal list={favMeals} meal={CardMealFavorite}/>;
    }

    return (<View style={styles.container}>{child}</View>);
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        padding: 16,
        backgroundColor: Colors.dark
    },
});


function ListMeal({list, numColumns = 1}) {
    return (
        <FlatList
            data={list}
            keyExtractor={(item) => item.id}
            renderItem={({item}) => <CardMealFavorite {...item}/>}
            numColumns={numColumns}
            key={numColumns}
        />
    );
}

