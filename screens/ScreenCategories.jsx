import { FlatList } from 'react-native';
import CardCategory from '../components/CardCategory';

import { CATEGORIES } from '../data/dummy-data';

export default function ScreenCategories({ navigation }) {
    function renderCategoryItem(itemData) {
        function pressHandler() {
            navigation.navigate('CategorizedMeals', {
                categoryId: itemData.item.id,
            });
        }

        return (
            <CardCategory
                title={itemData.item.title}
                color={itemData.item.color}
                onPress={pressHandler}
            />
        );
    }

    return (
        <FlatList
            data={CATEGORIES}
            keyExtractor={(item) => item.id}
            renderItem={renderCategoryItem}
            numColumns={2}
        />
    );
}
