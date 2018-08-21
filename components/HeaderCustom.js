
import React, { Component } from 'react';
import {
  View,
  Text,
  StyleSheet,
} from 'react-native';

import { Container, Header, Left, Right, Body, Button, Icon, Title } from 'native-base';

export default class HeaderCustom extends Component {
  render() {
    return (
      <Header>
        <Left style={{marginTop: 10}}>
          <Button transparent>
            <Icon name='menu' />
          </Button>
        </Left>
        <Body style={{marginTop: 10}}>
          <Title>Tinder Cards</Title>
        </Body>
        <Right style={{marginTop: 10}}>
          <Button transparent>
            <Icon name='camera' />
          </Button>

        </Right>


      </Header>
    );
  }
}
