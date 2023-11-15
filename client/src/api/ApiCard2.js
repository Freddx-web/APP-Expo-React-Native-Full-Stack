import React, {useState, useEffect} from 'react';
import { StyleSheet, ActivityIndicator} from 'react-native';
import { Text } from "react-native-rapi-ui";
import { Avatar, Card } from 'react-native-paper';

const ApiCardSend = () => {

  // Card
  const LeftContent = props => <Avatar.Icon {...props} icon="folder" />

  // API
  const [fetchedState,setFetchedState]=useState(null);
  const [usersData,setUsersData]=useState([])

  useEffect(() => {
    setFetchedState('loading')
    setTimeout(()=>getData(),3000);
  },[])

  const getData=async()=>{
    try{ //'https://jsonplaceholder.typicode.com/users'
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
  return (
    <Card>
      <Card.Title title="Card #2 " subtitle="Card Subtitle" left={LeftContent} />
      <Card.Content style={styles.cardContent}>
        {
          fetchedState ? 
          <Text style={styles.loadingtext}>
            <ActivityIndicator style={styles.spinner} size="large" color="#00ff00" />
            Loading Data...
          </Text> :
              usersData.map(_api=>

                <Text style={styles.cardtext}  key={_api.id}>
                id:{_api.id}{"\n"}
                Name: {_api.products}{"\n"}
                Email:{_api.email}
                {"\n"}

          </Text> ) 
        }
      </Card.Content>
    </Card> 
  )
}
const styles = StyleSheet.create({
  card: {
    flex: 0,
    marginTop: 20,
    marginHorizontal: 1,
  },
  cardtext: { 
    fontSize: 19,
    color: "#000"
  },
  loadingtext:{
    fontSize: 28,
    fontWeight: 'bold',
    color: "#000",
  }, 
  spinner: {
    alignItems: "center",
    justifyContent: "center",
  }
});

export default ApiCardSend;
