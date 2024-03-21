import {Context} from '../Context';
import { useContext } from 'react';
import { View, StyleSheet } from 'react-native';
import ListMeal from '../components/ListMeal';

import MealItem from '../components/MealItem';
import { MEALS, CATEGORIES } from '../data/dummy-data';

export default function FavoritesScreen({navigation}) {
    const context = useContext(Context);

    const favMeals = MEALS.filter(
        meal => context.favorites.includes(meal.id));

  return (
    <View style={styles.container}>
        <ListMeal list={favMeals} />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 16,
  },
});
