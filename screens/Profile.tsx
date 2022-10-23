import React, { Component, useEffect, useState } from "react";
import {
  ScrollView,
  View,
  Text,
  ImageBackground,
  TouchableOpacity,
  TextInput,
  InteractionManagerStatic,
} from "react-native";
import { Icon, ProfileItem } from "../components";
import DEMO from "../assets/data/demo";
import styles, { WHITE } from "../assets/styles";
import AsyncStorage from "@react-native-async-storage/async-storage";
import { OmitProps } from "antd/lib/transfer/ListBody";
import SelectDropdown from 'react-native-select-dropdown';
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
            drive={drive}
            hikeType={hikeType}
          />
        </ScrollView>
      </ImageBackground>
    );
  }
};

export default Profile;
