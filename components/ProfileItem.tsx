import React from "react";
import { Text, View } from "react-native";
import Icon from "./Icon";
import { ProfileItemT } from "../types";
import styles, { DARK_GRAY, WHITE } from "../assets/styles";
import { MaterialIcons } from '@expo/vector-icons';
import { Ionicons } from '@expo/vector-icons';
import { Foundation } from '@expo/vector-icons';

const ProfileItem = ({
  phoneNum,
  name,
  age,
  pronouns,
  location,
  level,
  drive,
  distance,
}: ProfileItemT) => (
  <View style={styles.containerProfileItem}>

    <Text style={styles.name}>{name}</Text>

    <Text style={styles.descriptionProfileItem}>
      {age} - {pronouns}
    </Text>

    <View style={styles.info}>
          <Text style={styles.iconProfile}>
            <Ionicons name="location-sharp" size={24} color="black" />
          </Text>
          <Text style={styles.inputContent}>{"Location: "}</Text>
          <Text style={styles.infoContent}>{location}</Text>
        </View>

    <View style={styles.info}>
      <Text style={styles.iconProfile}>
        <MaterialIcons name="directions-walk" size={24} color="black" />
      </Text>
      <Text style={styles.inputContent}>{"Hiking Level: "}</Text>
      <Text style={styles.infoContent}>{level}</Text>
    </View>

    <View style={styles.info}>
      <Text style={styles.iconProfile}>
        <Ionicons name="car" size={24} color="black" />
      </Text>
      <Text style={styles.inputContent}>{"Able to drive: "}</Text>
      <Text style={styles.infoContent}>{drive}</Text>
    </View>

    <View style={styles.info}>
      <Text style={styles.iconProfile}>
        <Foundation name="mountains" size={24} color="black" />
      </Text>
      <Text style={styles.inputContent}>{"Driving Range: "}</Text>
      <Text style={styles.infoContent}>{distance}</Text>
    </View>
  </View>
);

export default ProfileItem;
