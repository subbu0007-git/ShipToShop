import React from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import Import from "../Globalimports/Imports";
import Homepage from '../pages/Homepage';
import Cartpage from '../pages/Cartpage';
import Orderspage from '../pages/Orderspage';

const bottom = createBottomTabNavigator();
const Bottomtabnavigator = () => {
    return (
        <>
            <bottom.Navigator
                screenOptions={{ tabBarStyle: { position: "absolute", backgroundColor: 'white', width: '96%', alignItems: "center", marginRight: 10, marginLeft: 8, marginVertical: 20, height: 74, borderRadius: 100, borderTopColor: "lightgrey", borderTopWidth: 1, borderLeftColor: "lightgrey", borderLeftWidth: 1, borderRightColor: "lightgrey", borderRightWidth: 1 }, tabBarActiveTintColor: '#ff4500', tabBarInactiveTintColor: '#1D1D1D', tabBarShowLabel: false, }} initialRouteName={'Home'}>
                
                <bottom.Screen name='Home' component={Homepage} options={{
                    headerShown: true, headerStyle: { backgroundColor: "rgba(193, 227, 249, 1)", height: 116 }, headerShadowVisible: false, headerTitle: "Home", headerTitleStyle: { fontFamily: Import.Theme.h2.fontFamily, fontWeight: "600", fontSize: 28 },
                    tabBarIcon: ({ color, size, focused }) => (
                        <Import.View style={{ justifyContent: "center", alignItems: "center", width: focused ? "92%" : 60, height: focused ? 60 : 60, backgroundColor: focused ? "rgba(200,230,250,255)" : null, borderRadius: 40 }}>
                            <Import.Foundation name='clipboard-notes' color={Import.colors.Iconcolor} size={Import.DataTerms.BottomtabIconSize} />
                            <Import.Text style={[Import.Theme.h4, { color: "#194F82" }]}>Home</Import.Text>
                        </Import.View>
                    ),
                }} />
                <bottom.Screen name='Cart' component={Cartpage} options={{
                    headerShown: false,
                    tabBarIcon: ({ color, focused }) => (
                        <Import.View style={{ justifyContent: "center", alignItems: "center", width: focused ? "92%" : 60, height: focused ? 60 : 60, backgroundColor: focused ? "rgba(200,230,250,255)" : null, borderRadius: 40 }}>
                            <Import.Ionicons name='wallet-outline' color={Import.colors.Iconcolor} size={Import.DataTerms.BottomtabIconSize} />
                            <Import.Text style={[Import.Theme.h4, { color: "#194F82" }]}>Cart</Import.Text>
                        </Import.View>
                    ),
                }} />
                <bottom.Screen name='Orders' component={Orderspage} options={{
                    headerShown: true, headerStyle: { backgroundColor: "rgba(193, 227, 249, 1)", height: 116 }, headerShadowVisible: false, headerTitle: "MY PROFILE", headerTitleStyle: { fontFamily: Import.Theme.h2.fontFamily, fontWeight: "600", fontSize: 28 },
                    tabBarIcon: ({ color, size, focused }) => (
                        <Import.View style={{ justifyContent: "center", alignItems: "center", width: focused ? "92%" : 60, height: focused ? 60 : 60, backgroundColor: focused ? "rgba(200,230,250,255)" : null, borderRadius: 40, marginRight: focused ? 0 : 0 }}>
                            <Import.Ionicons name='person-outline' color={Import.colors.Iconcolor} size={Import.DataTerms.BottomtabIconSize} />
                            <Import.Text style={[Import.Theme.h4, { color: "#194F82" }]}>Orders</Import.Text>
                        </Import.View>
                    ),
                }} />
            </bottom.Navigator>
        </>
    )
}
export default Bottomtabnavigator;