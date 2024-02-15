import React, { Component } from 'react';
import { Dimensions, StatusBar } from 'react-native';

const deviceHeight = Dimensions.get('screen').height

const Styles_Tab2 = {
    container: {
        flex: 1, paddingTop: StatusBar.currentHeight,
    },
    view:{
        flex: 1,paddingVertical:100,
        backgroundColor: '#fff',borderRadius: 5,
    },
    scrollView: {
        marginHorizontal: 10,
    },
    background: {
        margin: 20,padding: 16,borderRadius: 20,
    },
    subHeader: {
        backgroundColor : "#2089dc",color : "white",
        textAlign : "center",paddingVertical : 5,marginBottom : 10
    },
    horizontal: {
        flex: 1,paddingVertical:100,
        backgroundColor: '#fff',borderRadius: 5,marginBottom: 10,
    },
    horizontalText: {
        textAlign: 'center',fontSize: 16,marginVertical: 10,
    },
    vertical: {
        flex: 1,marginBottom: 10,
        display: 'flex',flexDirection: 'row',
        justifyContent: 'space-evenly',paddingVertical:10,
        backgroundColor: '#fff',borderRadius: 5,
    },
    divider:{
        margin: 16,padding: 5 
    },
    text: {
        fontSize: 16,
    },
};

export default Styles_Tab2;