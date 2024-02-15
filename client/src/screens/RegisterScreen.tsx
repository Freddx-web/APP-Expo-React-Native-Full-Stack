import React, {useState, useEffect} from 'react';
import { View, StyleSheet, TouchableOpacity, Alert, 
  FlatList, ActivityIndicator } from 'react-native'
import { Avatar, Card, Text } from 'react-native-paper'

// Components
import Background from '../components/Background'
import Logo from '../components/Logo'
import Header from '../components/Header'
import Button from '../components/Button'
import TextInput from '../components/TextInput'
import BackButton from '../components/BackButton'
import Paragraph from '../components/Paragraph'
import { theme } from '../core/theme'
// Helpers
import { emailValidator } from '../helpers/emailValidator'
import { passwordValidator } from '../helpers/passwordValidator'
import { nameValidator } from '../helpers/nameValidator'
import axios from 'axios'

export default function RegisterScreen({ navigation }) {
  
  const [username, setuserName] = useState({ value: '', error: '' })
  const [email, setEmail] = useState({ value: '', error: '' })
  const [password, setPassword] = useState({ value: '', error: '' })


  // Axios Fetch Get
  const [loading, setLoading] = useState(false)
  const [fromFetch, setFromFetch] = useState(false)
  const [fromAxios, setFromAxios] = useState(false)
  const [dataSource, setDataSource] = useState([])
  const [axiosData, setAxiosData] = useState(null);



  const onChangeHandler = async () => {
    //

    const usernameError = nameValidator(username.value)
    const emailError = emailValidator(email.value)
    const passwordError = passwordValidator(password.value)

    if (emailError || passwordError || usernameError) {

      setuserName({ ...username, error: usernameError })
      setEmail({ ...email, error: emailError })
      setPassword({ ...password, error: passwordError })
      return

    } else {

      axios
        .post('http://127.0.0.1:4000/api/app', {
          username: username.value,
          email: email.value,
          password: password.value
        })
        .then(function (response) {
          // handle success
          alert(JSON.stringify(response.data));
        })
        .catch(function (error) {
          // handle error
          alert(error.message);
        });

      }
     /*
    navigation.reset({
      index: 0,
      routes: [{ username: 'Dashboard' }],
    })*/

  }

  return (
    <Background>
      <BackButton goBack={navigation.goBack} />
      <Logo />
      <Header>Crear cuenta</Header>
      {/***************************/}

      <TextInput
        label="Nombre"
        returnKeyType="next"
        value={username.value}
        onChangeText={(text) => setuserName({ value: text, error: '' })}
        error={!!username.error}
        errorText={username.error}
      />
      <TextInput
        label="Email"
        returnKeyType="next"
        value={email.value}
        onChangeText={(text) => setEmail({ value: text, error: '' })}
        error={!!email.error}
        errorText={email.error}
        autoCapitalize="none"
        autoCompleteType="email"
        textContentType="emailAddress"
        keyboardType="email-address"
      />
      <TextInput
        label="Contraseña"
        returnKeyType="done"
        value={password.value}
        onChangeText={(text) => setPassword({ value: text, error: '' })}
        error={!!password.error}
        errorText={password.error}
        secureTextEntry
      />
      <Button
        mode="contained"
        onPress={onChangeHandler}
        style={{ marginTop: 24 }}
      >
        Registrase
      </Button>
      <View style={styles.row}>
        <Paragraph>Tiene una cuenta? </Paragraph>
        <TouchableOpacity onPress={() => navigation.replace('LoginScreen')}>
          <Text style={styles.link}>Iniciar Session</Text>
        </TouchableOpacity>
      </View>
    </Background>
  )
}

const styles = StyleSheet.create({
  row: {
    flexDirection: 'row',
    marginTop: 4,
  },
  link: {
    fontWeight: 'bold',
    color: theme.colors.primary,
  },
})