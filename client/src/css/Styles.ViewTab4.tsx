import React, { Component } from 'react';
import { Dimensions, StatusBar } from 'react-native';

const deviceHeight = Dimensions.get('screen').height

const Styles_Tab3 = {
    container: {
        flex: 1,
        marginTop: 10,
        padding: 10
      },
      scrollView: {
       
        alignItems: 'center',
        justifyContent: 'center',
      },
      card:{
        flex: 1,
        marginTop: 30,
        marginHorizontal: 1,
      },
      text: {
        fontSize: 16,
      },
      list: {
        width: "100%",
        height: "90%",
        marginTop: 10,
        padding: 10
      },
};

export default Styles_Tab3;