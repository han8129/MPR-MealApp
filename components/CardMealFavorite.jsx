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
import Colors from '../constants/Colors';
import Sizes from '../constants/Sizes';

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

    return (
            <Pressable
                android_ripple={{ color: '#ccc' }}
                style={({ pressed }) => (pressed ? styles.buttonPressed : null)}
                onPress={pressHandler}
            >
        <View style={styles.mealItem}>
                <View style={styles.innerContainer}>
                        <Image
                            source={{ uri: imageUrl }}
                            style={styles.image}
                        />
                        <Text style={styles.title}>{title}</Text>
                <Details categoryIds={categoryIds} />
                </View>
        </View>
            </Pressable>
    );
}

const styles = StyleSheet.create({
    mealItem: {
        margin: Sizes.lg,
        borderRadius: Sizes.lg,
        overflow: Platform.OS === 'android' ? 'hidden' : 'visible',
        backgroundColor: Colors.secondary,
        elevation: 4,
        shadowColor: Colors.primary,
        shadowOpacity: 0.25,
        shadowOffset: { width: 0, height: 2 },
        shadowRadius: Sizes.lg,
        flex: 1,
    },
    buttonPressed: {
        opacity: 0.5,
    },
    innerContainer: {
        borderRadius: 8,
        overflow: 'hidden',
        gap: Sizes.md,
        paddingBottom: Sizes.md
    },
    image: {
        width: '100%',
        height: 200,
    },
    title: {
        fontWeight: 'bold',
        textAlign: 'center',
        fontSize: Sizes.xl,
        color: Colors.primary3
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


const tag = {
    backgroundColor: Colors.primary,
    color: Colors.primary2,
    fontSize: Sizes.lg, 
    borderRadius: Sizes.xl,
    paddingHorizontal: Sizes.lg,
    paddingVertical: Sizes.md
}

const text = {
    marginTop: Sizes.md
    ,color: Colors.primary2
}

function Details({categoryIds}) {
    const categories = categoryIds.map((id) =>
            <Text key={id} style={tag}>{getCategoryTitle(id)}</Text>
     );
    return (
        <View style={[Styles.flexRow, Styles.paddingMd]}>
            <Text style={ text }>Categories: </Text>
            {categories}
        </View>
    );
}