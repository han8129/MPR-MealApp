import { StyleSheet } from 'react-native';
import Sizes from './Sizes';

export default Styles = StyleSheet.create({
    flexRow: {
        flexDirection: 'row',
        gap: Sizes.md,
    },
    flexColumn: {
        flexDirection: 'column',
        gap: Sizes.md,
    },
    center: {
        alignItems: 'center',
        justifyContent: 'center',
    },
    paddingMd: {
        padding: Sizes.md,
    },

    paddingSm: {
        padding: Sizes.sm,
    },

    borderWidthMd: {
        borderWidth: Sizes.md,
    },
    fontMd: {
        fontSize: Sizes.md,
    },
    fontLg: {
        fontSize: Sizes.lg,
    },
});
