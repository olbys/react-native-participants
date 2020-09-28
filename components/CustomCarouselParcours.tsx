import * as React from "react";
import {useRef, useState} from "react";
import {Image, SafeAreaView, View} from "react-native";
import Carousel from "react-native-snap-carousel";
import {Body, Button, Card, CardItem, Col, Grid, Row, Text} from "native-base";
import {Parcours} from "../types/parcours";
import {dimScreen} from "../constants/Layout";
import {StyleCustomCarouselParcours as Style} from "./StyleCustomCarouselParcours";
import {CustomProgressBar} from "./CustomProgressBar";
import variables from "../assets/variables";


type ParcoursCard = {
    session: string,
    parcours: Parcours.Parcours
}

interface ICustomCarouselParcours {
    data: ParcoursCard[]
}

export default function CustomCarouselParcours({data}: ICustomCarouselParcours) {

    const carouselRef = useRef<Carousel<ParcoursCard>>(null);
    const [slider1ActiveSlide, setSlider1ActiveSlide] = useState<number>(0);


    const _renderItem = ({item, index}: { item: ParcoursCard, index: number }): JSX.Element => {
        return (
            <Card style={[Style.parcoursCard]}>
                <CardItem cardBody>
                    <Image source={{uri: item.parcours.meta.thumbnail}}
                           style={Style.image_thumnails}/>
                </CardItem>
                <CardItem>
                    <Body>
                        <Grid style={[Style.alignInCenter]}>
                            <Row style={[Style.alignInCenter]}>
                                <Text> {item.parcours.meta.nom} </Text>
                            </Row>
                            <Row style={[Style.alignInCenter]}>
                                <Text style={Style.text_small}>
                                    {item.parcours.meta.type}
                                </Text>
                            </Row>
                            <Row>
                                <Col>
                                    <Button
                                        small onPress={() => null} rounded block
                                        light style={[Style.btnLogin, {marginTop: 5}]}>
                                        <Text uppercase={false}
                                              style={[Style.alignInCenter, {color: "#ffffff"}]}>
                                            Démarrer
                                        </Text>
                                    </Button>
                                </Col>
                            </Row>
                            <Row>
                                <Col>
                                  <CustomProgressBar progress={40} style={{marginTop:10}}/>
                                </Col>
                            </Row>
                        </Grid>
                    </Body>
                </CardItem>
            </Card>
        );
    }
    return (
        <SafeAreaView style={{flex: 1, paddingTop:5, paddingBottom: 5}}>
            <View style={{flex: 1, flexDirection: 'row', justifyContent: 'center'}}>
                <Carousel
                    layout={"default"}
                    ref={carouselRef}
                    inactiveSlideOpacity={0.1}
                    inactiveSlideScale={0.5}
                    data={data}
                    sliderWidth={dimScreen.width}
                    itemWidth={300}
                    renderItem={_renderItem}
                    onSnapToItem={index => setSlider1ActiveSlide(index)}/>
            </View>
        </SafeAreaView>
    );
}