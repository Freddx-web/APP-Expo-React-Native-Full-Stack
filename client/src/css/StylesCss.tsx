import { StyleSheet, Dimensions } from "react-native";

const deviceHeight = Dimensions.get('screen').height
const styles = {
    parentContainer: {
        height: deviceHeight,
        justifyContent: 'center',
    },

};
export default styles;