import React, { useState, useContext } from "react";
import {
  AppBar,
  IconButton,
  Button,
  Avatar, 
} from "@react-native-material/core";
import Icon from "@expo/vector-icons/MaterialCommunityIcons";

const DrawerView = () => {
  const [loggedIn, setLoggedIn] = useState(false);
  return (
    <AppBar
      title="DalePlay"
      leading={props => (
        
        <IconButton
          icon={props => <Icon name="folder" {...props} />}
          {...props}
        />
      
      )}
      trailing={props =>
        loggedIn ? (
          <IconButton
            icon={<Avatar label="Yaman KATBY" size={28} />}
            onPress={() => setLoggedIn(!loggedIn)}
            {...props}
          />
        ) : (
          <Button
            variant="text"
            title="Login"
            compact
            style={{ marginEnd: 4 }}
            onPress={() => setLoggedIn(!loggedIn)}
            {...props}
          />
        )
      }
    >
    </AppBar>
  );
};

export default DrawerView;