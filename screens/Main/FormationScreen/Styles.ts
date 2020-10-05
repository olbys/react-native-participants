import {StyleSheet} from "react-native";
import variables from "../../../assets/variables";

const TITLE_ROW_BORDER_RADIUS : number = 50;
export const Styles = StyleSheet.create({
    frameBackground: {
        backgroundColor: variables.ligthGrey,
        paddingRight: 0,
        paddingLeft: 0,
        fontFamily:'karla'

    },
    subHearder: {},
    titleRow: {
        backgroundColor: variables.mainOrange_100,
        height: 80,
        padding:10,
        borderBottomStartRadius:TITLE_ROW_BORDER_RADIUS,
        borderBottomEndRadius:TITLE_ROW_BORDER_RADIUS,
    },
    title:{
        fontSize:22,
        fontWeight:"400",
        color:'#ffffff',
    },
    Subtitle: {
        fontSize: 18,
        paddingLeft: 6,
        paddingRight: 6,
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
});
export default Styles;