import React, { Component } from 'react';
import {
  View,
  Text,
  Image,
  StyleSheet,
} from 'react-native';
import { Container, Header, DeckSwiper, Card, CardItem, Thumbnail, Left, Body, Icon } from 'native-base';


const cards = [
  {
    text: 'Card One',
    name: 'One',
    image: require('./img/img1.jpeg'),
  },
  {
    text: 'Card Two',
    name: 'Two',
    image: require('./img/img2.jpeg'),
  },
  {
    text: 'Card Three',
    name: 'Three',
    image: require('./img/img3.jpeg'),
  },
  {
    text: 'Card Four',
    name: 'Four',
    image: require('./img/img4.jpeg'),
  },
  {
    text: 'Card Five',
    name: 'Five',
    image: require('./img/img5.jpeg'),
  },
  {
    text: 'Card Six',
    name: 'Six',
    image: require('./img/img6.jpeg'),
  },
  {
    text: 'Card Seven',
    name: 'Seven',
    image: require('./img/img7.jpeg'),
  },
];





export default class SwipeCard extends Component {
  render() {
    return (
      <Container style={styles.mainbody}>
        <View>
          <DeckSwiper
            dataSource={cards}
            renderItem={item =>
              <Card style={{ elevation: 3 }}>
                <CardItem>
                  <Left>
                    <Thumbnail source={item.image} />
                    <Body>
                      <Text>{item.text}</Text>
                      <Text note>My clicked</Text>
                    </Body>
                  </Left>
                </CardItem>
                <CardItem cardBody>
                  <Image style={{ height: 300, flex: 1 }} source={item.image} />
                </CardItem>
                <CardItem>
                  <Icon name="heart" style={{ color: '#ED4A6A' }} />
                  <Text>{item.name}</Text>
                </CardItem>
              </Card>
            }
          />
        </View>
      </Container>

    );
  }
}

const styles = StyleSheet.create({
  mainbody: {
    height: 400,
  },
});
