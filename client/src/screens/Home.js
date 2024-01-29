import React from "react";
import { View, Linking, Image, StyleSheet, ImageBackground } from "react-native";
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

export default function ({ navigation }) {

  //const staticImage = require("./src/assets/icon.png");
  const { isDarkmode, setTheme } = useTheme();

  const styles = StyleSheet.create({

    logo: {
      width: 26,
      height: 28,
    },
    ImageBackground: {
      flex: 1,
      resizeMode: "cover",
      width: "100%",
      alignItems: "center",
    },
  });



  return (
    <Layout>
      <TopNav
        middleContent="Aplicacion Mobil"
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
      <View
        style={{
          flex: 1,
          alignItems: "center",
          justifyContent: "center",
        }}
      >
        <Section>
          <SectionContent>
            <Text  style={{ textAlign: "center" }}>
            <Image
              resizeMode="contain"
              style={{
                height: 100,
                width: 100,
                padding: 0,
              }}
              
              source={require("../../assets/icon.png")}
            />
             {"\n"}
             {"\n"}
             {"\n"}
             {"\n"}
             {"\n"}
              Logo de App
              </Text>
              
            <Button
              text="Iniciar Session"
              onPress={() => {
                navigation.navigate("Login");
              }}
              style={{
                marginTop: 10,
              }}
            />
            
            <Button
              text="Acerca API "
              onPress={() => {
                navigation.navigate("About");
              }}
              style={{
                marginTop: 10,
              }}
            />
          </SectionContent>
        </Section>
        
          <View  fontWeight="bold" style={{ textAlign: "center", color: "#ddd", padding: 16 }}>
            <Text>
              Hecho por Freddy Lopez  © 2020 - 2023
            </Text>
            <Button
              style={{ marginTop: 10 }}
              text="Mi Sitio Web"
              status="info"
              onPress={() => Linking.openURL("https://freddx-web.github.io/Bytech-website/")}
            />
            
          </View>
        
          
     
    

      </View>
    </Layout>
  );
}
