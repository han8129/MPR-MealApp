import {
    View,
    Pressable,
    Text,
    Image,
    StyleSheet,
    Platform,
} from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { CATEGORIES } from '../data/dummy-data';

export default function CardMealFavorite({
    id,
    title,
    imageUrl,
    categoryIds
}) {
    const navigation = useNavigation();

    function pressHandler() {
        navigation.navigate('Meal', {
            mealId: id,
        });
    }

    console.log(categoryIds)

    return (
        <View style={styles.mealItem}>
            <Pressable
                android_ripple={{ color: '#ccc' }}
                style={({ pressed }) => (pressed ? styles.buttonPressed : null)}
                onPress={pressHandler}
            >
                <View style={styles.innerContainer}>
                    <View>
                        <Image
                            source={{ uri: imageUrl }}
                            style={styles.image}
                        />
                        <Text style={styles.title}>{title}</Text>
                    </View>
                <Details categoryIds={categoryIds} />
                </View>
            </Pressable>
        </View>
    );
}

const styles = StyleSheet.create({
    mealItem: {
        margin: 16,
        borderRadius: 8,
        overflow: Platform.OS === 'android' ? 'hidden' : 'visible',
        backgroundColor: 'white',
        elevation: 4,
        shadowColor: 'black',
        shadowOpacity: 0.25,
        shadowOffset: { width: 0, height: 2 },
        shadowRadius: 8,
        flex: 1,
    },
    buttonPressed: {
        opacity: 0.5,
    },
    innerContainer: {
        borderRadius: 8,
        overflow: 'hidden',
    },
    image: {
        width: '100%',
        height: 200,
    },
    title: {
        fontWeight: 'bold',
        textAlign: 'center',
        fontSize: 18,
        margin: 8,
    },
});

/**
 * Returns the title of a category based on its ID.
 *
 * @param {string} id - The ID of the category.
 * @returns {string} - The title of the category.
 */
function getCategoryTitle(id) {
    const temp = CATEGORIES.find((obj) => id === obj.id)   

    if (temp == undefined)
        throw new Error(`No Category with ID of ${id}`);

    return temp.title;
}

/**
 * 
 * @param {Array<string>} categoryIds
 * @returns {ReactElement}
 */
function Details({categoryIds, textStyle}) {
    const categories = categoryIds.map((id) =>
            <Text style={[Styles.fontMd, textStyle]}>{getCategoryTitle(id)}</Text>
     );
    return (
        <View style={[Styles.flexRow, Styles.paddingMd]}>
            {categories}
        </View>
    );
}