import React, { Component, useEffect, useState } from "react";
import {
  ScrollView,
  View,
  Text,
  ImageBackground,
  TouchableOpacity,
  TextInput,
  Slider,
  Switch,
} from "react-native";
import { Icon, ProfileItem } from "../components";
import DEMO from "../assets/data/demo";
import styles, { WHITE } from "../assets/styles";
import AsyncStorage from "@react-native-async-storage/async-storage";
import { OmitProps } from "antd/lib/transfer/ListBody";
import SelectDropdown from 'react-native-select-dropdown'
import { initializeApp } from "@firebase/app";
import * as firebase from 'firebase/app';
import 'firebase/firestore';
import { getDatabase, ref, set } from "firebase/database";
import internal from "stream";

const firebaseConfig = {
  apiKey: "AIzaSyAl-ejaBqqQlwmKsMnaT1HzxP1iemoxS8w",
  authDomain: "absolute-units.firebaseapp.com",
  projectId: "absolute-units",
  storageBucket: "absolute-units.appspot.com",
  messagingSenderId: "588589820289",
  appId: "1:588589820289:web:4eef9033c24e3ea2602080",
  measurementId: "G-0NHHC3WPQD",
  databaseURL: "https://absolute-units-default-rtdb.firebaseio.com"
};

firebase.initializeApp(firebaseConfig);

const database = getDatabase();


const writeUserData = (username: string, name: string, password: string, level: string) => {
  set(ref(database, 'users/' + username), {
    username: username,
    name: name,
    password: password,
    hikerLevel: level,
  });
}

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
  const [range, setRange] = useState(0)
  const [isCarpool, setCarpool] = useState(false);

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
    drive: false,
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

  const hiker_Levels = ["Easy", "Intermediate", "Hard"];

  if (needSignUp) {
    return (
      <ImageBackground
        source={require("../assets/images/bg.png")}
        style={styles.bg}
      >
      <View style={styles.topCentered}>
        <Text style={styles.title}>Sign Up</Text>
      </View>
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
        <View style={styles.distance}>
          <Text style={{
            color: 'white',
            fontSize: 15,
          }}>Willing to drive {range < 200 ? range : "200+"} miles:</Text>
          <Slider
              value={range}
              step={5}
              maximumValue={200}
              onValueChange={value => {
                if (typeof(value) != "number") {
                  setRange(value[0])
                  var tempState = state;
                  tempState.range = "" + value[0];
                  setState(tempState);
                } else {
                  setRange(value)
                  var tempState = state;
                  tempState.range = "" + value;
                  setState(tempState);
                }
              }}
          />
          <View style={{flexDirection:"row", alignContent:"center"}}>
            <Text style={{
              color: 'white',
              fontSize: 15,
            }}>Can drive carpool:   </Text>
            <Switch
              trackColor={{ false: "#767577", true: "#81b0ff" }}
              thumbColor={isCarpool ? "#5636B8" : "#f4f3f4"}
              ios_backgroundColor="#3e3e3e"
              onValueChange={(value) => {
                setCarpool(value);
                var tempState = state;
                tempState.drive = value;
                setState(tempState);
              }}
              value={isCarpool}
              style={{marginVertical:-5}}
            />
          </View>
        </View>
        <SelectDropdown
          buttonStyle={styles.hikerButton}
          buttonTextStyle={styles.hikerText}
          dropdownStyle={styles.dropDown}
          data={hiker_Levels}
          dropdownIconPosition="left"
          renderDropdownIcon={(isOpened) => {
            return (<Icon name={isOpened ? "caret-down" : "caret-up"} size={20} color={WHITE} />)
          }}
          defaultButtonText="Hiker level"
          onSelect={(selectedItem, index) => {
            var tempState = state;
            tempState.hikerLevel = selectedItem;
            setState(tempState);
          }}
        />
        <View style={styles.actionsProfile}>
          <TouchableOpacity style={styles.roundedButton} onPress={() => writeUserData(state.username, state.name, state.password, state.hikerLevel)}>
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
            drive={drive? "can drive carpool" : "can't drive carpool"}
            hikeType={hikeType}
          />
        </ScrollView>
      </ImageBackground>
    );
  }
};

export default Profile;
