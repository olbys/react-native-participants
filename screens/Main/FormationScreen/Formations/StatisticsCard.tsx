import * as React from "react";
import {Card, CardItem, Col, Grid, Row} from "native-base";
import {StyleSheet, Text} from "react-native";
import variables from "../../../../assets/variables";

interface IStatisticsCard {
    title: string
    value: number
}

export default function StatisticsCard({title, value}: IStatisticsCard) {

    return (
        <Card style={Styles.card}>
            <CardItem style={Styles.cardDim}>
                <Grid>
                    <Row style={Styles.row}>
                        <Col style={{ width: '70%' }}>
                            <Text style={Styles.title}>{title}</Text>
                        </Col>
                        <Col>
                            <Text style={Styles.value}>{value}%</Text>
                        </Col>
                    </Row>
                </Grid>
            </CardItem>
        </Card>
    );
};
export const Styles = StyleSheet.create({
    card:{
        borderRadius:20,
    },
    cardDim: {
        height: 100,
        marginRight:20,
        marginLeft:20,
    },
    row: {
        alignItems: "center"
    },
    title: {
        textAlign: "left",
        color: variables.mainBlack_60,
        fontSize: 12,
    },
    value: {
        textAlign: "center",
        fontSize: 18,
        fontStyle: "italic",
        fontWeight: "bold",
        color: variables.mainOrange_100,
    }
});