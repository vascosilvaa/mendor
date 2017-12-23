import React from "react";
import { Container, Icon, Fab, Text, View } from "native-base";
import styled from "styled-components/native";
//Components
import CategoryGroup from "../../components/CategoryGroup";

class DiscussionsScreen extends React.Component {
  static navigationOptions = {
    title: "Discussões"
  };
  _goToDiscussion = () => {
    const { navigate } = this.props.navigation;
    navigate("DiscussionView");
  }
  render() {
    return (
      <Container>
        <ScrollView>
          <CategoryGroup
            goToDiscussion={this._goToDiscussion}
            idCategory="1"
            nameCategory="EMPREENDEDORISMO"
          />
          <CategoryGroup
            goToDiscussion={this._goToDiscussion}
            idCategory="1"
            nameCategory="EMPREENDEDORISMO"
          />
          <CategoryGroup
            goToDiscussion={this._goToDiscussion}
            idCategory="1"
            nameCategory="EMPREENDEDORISMO"
          />
          <CategoryGroup
            goToDiscussion={this._goToDiscussion}
            idCategory="1"
            nameCategory="EMPREENDEDORISMO"
          />
          <CategoryGroup
            goToDiscussion={this._goToDiscussion}
            idCategory="1"
            nameCategory="EMPREENDEDORISMO"
          />
          <CategoryGroup
            goToDiscussion={this._goToDiscussion}
            idCategory="1"
            nameCategory="EMPREENDEDORISMO"
          />
          <CategoryGroup
            goToDiscussion={this._goToDiscussion}
            idCategory="1"
            nameCategory="EMPREENDEDORISMO"
          />
        </ScrollView>
        <Fab
          direction="up"
          containerStyle={{}}
          style={{ backgroundColor: "#3F51B5" }}
          position="bottomRight"
        >
          <Icon name="add" />
        </Fab>
      </Container>
    );
  }
}

export default DiscussionsScreen;

const ScrollView = styled.ScrollView`
  flex: 1;
  padding-top: 25px;
  background-color: #ffffff;
`;
