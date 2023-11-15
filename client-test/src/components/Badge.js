import React from 'react';
import { Text, View } from 'react-native';
import { Avatar, Badge, Icon, withBadge } from '@rneui/themed';

const BadgedIcon = withBadge(20)(Icon);

const BadgeComponent = () => {
  return (
    <>

     <View
        style={{
          flexDirection: 'row',
          justifyContent: 'space-around',
          marginTop: 0,
          marginBottom: 10,
        }}
      >
        
        <Button
                text="menu"
                status="info"
                onPress={() => useconf.current.openDrawer()}
              />
        <BadgedIcon type="ionicon" name="ios-chatbubbles" status="primary" />
        <Badge value="3" status="success" />
        <Badge value="99+" status="error" />
        <Badge value="30" status="primary" />
      </View>

    </>  
  ) 
}

const styles = StyleSheet.create({
subHeader: {
  backgroundColor : "#2089dc",
  color : "white",
  textAlign : "center",
  paddingVertical : 5,
  marginBottom : 10
}
})

export default BadgeComponent;