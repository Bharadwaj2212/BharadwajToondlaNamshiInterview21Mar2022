/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import React, {useState} from 'react';
import {
  Text,
  View,
  TouchableOpacity
} from 'react-native';

const redColor = "#FF0000";
const blueColor = "#00008B";

const initData = {
  '0X0': {
    id: '0X0',
    activeColor: blueColor,
    isActive: false,
    boxValue: '',
  },
  '0X1': {
    id: '0X1',
    activeColor: blueColor,
    isActive: false,
    boxValue: '',
  },
  '0X2': {
    id: '0X2',
    activeColor: blueColor,
    isActive: false,
    boxValue: '',
  },
  '0X3': {
    id: '0X3',
    activeColor: blueColor,
    isActive: false,
    boxValue: '',
  },
  '1X0': {
    id: '1X0',
    activeColor: blueColor,
    isActive: false,
    boxValue: '',
  },
  '1X1': {
    id: '1X1',
    activeColor: blueColor,
    isActive: false,
    boxValue: '',
  },
  '1X2':{
    id: '1X2',
    activeColor: blueColor,
    isActive: false,
    boxValue: '',
  },
  "1X3": {
    id: '1X3',
    activeColor: blueColor,
    isActive: false,
    boxValue: '',
  },
  "2X0": {
    id: '2X0',
    activeColor: blueColor,
    isActive: false,
    boxValue: '',
  },
  "2X1": {
    id: '2X1',
    activeColor: blueColor,
    isActive: false,
    boxValue: '',
  },
  "2X2": {
    id: '2X2',
    activeColor: blueColor,
    isActive: false,
    boxValue: '',
  },
  "2X3": {
    id: '2X3',
    activeColor: blueColor,
    isActive: false,
    boxValue: '',
  },
  "3X0": {
    id: '3X0',
    activeColor: blueColor,
    isActive: false,
    boxValue: '',
  },
  "3X1": {
    id: '3X1',
    activeColor: blueColor,
    isActive: false,
    boxValue: '',
  },
  "3X2": {
    id: '3X2',
    activeColor: blueColor,
    isActive: false,
    boxValue: '',
  },
  "3X3": {
    id: '3X3',
    activeColor: blueColor,
    isActive: false,
    boxValue: '',
  },
}

const App = () => {
  const [data, setData] = useState(initData);
  const [selected, setSelected] = useState([]);
  const [recentClick, setResentClick] = useState(0);

  const onPressBlock = (reqString, needValue) => {
    let count = selected.length;
    if(!selected.includes(reqString)){
      const lastTwo = selected.slice(selected.length -2);
      selected.push(reqString);
      count = count+1;
      console.log(count, selected, 'rq');
      data[reqString].boxValue = `Box ${count}`
      data[reqString].activeColor = redColor;
      if(lastTwo.length > 0){
        data[lastTwo[0]].activeColor = blueColor;
      }
    }
    setData({...data});
    setSelected(selected);
  }

  return (
    <View style={{ alignItems: 'center', justifyContent: 'center', flex:1 }}>
      {
        [0,1,2,3].map((value) => (
          <View style={{ flexDirection: 'row'}}>
            {
              [0,1,2,3].map((innerValue) => {
                const requiredValue = data[`${value}X${innerValue}`];
                return (
                  <TouchableOpacity
                    key={`${value}X${innerValue}`}
                    style={{
                      width: 75,
                      height: 75,
                      backgroundColor: requiredValue.activeColor,
                      borderWidth: 1,
                      borderColor: 'white',
                      alignItems: 'center', justifyContent: 'center'
                    }}
                    onPress={() => onPressBlock(`${value}X${innerValue}`, requiredValue)}
                  >
                    <Text style={{ color: 'white'}}>{requiredValue.boxValue}</Text>
                  </TouchableOpacity>
              )})
            }
          </View>
        ))
      }
    </View>
  )
}
export default App;
