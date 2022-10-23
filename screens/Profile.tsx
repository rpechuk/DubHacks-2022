import React, { Component, useEffect, useState } from "react";
import {
  ScrollView,
  View,
  Text,
  ImageBackground,
  TouchableOpacity,
  TextInput,
} from "react-native";
import { Icon, ProfileItem } from "../components";
import DEMO from "../assets/data/demo";
import styles, { WHITE } from "../assets/styles";
import AsyncStorage from "@react-native-async-storage/async-storage";
import { OmitProps } from "antd/lib/transfer/ListBody";
import SelectDropdown from 'react-native-select-dropdown'


const getData = async (): Promise<boolean> => {
  try {
    const value = await AsyncStorage.getItem('signed_up');
    return value === null
  } catch(e) {
    console.error(e);
    return false
  }
}

const Profile = () => {
  const [needSignUp, setNeedSignUp] = useState(false)

  useEffect(() => {
    getData().then((val) => {
      setNeedSignUp(needSignUp => val);
    });
  });

  const [state, setState] = useState({
    username: '',
    password: '',
    name: '',
    age: '',
    range: '',
    drive: '',
    hikerLevel: '',
  });

  const {
    image,
    name,
    age,
    gender,
    location,
    level,
    drive,
    hikeType,
  } = DEMO[7];

  const hiker_Levels = ["easy", "intermediate", "hard"];

  if (needSignUp) {
    return (
      <ImageBackground
      source={require("../assets/images/bg.png")}
      style={styles.bg}
    >
    <View style={styles.containerSignUp}>
      <ScrollView style={styles.containerProfileItem}>
        <TextInput
          style={styles.loginPage}
          placeholder='Username'
          autoCapitalize="none"
          placeholderTextColor='white'
          onChangeText={val => {
            var tempState = state;
            tempState.username = val;
            setState(tempState);
          }}
        />
        <TextInput
          style={styles.loginPage}
          placeholder='Password'
          secureTextEntry={true}
          autoCapitalize="none"
          placeholderTextColor='white'
          onChangeText={val => {
            var tempState = state;
            tempState.password = val;
            setState(tempState);
          }}
        />
        <TextInput
          style={styles.loginPage}
          placeholder='Name'
          autoCapitalize="none"
          placeholderTextColor='white'
          onChangeText={val => {
            var tempState = state;
            tempState.name = val;
            setState(tempState);
          }}
        />
        <TextInput
          style={styles.loginPage}
          placeholder='Age'
          keyboardType='numeric'
          autoCapitalize="none"
          placeholderTextColor='white'
          onChangeText={val => {
            var tempState = state;
            tempState.age = val;
            setState(tempState);
          }}
        />
        <TextInput
          style={styles.loginPage}
          placeholder='Range (miles)'
          autoCapitalize="none"
          keyboardType='numeric'
          placeholderTextColor='white'
          onChangeText={val => {
            var tempState = state;
            tempState.range = val;
            setState(tempState);
          }}
        />
        <TextInput
          style={styles.loginPage}
          placeholder='Drive'
          autoCapitalize="none"
          placeholderTextColor='white'
          onChangeText={val => {
            var tempState = state;
            tempState.drive = val;
            setState(tempState);
          }}
        />
        <SelectDropdown
          buttonStyle={styles.hikerButton}
          buttonTextStyle={styles.hikerText}
          dropdownStyle={styles.dropDown}
          data={hiker_Levels}
          defaultButtonText="Hiker level"
          onSelect={(selectedItem, index) => {
            var tempState = state;
            tempState.hikerLevel = selectedItem;
            setState(tempState);
            console.log(selectedItem, index)
          }}
          buttonTextAfterSelection={(selectedItem, index) => {
            // text represented after item is selected
            // if data array is an array of objects then return selectedItem.property to render after item is selected
            return selectedItem
          }}
          rowTextForSelection={(item, index) => {
            // text represented for each item in dropdown
            // if data array is an array of objects then return item.property to represent item in dropdown
            return item
          }}
        />
        <View style={styles.actionsProfile}>
          <TouchableOpacity style={styles.roundedButton}>
            <Icon name="chatbubble" size={20} color={WHITE} />
            <Text style={styles.textButton}>Sign Up</Text>
          </TouchableOpacity>
        </View>
      </ScrollView>
    </View>
    </ImageBackground>
  );
  } else {
    return (
      <ImageBackground
        source={require("../assets/images/bg.png")}
        style={styles.bg}
      >
        <ScrollView style={styles.containerProfile}>
          <ImageBackground source={image} style={styles.photo}>
          </ImageBackground>
          <ProfileItem
            name={name}
            age={age}
            gender={gender}
            location={location}
            level={level}
            drive={drive}
            hikeType={hikeType}
          />
        </ScrollView>
      </ImageBackground>
    );
  }
};

export default Profile;
