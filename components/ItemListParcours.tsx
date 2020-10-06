import * as React from "react";
import {Parcours} from "../types/parcours";
import {Body, Col, ListItem, Row, Text, Thumbnail} from "native-base";
import StyleItemListParcours from "./StyleItemListParcours";

interface IItemListParcours {
    parcours: Parcours.Parcours
}


export default function ItemListParcours({parcours}: IItemListParcours) {
    return (
        <ListItem style={StyleItemListParcours.parcours}>

            <Body style={{borderColor: "red"}}>
                <Row style={{alignItems: "center"}}>
                    <Col style={{width: '60%'}}>
                        <Text>{parcours.meta.nom}</Text>
                        <Text note numberOfLines={2}>{parcours.meta.type}</Text>
                    </Col>
                    <Col>
                        <Thumbnail style={StyleItemListParcours.thumbnail}
                                   large source={{uri: parcours.meta.thumbnail}}/>
                    </Col>
                </Row>
            </Body>


            {/*<Left>*/}
            {/*    <Thumbnail square source={{uri:parcours.meta.thumbnail}}/>*/}
            {/*</Left>*/}
            {/*<Body>*/}
            {/*    <Text>{parcours.meta.type}</Text>*/}
            {/*    <Text note numberOfLines={2}>{parcours.meta.nom}</Text>*/}
            {/*</Body>*/}
            {/*<Right>*/}
            {/*    <Button transparent>*/}
            {/*        <Text>View</Text>*/}
            {/*    </Button>*/}
            {/*</Right>*/}
        </ListItem>
    );


}