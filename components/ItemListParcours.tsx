import * as React from "react";
import {Parcours} from "../types/parcours";
import {Body, Button, Col, ListItem, Row, Text, Thumbnail} from "native-base";
import StyleItemListParcours from "./StyleItemListParcours";
import {CustomIcon} from "./CustomIcon";
import MainStyle from "./MainStyle";
import {CustomProgressBar} from "./CustomProgressBar";

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
                        <Button rounded small iconLeft  primary style={[{margin: 9}, MainStyle.btnAutoPrimary]}>
                            <CustomIcon iconName={'eye'}/>
                            <Text uppercase={false}>Voir</Text>
                        </Button>
                        <CustomProgressBar progress={40} style={{marginLeft:10, }}/>
                    </Col>
                    <Col>
                        <Thumbnail style={StyleItemListParcours.thumbnail}
                                   large source={{uri: parcours.meta.thumbnail}}/>
                    </Col>
                </Row>
            </Body>
        </ListItem>
    );


}