import React from "react";
import {Text, Container, Content, Form, Item, Input, Label, Fab} from "native-base";
import {Row} from "react-native-easy-grid";
import styled from "styled-components/native";
import {LinearGradient} from "expo";
import {MaterialIcons} from "@expo/vector-icons";

//Components

class ProfileStepScreen extends React.Component {
    static navigationOptions = {
        title: "",
    };

    render() {
        return (
            <ScreenContainer>
                <LinearGradient colors={["#3f51b5", "#B39DDB"]}>
                    <ContentContainer>
                        <Row style={{height: 'auto', marginBottom: 10, marginTop: 30, backgroundColor: 'transparent'}}>
                            <Text style={{fontSize: 26, fontWeight: '600', color: "#fff"}}>
                                Registar
                            </Text>
                        </Row>
                        <Row style={{height: 'auto', backgroundColor: 'transparent', marginBottom: 30}}>
                            <Text style={{
                                fontSize: 16,
                                lineHeight: 24,
                                color: '#fff',
                            }}>
                                Aproveite este espaço para falar um pouco sobre si, ideia ou tecnologia.
                            </Text>
                        </Row>
                    </ContentContainer>
                </LinearGradient>
                <Container>
                    <Content style={{paddingLeft: 20, paddingRight: 20}}>
                        <Form style={{paddingBottom: 60}}>
                            <Item style={{marginLeft: 0}} floatingLabel>
                                <Label style={{color: '#757575'}}>Empresa</Label>
                                <Input/>
                            </Item>
                            <Item style={{marginLeft: 0}} floatingLabel>
                                <Label style={{color: '#757575'}}>Profissão</Label>
                                <Input/>
                            </Item>
                            <Item style={{marginLeft: 0}} floatingLabel>
                                <Label style={{color: '#757575'}}>Função</Label>
                                <Input/>
                            </Item>
                            <Item style={{marginLeft: 0}} floatingLabel>
                                <Label style={{color: '#757575'}}>Sobre mim/Ideia</Label>
                                <Input/>
                            </Item>
                        </Form>
                    </Content>
                </Container>
                <Fab
                    direction="up"
                    containerStyle={{}}
                    style={{backgroundColor: '#3f51b5'}}
                    position="bottomRight"
                >
                    <MaterialIcons name="arrow-forward" size={24} color="#ffffff"/>
                </Fab>
            </ScreenContainer>
        );
    }
}

export default ProfileStepScreen;

const ScreenContainer = styled.View`
  flex: 1;
  background-color: #fff;
`;

const ContentContainer = styled.View`
  margin-left: 20px;
  margin-right: 20px;
`;
