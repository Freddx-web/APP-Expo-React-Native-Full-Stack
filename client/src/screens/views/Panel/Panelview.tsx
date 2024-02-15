/**
 *  Panel View
 */

import React from 'react';
import { Tab, Text, TabView } from '@rneui/themed';
// Tab
import TabMarket from '../TabViews/Tab1/ViewTab1';
import ViewCripts from '../TabViews/Tab3/TabViewCript';
import TabWallet from '../TabViews/Tab2/TabWallet';

const PanelView = () => {
  const [index, setIndex] = React.useState(0);
  return (
  <>
    <Tab
      value={index}
      onChange={(e) => setIndex(e)}
      indicatorStyle={{
        backgroundColor: 'white',
        height: 3,
      }}
      variant="primary"
    >
      <Tab.Item
        title="Mercado"
        titleStyle={{ fontSize: 12 }}
        icon={{ name:'trending-up', type: 'ionicon', color: 'white' }}
      />

      <Tab.Item 
        title="Mi billetera"
        titleStyle={{ fontSize: 12 }}
        icon={{ name: 'wallet-outline', type: 'ionicon', color: 'white' }}
      />
      <Tab.Item
        title="Conversion"
        titleStyle={{ fontSize: 12 }}
        icon={{ name: 'cash-outline', type: 'ionicon', color: 'white' }}
      />
      <Tab.Item
        title="Criptos"
        titleStyle={{ fontSize: 12 }}
        icon={{ name: 'logo-bitcoin', type: 'ionicon', color: 'white' }}
      />
    </Tab>
    {/****************************************/}
    <TabView value={index} onChange={setIndex} animationType="spring">
      <TabView.Item style={{ backgroundColor: '#afdce133', width: '100%' }}>
        
        <TabMarket />

      </TabView.Item>
      <TabView.Item style={{ backgroundColor: '#afdce133', width: '100%' }}>
        <TabWallet />
      </TabView.Item>
      <TabView.Item style={{ backgroundColor: '#afdce133', width: '100%' }}>
        <Text h1>Tab 3</Text>
        {/* <ViewCripts /> */ }

      </TabView.Item>
      

      <TabView.Item style={{ backgroundColor: '#afdce133', width: '100%' }}>
        
         <ViewCripts /> 

      </TabView.Item>
    </TabView>
    {/****************************************/}
  </>
);
};

export default PanelView; 