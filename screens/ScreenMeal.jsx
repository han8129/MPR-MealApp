import { Context } from '../Context';
import { useEffect, useState, useContext } from 'react';
import { View, Text, Image, StyleSheet, ScrollView } from 'react-native';

import IconButton from '../components/IconButton';
import List from '../components/MealDetail/List';
import Subtitle from '../components/MealDetail/Subtitle';
import MealDetails from '../components/MealDetails';
import { MEALS } from '../data/dummy-data';

export default function ScreenMeal({ route, navigation }) {
    const context = useContext(Context);
    const id = route.params?.mealId;
    const [fav, setFav] = useState(context.favorites.includes(id));
    const selectedMeal = MEALS.find((meal) => meal.id === id);

    function headerButtonPressHandler() {
        if (fav == true) {
            context.removeFavorite(id);
            return false;
        }

        context.addFavorite(id);
        return true;
    }

    navigation.setOptions({
        headerRight: () => (
            <IconButton
                icon={fav ? 'heart' : 'heart-outline'}
                color='white'
                onPress={headerButtonPressHandler}
            />
        ),
    });

    useEffect(() => {
        if (context.favorites.includes(id)) {
            setFav(true);
            return;
        }

        setFav(false);
    }, [context.favorites]);


    return (
        <ScrollView style={styles.rootContainer}>
            <Image
                style={styles.image}
                source={{ uri: selectedMeal.imageUrl }}
            />
            <Text style={styles.title}>{selectedMeal.title}</Text>
            <MealDetails
                duration={selectedMeal.duration}
                complexity={selectedMeal.complexity}
                affordability={selectedMeal.affordability}
                textStyle={styles.detailText}
            />
            <View style={styles.listOuterContainer}>
                <View style={styles.listContainer}>
                    <Subtitle>Ingredients</Subtitle>
                    <List data={selectedMeal.ingredients} />
                    <Subtitle>Steps</Subtitle>
                    <List data={selectedMeal.steps} />
                </View>
            </View>
        </ScrollView>
    );
}

const styles = StyleSheet.create({
    rootContainer: {
        marginBottom: 32,
    },
    image: {
        width: '100%',
        height: 350,
    },
    title: {
        fontWeight: 'bold',
        fontSize: 24,
        margin: 8,
        textAlign: 'center',
        color: 'white',
    },
    detailText: {
        color: 'white',
    },
    listOuterContainer: {
        alignItems: 'center',
    },
    listContainer: {
        width: '80%',
    },
});
