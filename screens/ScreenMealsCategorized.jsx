import { useEffect } from "react";
import { View, StyleSheet, useWindowDimensions, FlatList } from "react-native";
import { MEALS, CATEGORIES } from "../data/dummy-data";
import Colors from "../constants/Colors";
import CardMeal from "../components/CardMeal";

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
            <ListMeal list={displayedMeals} numColumns={numColumns} meal={CardMeal}/>
        </View>
    );
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
            renderItem={({item}) => <CardMeal {...item}/>}
            numColumns={numColumns}
            key={numColumns}
        />
    );
}
