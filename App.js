import React from "react";
import { StyleSheet, View } from "react-native";
import styled from "styled-components";
export default class App extends React.Component {
  render() {
    return (
      <Container>
        <TitleBar>
          <TitleText>Give.</TitleText>
        </TitleBar>
        <Given>
          <Text>Given Today</Text>
        </Given>
      </Container>
    );
  }
}

const Container = styled.View`
  flex: 1;
  background-color: #fff;
`;
const TitleBar = styled.View`
  margin-top: 90px;
  margin-left: 40px;
`;
const TitleText = styled.Text`
  font-size: 56px;
  font-weight: 100;
`;

const Given = styled.View``;
const Text = styled.Text``;
