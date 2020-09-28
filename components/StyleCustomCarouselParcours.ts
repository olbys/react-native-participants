import {StyleSheet} from "react-native";
import variables from "../assets/variables";


export const StyleCustomCarouselParcours = StyleSheet.create({
    parcoursCard: {
        borderRadius: 5,
    },
    image_thumnails: {
        height: 180,
        width: 'auto',
        flex: 1
    },
    btnLogin: {
        backgroundColor: variables.mainOrange_100,
        alignSelf: "center",
        width: 200
    },
    alignInCenter: {
        alignContent: "center",
        alignSelf: "center"
    },
    text_small: {
        fontSize:12,
        color:variables.mainBlack_60,
    },

});
export default StyleCustomCarouselParcours;