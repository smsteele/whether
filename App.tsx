import React from "react";
import {NavigationContainer} from "@react-navigation/native";
import {ForecastScreen} from "./screens/ForecastScreen";
import {HomeScreen} from "./screens/HomeScreen";
import {createBottomTabNavigator} from "@react-navigation/bottom-tabs";


export default function App() {
    const Tab = createBottomTabNavigator();
    return (
        <NavigationContainer>
            <Tab.Navigator initialRouteName={routes.home}>
                <Tab.Screen name={routes.home} component={HomeScreen}/>
                <Tab.Screen name={routes.forecast} component={ForecastScreen}/>
            </Tab.Navigator>
        </NavigationContainer>
    );
}

enum routes {
    home = "Home",
    forecast = "Forecast"
}
