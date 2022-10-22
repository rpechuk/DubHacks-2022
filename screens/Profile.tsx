import React from "react";
import {
  ScrollView,
  View,
  Text,
  ImageBackground,
  TouchableOpacity,
} from "react-native";
import { Icon, ProfileItem } from "../components";
import DEMO from "../assets/data/demo";
import styles, { WHITE } from "../assets/styles";

const Profile = () => {
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
};

export default Profile;
