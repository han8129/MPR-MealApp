import {
    View,
    Pressable,
    Text,
    Image,
    StyleSheet,
    Platform,
    Dimensions,
} from 'react-native';
import { useNavigation } from '@react-navigation/native';
import Sizes from '../constants/Sizes';
import Styles from '../constants/Styles';
import Colors from '../constants/Colors';

export default function CardMeal({
    id,
    title,
    imageUrl,
    duration,
    affordability,
}) {
    const navigation = useNavigation();

    function pressHandler() {
        navigation.navigate('Meal', {
            mealId: id,
        });
    }

    return (
        <Pressable
            android_ripple={{ color: Colors.dark }}
            style={({ pressed }) => (pressed ? styles.buttonPressed : null)}
            onPress={pressHandler}
        >
            <View style={styles.mealItem}>
                <View style={styles.innerContainer}>
                    <Image source={{ uri: imageUrl }} style={styles.image} />
                    <Text style={styles.title}>{title}</Text>

                    <Details
                        style={{}}
                        duration={duration}
                        affordability={affordability}
                    />
                </View>
            </View>
        </Pressable>
    );
}

const styles = StyleSheet.create({
    mealItem: {
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
        borderRadius: Sizes.md,
        overflow: 'hidden',
        gap: Sizes.md,
        paddingBottom: Sizes.md,
    },
    image: {
        width: '100%',
        height: 200,
    },
    title: {
        fontWeight: 'bold',
        textAlign: 'center',
        fontSize: Sizes.xl,
        color: Colors.primary3,
    },
});

const textStyle = {
    fontSize: Sizes.lg,
    color: Colors.primary2,
    textAlign: 'center',
};
function Details({ duration, affordability }) {
    return (
        <Text style={textStyle}>
            {duration}m {' ' + affordability.toUpperCase()}
        </Text>
    );
}
