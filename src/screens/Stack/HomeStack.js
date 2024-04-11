import React from "react";
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { color } from "../contans/color"; 
import HomeScreen from "../HomeScreen";
import CourseScreen from "../CourseScreen";

export default function StudyStackScreen() {
  const HomeStack = createNativeStackNavigator();
//   const VocaStack = createNativeStackNavigator();
  return (
    <HomeStack.Navigator>
          <HomeStack.Screen options={{title: 'Từ vựng Eps',headerStyle: { backgroundColor: color.statusbar_bg},headerTintColor: '#fff'}} name="VocaView" component={HomeScreen} />
          <HomeStack.Screen options={{title: 'Khóa học',headerStyle: { backgroundColor: color.statusbar_bg},headerTintColor: '#fff'}} name="CourseScreen" component={CourseScreen} />
    </HomeStack.Navigator>
  );
}