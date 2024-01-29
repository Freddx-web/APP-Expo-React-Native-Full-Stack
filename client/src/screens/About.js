import React, { useState, useEffect, Component } from "react";
import { 
	View, 
	Linking, 
	Image,
	StyleSheet, 
	ImageBackground, 
	FlatList, 
	ActivityIndicator } from "react-native";
import {
  Layout,
  TopNav,
  Text,
  Button,
  Section,
  SectionContent,
  useTheme,
  themeColor,
} from "react-native-rapi-ui";
import { Ionicons } from "@expo/vector-icons";
import { FAB, Portal, Provider } from 'react-native-paper';

export default function ({ navigation }) {

  //Style 
  const styles = StyleSheet.create({
    container: {
      flex: 1,
      marginTop: 20,
    },
    scrollView: {
      alignItems: 'center',
      justifyContent: 'center',
    },
    card: {
      flex: 0,
      marginTop: 20,
      marginHorizontal: 1,
    },
    cardtext: {
      fontSize: 19,
      color: "#000"
    },
  });

  // FAB Tab
  const [state, setState] = React.useState({ open: false });
  const onStateChange = ({ open }) => setState({ open });
  const { open } = state;

  // Set Darkmode
  const { isDarkmode, setTheme } = useTheme();

  // Api 
  const [isLoading, setLoading] = useState(true);
  const [data, setData] = useState([]);
  const getMovies = async () => {
    try {
      const response = await fetch('https://reactnative.dev/movies.json');
      const json = await response.json();
      setData(json.movies);
    } catch (error) {
      console.error(error);
    } finally {
      setLoading(false);
    }
  };
  useEffect(() => {
    getMovies();
  }, []);

  return (
    <Layout>
      <TopNav
        middleContent="API Mobil"
        leftContent={
          <Ionicons
            name="chevron-back"
            size={20}
            color={isDarkmode ? themeColor.white100 : themeColor.dark}
          />
        }
        leftAction={() => navigation.goBack()}
        rightContent={
          <Ionicons
            name={isDarkmode ? "sunny" : "moon"}
            size={20}
            color={isDarkmode ? themeColor.white100 : themeColor.dark}
          />
        }
        rightAction={() => {
          if (isDarkmode) {
            setTheme("light");
          } else {
            setTheme("dark");
          }
        }}
      />
      <Provider>
        <View style={{flex: 1, padding: 24}}>
            {isLoading ? (
            <ActivityIndicator />
            ) : (
            <FlatList
              data={data}
              keyExtractor={({id}) => id}
              renderItem={({item}) => (
              <Text>
                {item.title}, {item.releaseYear}
              </Text>
            )}
          />
        )}
        </View>
        <Portal>
          <FAB.Group
            open={open}
            visible
            icon={open ? 'calendar-today' : 'plus'}
            actions={[
              { icon: 'plus', onPress: () => console.log('Pressed add') },
              {
                icon: 'star',
                label: 'Star',
                onPress: () => console.log('Pressed star'),
              },
              {
                icon: 'email',
                label: 'Email',
                onPress: () => console.log('Pressed email'),
              },
              {
                icon: 'bell',
                label: 'Remind',
                onPress: () => console.log('Pressed notifications'),
              },
            ]}
            onStateChange={onStateChange}
            onPress={() => {
            if (open) {
              // do something if the speed dial is open
            }
          }}
        />
      </Portal>
    </Provider>
  </Layout>
  );
}



/// https://snack.expo.dev/Kc1HhNdf7