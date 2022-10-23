import React, { Component, useEffect, useState } from "react";
import {
  ScrollView,
  View,
  Text,
  ImageBackground,
  TouchableOpacity,
} from "react-native";
import { ProfileItem } from "../components";
import DEMO from "../assets/data/demo";
import styles, { WHITE } from "../assets/styles";
import AsyncStorage from "@react-native-async-storage/async-storage";
import { OmitProps } from "antd/lib/transfer/ListBody";

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

  if (needSignUp) {
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
