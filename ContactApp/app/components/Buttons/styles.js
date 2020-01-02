import { StyleSheet } from 'react-native';
import colors from '../../config/colors';

export default StyleSheet.create({
    basicButtonContainer:  {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        marginBottom: 20,
      },
      basicButton: {
        borderColor: colors.border,
        borderWidth: StyleSheet.hairlineWidth,
        backgroundColor: colors.link,
      },
      basicButtonText: {
        paddingVertical: 15,
        paddingHorizontal: 40,
        color: '#fff',
        fontSize: 14,
        fontWeight: '500',
      },
});