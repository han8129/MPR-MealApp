import {
    View,
    Pressable,
    Text,
    Image,
    StyleSheet,
    Platform,
} from 'react-native';
import { useNavigation } from '@react-navigation/native';
import Sizes from '../constants/Sizes';
import Styles from '../constants/Styles';

export default function CardMeal({
    id,
    title,
    imageUrl,
    duration,
    complexity,
    affordability,
}) {
    const navigation = useNavigation();

    function pressHandler() {
        navigation.navigate('Meal', {
            mealId: id,
        });
    }

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
                    <Details
                        duration={duration}
                        affordability={affordability}
                    />
                </View>
            </Pressable>
        </View>
    );
}

const styles = StyleSheet.create({
    mealItem: {
        margin: Sizes.lg,
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
        borderRadius: Sizes.md,
        overflow: 'hidden',
    },
    image: {
        width: '100%',
        height: 200,
    },
    title: {
        fontWeight: 'bold',
        textAlign: 'center',
        fontSize: Sizes.lg,
        margin: Sizes.sm,
    },
});

function Details({ duration, affordability, textStyle }) {
    return (
        <View style={[Styles.flexRow, Styles.paddingMd]}>
            <Text style={[Styles.fontMd, textStyle]}>{duration}m</Text>
            <Text style={[Styles.fontMd, textStyle]}> {affordability.toUpperCase()}
            </Text>
        </View>
    );
}
