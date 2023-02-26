import React, { Component } from 'react'
import {
    View,
    Text,
    SafeAreaView
} from 'react-native';
import Login from './login';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Home from './home';


const Stack = createNativeStackNavigator();


function RootComponent() {
    return (
        <NavigationContainer>
            <Stack.Navigator initialRouteName="Login"
                screenOptions={{ headerShown: false }}
            >
                <Stack.Screen name="Login" component={Login} />
                <Stack.Screen name="Home" component={Home} />
                {/* <Stack.Screen name="Notification" component={NhacNhoMoi} /> */}
            </Stack.Navigator>
        </NavigationContainer>
    );
}

export default RootComponent;

// export default RootComponent = function () {
//     return (
//         // <Login />
//         <NavigationContainer >
//             {/* mặc định trang đầu tiên là Login dùng initialRouteName */}
//             {/* headerShown dùng để tắt hiển thị thanh StatusBar */}
//             <Stack.Navigator initialRouteName="Home"
//                 screenOptions={{ headerShown: false }}
//             >
//                 <Stack.Screen name="Home" component={Home} />
//                 <Stack.Screen name="Login" component={Login} />
//             </Stack.Navigator>
//         </NavigationContainer>
//     )

// }