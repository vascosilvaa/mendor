import React from "react";
import { Icon } from "native-base";
import styled from "styled-components/native";

const InputMessageBar = (props) => {
  return (
    <Message>
      <ViewAvatar>
        <Avatar
          source={{
            uri:
              "https://www.thewrap.com/wp-content/uploads/2015/11/Donald-Trump.jpg"
          }}
        />
      </ViewAvatar>
      <ViewInput>
        <InputMessage
          multiline={true}
          underlineColorAndroid="transparent"
          borderWidth="0"
          placeholder="Escrever uma mensagem..."
        />
      </ViewInput>
      <ViewIcon>
        <Icon name="send" style={{ color: "#3F51B5", fontSize: 30 }} />
      </ViewIcon>
    </Message>
  );
};

export default InputMessageBar;


const Message = styled.View`
  background: #fff;
  width: 100%;
  padding: 10px 20px;
  justify-content: space-between;
  flex-direction: row;
`;

const Avatar = styled.Image`
  border-radius: 50px;
  width: 45px;
  height: 45px;
`;

const ViewAvatar = styled.View`
  padding-right: 15px;
  justify-content: center;
`;
const ViewInput = styled.View`
  flex: 1;
  justify-content: center;
  padding-right: 15px;
`;

const InputMessage = styled.TextInput`
  width: 100%;
  font-size: 18px;
  border: 0 !important;
`;

const ViewIcon = styled.View`
  justify-content: center;
`;
