import {StyleSheet} from "react-native";
import variables from "../../../assets/variables";


export const Styles = StyleSheet.create({
    frameBackground: {
        backgroundColor: variables.ligthGrey,
        paddingRight:0,
        paddingLeft:0,
    },
    subHearder: {
        marginTop:10,
        paddingTop:10,
    },
    Subtitle: {
        fontSize:18,
        paddingLeft:6,
        paddingRight:6,
        lineHeight: 24,
    },
    backgroundWhite: {
        backgroundColor: "#ffffff",
    },
    btnLogin: {
        backgroundColor: variables.mainOrange_100,
        alignSelf: "center",
        width: 200
    },
    spacing:{
        paddingLeft:6,
        paddingRight:6,
    }
});
export default Styles;