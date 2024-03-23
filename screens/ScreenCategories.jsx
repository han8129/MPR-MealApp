import { FlatList, useWindowDimensions } from 'react-native';
import CardCategory from '../components/CardCategory';
import { CATEGORIES } from '../data/dummy-data';
import Colors from '../constants/Colors';

export default function ScreenCategories({ navigation }) {
    const { width, height } = useWindowDimensions();

    const col = width < height ? 2 : 3;

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
            numColumns={col}
            style={{ backgroundColor: Colors.dark }}
            key={col}
        />
    );
}
