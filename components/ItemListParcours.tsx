import * as React from "react";
import {Parcours} from "../types/parcours";
import {Body, Button, Left, ListItem, Right, Text, Thumbnail} from "native-base";
import variables from "../assets/variables";

interface IItemListParcours {
    parcours: Parcours.Parcours
}


export default function ItemListParcours({parcours}: IItemListParcours) {
    return (
        <ListItem thumbnail style={{paddingRight:3, paddingLeft:3}}>
            <Left>
                <Thumbnail square source={{uri:parcours.meta.thumbnail}}/>
            </Left>
            <Body>
                <Text>{parcours.meta.type}</Text>
                <Text note numberOfLines={2}>{parcours.meta.nom}</Text>
            </Body>
            <Right>
                <Button transparent>
                    <Text>View</Text>
                </Button>
            </Right>
        </ListItem>
    );
}