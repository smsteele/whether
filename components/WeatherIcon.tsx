import React from "react";
import {Text} from "react-native";

export const WeatherIcon: React.FC<{icon: string, label: string}> = ({icon, label}) => (
    <Text style={{fontSize: 18, margin: 3}}
          accessibilityRole={'image'}
          accessibilityLabel={label || ''}>{icon}</Text>
)
