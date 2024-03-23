import { useEffect } from "react";

import { View, StyleSheet, useWindowDimensions } from "react-native";
import ListMeal from "../components/ListMeal";

import MealItem from "../components/MealItem";
import { MEALS, CATEGORIES } from "../data/dummy-data";

export default function ScreenMealsCategorized({ route, navigation }) {
    const { width, height } = useWindowDimensions();

    const numColumns = width < height ? 1 : 2;

    const catId = route.params.categoryId;

    const displayedMeals = MEALS.filter((mealItem) => {
        return mealItem.categoryIds.indexOf(catId) >= 0;
    });

    useEffect(() => {
        const categoryTitle = CATEGORIES.find(
            (category) => category.id === catId
        ).title;

        navigation.setOptions({
            title: categoryTitle,
        });
    }, [catId, navigation]);

    return (
        <View style={styles.container}>
            <ListMeal list={displayedMeals} numColumns={numColumns} />
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        padding: 16,
    },
});
