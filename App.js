import React from "react";
// import { StyleSheet, View } from "react-native";
import styled from "styled-components";
import { ScrollView } from "react-native";
import Card from "./components/Card";
// import Image from "react-native-remote-svg";
export default class App extends React.Component {
  render() {
    return (
      <Container>
        <TitleBar>
          <TitleText style={{ fontWeight: "bold" }}>Give</TitleText>
        </TitleBar>
        <Given>
          <Col>
            <Text
              style={{
                fontSize: 20,
                fontWeight: "normal",
                textAlign: "left"
              }}
            >
              Given Today
            </Text>
            <Text style={{ fontWeight: "bold", fontSize: 40 }}>$20</Text>
          </Col>
          <Col>
            <Text
              style={{
                fontSize: 20,
                fontWeight: "normal",
                textAlign: "right",
                marginRight: 40
              }}
            >
              Given in Total
            </Text>
            <Text style={{ marginRight: 40, fontWeight: "bold", fontSize: 40 }}>
              $750
            </Text>
          </Col>
        </Given>
        <Text
          style={{
            marginTop: 70,
            marginLeft: 40,
            fontSize: 30,
            fontWeight: "normal"
          }}
        >
          Donate To
        </Text>
        <ScrollView horizontal={true} showsHorizontalScrollIndicator={false}>
          <ImageContainer style={{ marginTop: 40 }}>
            {donations.map((donation, index) => (
              <Card
                key={index}
                image={donation.image}
                caption={donation.caption}
              />
            ))}
          </ImageContainer>
        </ScrollView>
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

const Given = styled.View`
  margin-top: 40px;
  margin-left: 40px;
  justify-content: space-between;
  flex-direction: row;
`;
const Text = styled.Text``;

const Col = styled.View`
  justify-content: center;
  align-items: center;
`;
const ImageContainer = styled.View`
  flex-direction: row;
  flex-wrap: wrap;
  margin-left: 40px;
`;
const Image = styled.View`
  width: 100%;
  height: 100%;
  position: absolute;
  top: 0;
  left: 0;
`;

const donations = [
  {
    image: require("./assets/sick_kids.png"),
    caption: "Sick Kids"
  },
  {
    image: require("./assets/drink.png"),
    caption: "Pure Water"
  },
  {
    image: require("./assets/campfire.png"),
    caption: "Homeless"
  },
  {
    image: require("./assets/dreamer.png"),
    caption: "Enviornment"
  }
];
