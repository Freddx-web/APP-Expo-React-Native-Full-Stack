import { StyleSheet, Dimensions } from "react-native";
import { theme } from '../core/theme';

const deviceHeight = Dimensions.get('screen').height
const Styles_Login = {
    forgotPassword: {
        width: '100%',
        alignItems: 'flex-end',
        marginBottom: 24,
      },
      row: {
        flexDirection: 'row',
        marginTop: 4,
      },
      forgot: {
        fontSize: 13,
        color: theme.colors.secondary,
      },
      link: {
        fontWeight: 'bold',
        color: theme.colors.primary,
      },
};
export default Styles_Login;