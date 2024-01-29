import React, {useRef, useState, useEffect} from 'react';
import { View, useWindowDimensions, DrawerLayoutAndroid, Text,
  StyleSheet, SafeAreaView, ActivityIndicator, Animated } from 'react-native';
import { TabView, SceneMap } from 'react-native-tab-view';
import { Button} from '@rneui/themed';
import { Portal, PaperProvider, Divider } from 'react-native-paper';
import { Layout, TopNav } from 'react-native-rapi-ui';


// Views
import PanelView from './views/Panelview.js';
import DrawerView  from './views/DrawerView.js'
export default function Dashboard({ navigation }) {
  //---------------------------------
  // Style
  //---------------------------------
  const styles = StyleSheet.create({
    container: {
      flex: 1,
      alignItems: 'center',
      justifyContent: 'center',
      padding: 16,
    },
    navigationContainer: {
      backgroundColor: '#ecf0f1',
    },
    paragraph: {
      padding: 16,
      fontSize: 15,
      textAlign: 'center',
    },    
    loadingtext:{
      textAlign: "center",
      alignItems: 'center',
      justifyContent: 'center',
      fontSize: 30,
      fontWeight: 'bold',
      color: "#000",
    }, 
    spinner: {
      alignItems: "center",
      justifyContent: "center",
    },
  });
  //---------------------------------
  //  LoadingView
  //---------------------------------
  const LoadingView = () => {
    return(
      <SafeAreaView style={styles.container}>
        <Text style={styles.loadingtext}>
          <ActivityIndicator style={styles.spinner} size="large" color="#00ff00" />
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

  //---------------------------------
  // layout
  const layout = useWindowDimensions();
  //************************************************** */
  // Drawer 
  const drawer = useRef(null);
  const [drawerPosition, setDrawerPosition] = useState('left');
  const navigationView = () => (
    <View>

      <DrawerView />
      
      <Divider />
      <Button
        color={'#4caf50'}
        title="Close drawer"
        onPress={() => drawer.current.closeDrawer()}
      />
    </View>
  );
  //************************************************** */
  // Loading Style
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
  };///////
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
                title="Outlog"
                icon={{
                  name: 'bars',
                  type: 'font-awesome',
                  size: 15,
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