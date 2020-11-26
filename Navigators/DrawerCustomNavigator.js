
import React, {Component} from "react";
import { createDrawerNavigator } from '@react-navigation/drawer';

// Screens
import {HomeScreen} from "../Screens/HomeScreen";
import {BoredScreen} from "../Screens/BoredScreen";
import {DrawerContentScreen} from "../Screens/DrawerContentScreen";

const Drawer = createDrawerNavigator();

export class DrawerCustomNavigator extends Component {

    render(){
        return(
            <Drawer.Navigator 
                initialRouteName="Home"
                headerMode={'none'}
                drawerContent={props => <DrawerContentScreen {...props} />}
            >
                <Drawer.Screen name="Home" component={HomeScreen} />
                <Drawer.Screen name="Bored" component={BoredScreen} />
            </Drawer.Navigator>
        );
    }
    
}
