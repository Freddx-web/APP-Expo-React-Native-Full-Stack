/**
 * PermisosAndroid
Proyecto con código nativo requerido
La siguiente sección solo se aplica a proyectos con código nativo
 expuesto. Si utiliza el flujo de trabajo administrado de Expo, 
 consulte la guía sobre permisos en la documentación de Expo para
  conocer la alternativa adecuada.

PermissionsAndroid proporciona acceso al nuevo modelo de permisos
 de Android M. Los llamados permisos "normales" se conceden por 
 defecto cuando se instala la aplicación siempre que aparezcan en .
  Sin embargo, los permisos "peligrosos" requieren un mensaje de
   diálogo. Debe usar este módulo para esos permisos.AndroidManifest.xml

En los dispositivos anteriores a la versión 23 del SDK, los permisos
 se conceden automáticamente si aparecen en el manifiesto, por lo
  que siempre deben dar como resultado y siempre deben resolverse en 
  .checktruerequestPermissionsAndroid.RESULTS.GRANTED

Si un usuario ha desactivado previamente un permiso que solicitas,
 el sistema operativo aconsejará a tu aplicación que muestre una 
 justificación para necesitar el permiso. El argumento opcional 
 mostrará un mensaje de diálogo solo si es necesario; de lo contrario,
  aparecerá el mensaje de permiso normal.rationale
 */

// Fuente: https://reactnative.dev/docs/permissionsandroid

import React from "react";
import { Button, PermissionsAndroid, SafeAreaView, StatusBar, StyleSheet, Text, View } from "react-native";

const requestCameraPermission = async () => {
  try {
    const granted = await PermissionsAndroid.request(
      PermissionsAndroid.PERMISSIONS.CAMERA,
      {
        title: "Cool Photo App Camera Permission",
        message:
          "Cool Photo App needs access to your camera " +
          "so you can take awesome pictures.",
        buttonNeutral: "Ask Me Later",
        buttonNegative: "Cancel",
        buttonPositive: "OK"
      }
    );
    if (granted === PermissionsAndroid.RESULTS.GRANTED) {
      console.log("You can use the camera");
    } else {
      console.log("Camera permission denied");
    }
  } catch (err) {
    console.warn(err);
  }
};

const App = () => (
  <View style={styles.container}>
    <Text style={styles.item}>Try permissions</Text>
    <Button title="request permissions" onPress={requestCameraPermission} />
  </View>
);

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    paddingTop: StatusBar.currentHeight,
    backgroundColor: "#ecf0f1",
    padding: 8
  },
  item: {
    margin: 24,
    fontSize: 18,
    fontWeight: "bold",
    textAlign: "center"
  }
});

export default App;

/**
 * Permisos que requieren preguntar al usuario
Disponible como constantes en :PermissionsAndroid.PERMISSIONS

READ_CALENDAR: «android.permission.READ_CALENDAR»
WRITE_CALENDAR: «android.permission.WRITE_CALENDAR»
CAMERA: 'android.permission.CAMERA'
READ_CONTACTS: «android.permission.READ_CONTACTS»
WRITE_CONTACTS: «android.permission.WRITE_CONTACTS»
GET_ACCOUNTS: «android.permission.GET_ACCOUNTS»
ACCESS_FINE_LOCATION: «android.permission.ACCESS_FINE_LOCATION»
ACCESS_COARSE_LOCATION: «android.permission.ACCESS_COARSE_LOCATION»
ACCESS_BACKGROUND_LOCATION: «android.permission.ACCESS_BACKGROUND_LOCATION»
RECORD_AUDIO: «android.permission.RECORD_AUDIO»
READ_PHONE_STATE: «android.permission.READ_PHONE_STATE»
CALL_PHONE: «android.permission.CALL_PHONE»
READ_CALL_LOG: «android.permission.READ_CALL_LOG»
WRITE_CALL_LOG: «android.permission.WRITE_CALL_LOG»
ADD_VOICEMAIL: «com.android.voicemail.permission.ADD_VOICEMAIL»
USE_SIP: «android.permission.USE_SIP»
PROCESS_OUTGOING_CALLS: «android.permission.PROCESS_OUTGOING_CALLS»
BODY_SENSORS: «android.permission.BODY_SENSORS»
SEND_SMS: «android.permission.SEND_SMS»
RECEIVE_SMS: «android.permission.RECEIVE_SMS»
READ_SMS: «android.permission.READ_SMS»
RECEIVE_WAP_PUSH: «android.permission.RECEIVE_WAP_PUSH»
RECEIVE_MMS: «android.permission.RECEIVE_MMS»
READ_EXTERNAL_STORAGE: «android.permission.READ_EXTERNAL_STORAGE»
WRITE_EXTERNAL_STORAGE: «android.permission.WRITE_EXTERNAL_STORAGE»
BLUETOOTH_CONNECT: «android.permission.BLUETOOTH_CONNECT»
BLUETOOTH_SCAN: «android.permission.BLUETOOTH_SCAN»
BLUETOOTH_ADVERTISE: «android.permission.BLUETOOTH_ADVERTISE»
ACCESS_MEDIA_LOCATION: «android.permission.ACCESS_MEDIA_LOCATION»
ACCEPT_HANDOVER: «android.permission.ACCEPT_HANDOVER»
ACTIVITY_RECOGNITION: «android.permission.ACTIVITY_RECOGNITION»
ANSWER_PHONE_CALLS: «android.permission.ANSWER_PHONE_CALLS»
READ_PHONE_NUMBERS: «android.permission.READ_PHONE_NUMBERS»
UWB_RANGING: «android.permission.UWB_RANGING»
BODY_SENSORS_BACKGROUND: «android.permission.BODY_SENSORS_BACKGROUND»
READ_MEDIA_IMAGES: «android.permission.READ_MEDIA_IMAGES»
READ_MEDIA_VIDEO: «android.permission.READ_MEDIA_VIDEO»
READ_MEDIA_AUDIO: «android.permission.READ_MEDIA_AUDIO»
POST_NOTIFICATION: «android.permission.POST_NOTIFICATIONS»
NEARBY_WIFI_DEVICES: «android.permission.NEARBY_WIFI_DEVICES»
READ_VOICEMAIL: «com.android.voicemail.permission.READ_VOICEMAIL»,
WRITE_VOICEMAIL: «com.android.voicemail.permission.WRITE_VOICEMAIL»,
Cadenas de resultados para solicitar permisos
Disponible como constantes en :PermissionsAndroid.RESULTS

GRANTED: «concedido»
DENIED: 'denegado'
NEVER_ASK_AGAIN: «never_ask_again»
 */