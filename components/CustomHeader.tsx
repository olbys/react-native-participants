import * as React from "react";
import {Body, Button, Container, Header, Right, Title} from "native-base";
import {CustomIcon} from "./CustomIcon";
import {StyleSheet} from "react-native";
import variables from "../assets/variables";

interface ICustomHeader {

}

export default function CustomHeader({}: ICustomHeader) {
    return (
        <Header style={{backgroundColor: variables.mainBlack_100}}>
            <Body>
                <Title>Learning Road</Title>
            </Body>
            <Right>
                <Button transparent>
                    <CustomIcon type={"FontAwesome"} iconName={'th'}/>
                </Button>
            </Right>
        </Header>
    );
};

const styles = StyleSheet.create({
    header: {
        backgroundColor: variables.mainBlack_100,

    },
    title: {
        fontSize: 20,
        fontWeight: 'bold',
    },
    separator: {
        marginVertical: 30,
        height: 1,
        width: '80%',
    },
});
