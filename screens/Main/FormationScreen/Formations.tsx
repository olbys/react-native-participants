import * as React from "react";
import {useEffect, useState} from "react";
import {Text} from "../../../components/Themed";
import {Col, Container, Content, Grid, List, Row, Separator} from "native-base";
import Styles from "./Styles";
import StatisticsCard from "./Formations/StatisticsCard";
import {Sessions} from "../../../types/sessions";
import {getSessionsMine} from "./Service";
import {sessionsFormationExtend} from "../../../mock/sessions";
import {Parcours} from "../../../types/parcours";
import ItemListParcours from "../../../components/ItemListParcours";
import variables from "../../../assets/variables";

interface IFormations {

}

const MODE: | "dev" | "prod" = "dev";
type SessionsParcours = {
    session: string,
    parcours: Parcours.Parcours[]
}
export default function Formations({}: IFormations) {
    const [parcoursList, setParcoursList] = useState<SessionsParcours[]>([]);

    const setDatas = (sessionsFormations: Sessions.SessionFormationExtended[]): void => {
        let datas: SessionsParcours[] = [];
        sessionsFormations.map((session) => {
            if (session) {
                let index = datas.findIndex((s) => s.session === session.sessionUid);
                if (index === -1) {
                    datas = [...datas, {session: session.sessionUid, parcours: [session.parcours]}]
                    console.log('rr', session.sessionUid);
                } else {
                    datas[index].parcours.push(session.parcours);
                    console.log('rr', session);
                }
            }
        });
        setParcoursList(datas);
    }

    useEffect(() => {
        if (MODE == "prod") {
            getSessionsMine().then((response) => {
                if (response.result === "ok") {
                    setDatas(response.sessions);
                }
            })
        } else if (sessionsFormationExtend) {
            setDatas(sessionsFormationExtend);
        }


    }, []);

    useEffect(() => {
        if (parcoursList.length !== 0) {
            console.log('sessions data', parcoursList[0].parcours.length);
        }
    }, [parcoursList]);


    return (
        <Container style={{}}>
            <Content style={[Styles.frameBackground]}>
                <Grid style={[Styles.subHearder]}>
                    <Row style={Styles.titleRow}>
                        {/*<Text style={Styles.title}>Mes formations</Text>*/}
                    </Row>
                    <Row  style={{paddingLeft:15, paddingRight:15, marginTop:-70}}>
                        <Col>
                            <StatisticsCard title={"Complétions globale"} value={12}/>
                        </Col>
                    </Row>
                </Grid>
                {/*{parcoursList.map((parcours, index) => (*/}
                {/*    <Grid key={index+1} style={{marginTop: 2, zIndex: 100, elevation: 100,}}>*/}
                {/*       /!*<Row>*!/*/}
                {/*       /!*    <Col>*!/*/}
                {/*       /!*        <Text style={[Styles.Subtitle, {fontWeight:"bold"}]}>*!/*/}
                {/*       /!*            Session {String.fromCharCode(65+index+1)}*!/*/}
                {/*       /!*        </Text>*!/*/}
                {/*       /!*    </Col>*!/*/}
                {/*       /!*</Row>*!/*/}
                {/*       /!* <Row>*!/*/}
                {/*       /!*     <Col>*!/*/}
                {/*       /!*         <CustomCarouselParcours data={parcoursList}/>*!/*/}
                {/*       /!*     </Col>*!/*/}
                {/*       /!* </Row>*!/*/}
                {/*       <Row>*/}
                {/*       </Row>*/}
                {/*    </Grid>*/}
                {/*))}*/}
                <List style={{backgroundColor: "#ffffff"}}>
                    {parcoursList.map((session, index) => (
                        session.parcours.map((parcours) => (
                            <ItemListParcours key={index} parcours={parcours}/>
                        ))

                    ))}
                </List>


            </Content>
        </Container>
    );
};
