import React from "react";
import { TouchableOpacity } from "react-native";
import styles from "../assets/styles";
import { MaterialIcons } from "@expo/vector-icons";

const Filters = () => (
  <TouchableOpacity style={styles.miniButton}>
    <MaterialIcons name="add-location-alt" size={32} color="#363636" />
  </TouchableOpacity>
);

export default Filters;
