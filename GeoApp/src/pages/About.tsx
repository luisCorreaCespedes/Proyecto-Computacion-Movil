import * as React from "react";
import Accordion from 'react-native-accordion-wrapper';
import { View, Text } from 'react-native';

  const About = () => {

    return (
      <Accordion
        shouldSelectOneItemAtATime
        headerItemsStyle={{
          backgroundColor: '#dedede',
          borderBottomColor: '#000000',
        }}
        dataSource={[{
            title: 'first title',
            child: <View><Text>This is the child view</Text></View>
        }, {
            title: 'second title',
            child: <View><Text>This is the child view</Text></View>
        }]}/>
    );
}

export default About