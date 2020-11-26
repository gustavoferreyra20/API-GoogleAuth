import React from 'react';
import { AppLoading } from 'expo';
import { Container, Header, Content, Footer, Text, Grid, Title, Col, Row} from 'native-base';
import * as Font from 'expo-font';
import { Ionicons } from '@expo/vector-icons';

export class HomeScreen extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      isReady: false,
      respuesta: null
    };
  }

  async componentDidMount() {
    await Font.loadAsync({
      Roboto: require('native-base/Fonts/Roboto.ttf'),
      Roboto_medium: require('native-base/Fonts/Roboto_medium.ttf'),
      ...Ionicons.font,
    });
    this.setState({ isReady: true });
  }

  render() {
    if (!this.state.isReady) {
      return <AppLoading />;
    }

    return (
      <Container>
        <Content>
          <Grid>
          <Col contentContainerStyle={{flex: 1}} style={{padding: 10}}>
                <Row style={{justifyContent: 'center', padding: 10} }>
                  <Text>Bienvenido! abre el menú para seleccionar la API.</Text>  
                </Row>
              </Col>
          </Grid>
        </Content>
        <Footer />
      </Container>
    );
  }

  handlerClick(){
    llamarAPI().then(resp=> {
      this.setState({respuesta: resp});
    });
  }
  
}