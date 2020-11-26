import React, {Component} from 'react';

import LoginScreen from "./Screens/LoginScreen";
<<<<<<< HEAD
import { StyleSheet} from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import {DrawerCustomNavigator} from './Navigators/DrawerCustomNavigator.js';
=======
import MainScreen from "./Screens/MainScreen";
>>>>>>> origin/master

export default class App extends Component{

    constructor(props){
        super(props);
<<<<<<< HEAD
        this.state = {isLoggedIn:true}
=======
        this.state = {isLoggedIn:false}
>>>>>>> origin/master
    }

    setLogin(){
        this.setState({isLoggedIn:true});
    }

    setLogout(){
        this.setState({isLoggedIn:false});
    }

    render(){
<<<<<<< HEAD
      if(this.state.isLoggedIn){
        return (
          <NavigationContainer>
            <DrawerCustomNavigator />
          </NavigationContainer>  
        );

      } else {
        return <LoginScreen onLogin={() => this.setLogin()}/>
      }
    }
    
  }

    const styles = StyleSheet.create({
        container: {
          flex: 1,
          backgroundColor: '#fff',
          alignItems: 'center',
          justifyContent: 'center',
        },
      });
      
=======

        let screen;
        if(this.state.isLoggedIn){
            screen = <MainScreen onLogout={() => this.setLogout()}/>
        } else {
            screen = <LoginScreen onLogin={() => this.setLogin()}/>
        }

        return screen;

    }

}
>>>>>>> origin/master
