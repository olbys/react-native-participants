import { StyleSheet } from "react-native";
import variables from "../../assets/variables";

export const Styles = StyleSheet.create({
    image: {
        marginTop: 20,
        alignSelf: "center",
        paddingLeft: 5,
        paddingRight: 5,
        height: 120,
        width: 300
    },
    frameBackground : {
        backgroundColor:variables.ligthGrey,
    },
    title:{
        marginTop:15,
        color : variables.mainBlack_100,
        alignSelf:"center",
        fontSize:22,
        lineHeight:24,
    },
    backgroundWhite:{
        backgroundColor:"#ffffff",
    },
    btnLogin : {
        backgroundColor:variables.mainOrange_100,
        alignSelf:"center",
        width:200
    }
});
export default Styles;