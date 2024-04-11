import React from "react";
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { color } from "../contans/color"; 

export default function StudyStackScreen() {
  const HomeStack = createNativeStackNavigator();
  const VocaStack = createNativeStackNavigator();
  return (
    <HomeStack.Navigator>
          <HomeStack.Screen options={{title: 'Từ vựng Eps',headerStyle: { backgroundColor: color.statusbar_bg},headerTintColor: '#fff'}} name="VocaView" component={HomeScreen} />
    </HomeStack.Navigator>
  );
}

function HomeScreen() {
  return (
    <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
      <Text>Home!</Text>
    </View>
  );
}

function SettingsScreen() {
  return (
    <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
      <Text>Settings!</Text>
    </View>
  );
}