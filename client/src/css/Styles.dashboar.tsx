import React, { Component } from 'react';
import { Dimensions } from 'react-native';

const deviceHeight = Dimensions.get('screen').height

const Styles_Dash = {
    container: {
        flex: 1, alignItems: 'center',
        justifyContent: 'center',padding: 16,
    },
    navigationContainer: {
        backgroundColor: '#ecf0f1',
    },
    paragraph: {
        padding: 16,fontSize: 15,textAlign: 'center',
    },    
    loadingtext:{
        textAlign: "center",alignItems: 'center',
        justifyContent: 'center',fontSize: 30,
        fontWeight: 'bold',color: "#000",
    },  
    spinner: {
        alignItems: "center",justifyContent: "center",
    },
};

export default  Styles_Dash;