import {StyleSheet} from "react-native";
import variables from "../assets/variables";
import {ListItem} from "native-base";
import * as React from "react";

const TITLE_ROW_BORDER_RADIUS: number = 50;
export const StyleItemListParcours = StyleSheet.create({
    parcours: {
        backgroundColor: '#ffffff',
        paddingRight: 10,
        paddingLeft: 10,
        marginLeft:20,
        marginRight:20,
        marginTop:10,
        borderRadius: 15
    },
    thumbnail: {
        borderRadius: 10,
        alignSelf: "flex-end",

    }

});

export default StyleItemListParcours;