import { Context } from '../Context';
import { useContext } from 'react';
import { View, StyleSheet, Text } from 'react-native';
import ListMeal from '../components/ListMeal';

import MealItem from '../components/MealItem';
import { MEALS, CATEGORIES } from '../data/dummy-data';

export default function ScreenMealFavorite({ navigation }) {
    const context = useContext(Context);

    const favMeals = MEALS.filter((meal) =>
        context.favorites.includes(meal.id)
    );

    let child = (
        <Text
            style={{
                color: 'white',
                textAlign: 'center',
            }}
        >
            You don't have any favorite meal. Let have a tatse!
        </Text>
    );

    if (favMeals.length > 0) {
        child = <ListMeal list={favMeals} />;
    }
    return <View style={styles.container}>{child}</View>;
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        padding: 16,
    },
});
