import * as React from "react";
import {useEffect} from "react";
import {Image} from "react-native";
import {Button, Col, Container, Content, Form, Grid, Input, Item, Row, Text} from "native-base";
import Styles from "./Styles";
import variables from "../../assets/variables";
import {CustomIcon} from "../../components/CustomIcon";
import useAuthentificationService from "./Service";
import {useForm} from "react-hook-form";


interface ILoginScreen {
    navigation: any
}

export default function LoginScreen({navigation}: ILoginScreen) {

    const {register, handleSubmit, setValue} = useForm();
    const {login} = useAuthentificationService();
    const onSubmit = (data: any) => {
        console.log('data', JSON.stringify(data));
        const {userName, password} = data;
        console.log(login(userName, password));
        if (login(userName, password)) {
            navigation.navigate('Main');
        }
    }
    useEffect(() => {
        register('userName');
        register('password');
    }, [register])

    return (
        <Container style={Styles.backgroundWhite}>
            <Content>
                <Grid style={{paddingTop: 50, paddingBottom: 30, backgroundColor: variables.ligthGrey}}>
                    <Row>
                        <Col>
                            <Image
                                source={require('./assets/logo_luga.png')}
                                style={Styles.image}
                            />
                        </Col>
                    </Row>
                    <Row>
                        <Col>
                            <Text style={Styles.title}>Connexion</Text>
                        </Col>
                    </Row>
                </Grid>

                <Grid>
                    <Form style={{
                        paddingTop: 30, paddingBottom: 6,
                        paddingLeft: 6, paddingRight: 6, width: "100%"
                    }}>
                        <Row>
                            <Col>
                                <Item inlineLabel>
                                    <CustomIcon iconName={"user"}/>
                                    <Input onChangeText={text => setValue("userName", text)}
                                           textContentType={"username"} placeholder='Adresse e-mail'/>
                                </Item>
                                <Item inlineLabel>
                                    <CustomIcon iconName={"lock"}/>
                                    <Input textContentType={"password"}
                                           onChangeText={text => setValue("password", text)}
                                           placeholder='Mot de passe.'/>
                                </Item>
                            </Col>
                        </Row>

                        <Row style={{marginTop: 6}}>
                            <Col>
                                <Button transparent light small style={{alignSelf: "center"}}>
                                    <Text uppercase={false}>Mot de passe oubliée</Text>
                                </Button>
                            </Col>
                        </Row>

                        <Row style={{marginTop: 10, alignContent: "center"}}>
                            <Col>
                                <Button
                                    onPress={handleSubmit(onSubmit)}
                                    rounded block light style={Styles.btnLogin}>
                                    <Text uppercase={false} style={{
                                        alignContent: "center",
                                        color: "#ffffff"
                                    }}>Se connecter</Text>
                                </Button>
                            </Col>
                        </Row>
                    </Form>

                </Grid>
            </Content>
        </Container>
    );
}