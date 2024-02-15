import React, {useRef, useState, useEffect} from 'react';
import { View, useWindowDimensions, DrawerLayoutAndroid, Text, SafeAreaView, ActivityIndicator, Animated } from 'react-native';
import { TabView, SceneMap } from 'react-native-tab-view';
import { Button} from '@rneui/themed';
import { Portal, PaperProvider, Divider } from 'react-native-paper';
import { Layout, TopNav } from 'react-native-rapi-ui';

// Styles CSS import
import  Styles_Dash  from '../css/Styles.dashboar';

// Views
import PanelView from './views/Panel/Panelview';
import DrawerView  from './views/Panel/DrawerView';

export default function Dashboard({ navigation }) {
  
  //************************************************** */
  //  LoadingView
  //************************************************** */
  const LoadingView = () => {
    return(
      <SafeAreaView style={Styles_Dash.container}>
        <Text style={Styles_Dash.loadingtext}>
          <ActivityIndicator style={Styles_Dash.spinner} size="large" color="#00ff00" />
          {"\n"}
          {"\n"}
            Cargando
        </Text>       
        <Animated.View>
          <Text> By DalePlay</Text>
        </Animated.View>
      </SafeAreaView>  
    )
  }
  //************************************************** */
  // layout
  //************************************************** */
  const layout = useWindowDimensions();
  // Drawer 
  const drawer = useRef(null);
  const [drawerPosition, setDrawerPosition] = useState('left');
  const navigationView = () => (
    <View>
      <DrawerView />
      <Divider />
      <Button
        color={'#4caf50'}
        title="Cerrar Panel"
        onPress={() => drawer.current.closeDrawer()}
      />
    </View>
  );
  //************************************************** */
  // Loading Style
  //************************************************** */
  const [fetchedState,setFetchedState]=useState(null);
  const [usersData,setUsersData]=useState([]);
  useEffect(() => {
    setFetchedState('loading')
    setTimeout(()=>getData(),3000);
  },[]);
  const getData=async() => {
    try { //'https://jsonplaceholder.typicode.com/users'
      const response=await fetch('https://jsonplaceholder.typicode.com/users');
      const data=await response.json();
      setUsersData(data)
    }
    catch(error){
      console.log(error)
    }
    finally{
      setFetchedState(null);
    }
  }
  const fadeAnim = useRef(new Animated.Value(0)).current;
  const fadeIn = () => {
    // Will change fadeAnim value to 1 in 5 seconds
    Animated.timing(fadeAnim, {
      toValue: 1,
      duration: 2000,
      useNativeDriver: true,
    }).start();
  };
  //************************************************** */
  return (
    <Layout>
      { 
        fetchedState ? 
          <LoadingView />
        :
        <DrawerLayoutAndroid
          ref={drawer}
          drawerWidth={300}
          drawerPosition={drawerPosition}
          renderNavigationView={navigationView}>
          <PaperProvider>
            <Portal>
              <Button
                title="Panel de Control"
                icon={{
                  name: 'bars',
                  type: 'font-awesome',
                  size: 19,
                  color: 'white',
                }}
                buttonStyle={{ backgroundColor: '#4caf50' }}
                titleStyle={{
                color: 'white',
                marginHorizontal: 20,
                }}
              onPress={() => drawer.current.openDrawer()} 
              /> 
              <PanelView />  
            </Portal>
          </PaperProvider>
        </DrawerLayoutAndroid>
      }
    </Layout>
  );
}