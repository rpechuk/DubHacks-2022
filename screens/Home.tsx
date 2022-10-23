import React, { Children, useEffect, useState } from "react";
import { View, ImageBackground, TouchableOpacity } from "react-native";
import CardStack, { Card } from "react-native-card-stack-swiper";
import { City, Filters, CardItem, Icon } from "../components";
import styles, { DISLIKE_ACTIONS, LIKE_ACTIONS } from "../assets/styles";
import DEMO from "../assets/data/demo";

const Home = () => {
  const [swiper, setSwiper] = useState<CardStack | null>(null);

  return (
    <ImageBackground
      source={require("../assets/images/bg.png")}
      style={styles.bg}
    >
      <View style={styles.containerHome}>
        <View style={styles.top}>
          <City />
          <Filters />
        </View>

        <View>
          <CardStack
            loop
            verticalSwipe={false}
            renderNoMoreCards={() => null}
            ref={(newSwiper): void => {
              setSwiper(newSwiper);
            }}
            onSwipedLeft={(index) => {
              //TODO: add to not interested pool
              console.log(index);
            }}
            onSwipedRight={(index) => {
              //TODO: add to event pool on rolling basis with limit on groupsize
              console.log(index);
            }}
          >
            {DEMO.map((item) => (
              <Card key={item.id}>
                <CardItem
                  hasActions
                  image={item.image}
                  name={item.name}
                  description={item.description}
                  matches={item.match}
                />
              </Card>
            ))}
          </CardStack>
        </View>
        <View style={styles.actionsCardItem}>
          <TouchableOpacity onPress={() => {
            swiper?.swipeLeft();
          }} style={styles.button}>
            <Icon name="close" color={DISLIKE_ACTIONS} size={25} />
          </TouchableOpacity>

          <TouchableOpacity onPress={() => {
            swiper?.swipeRight();
          }} style={styles.button}>
            <Icon name="heart" color={LIKE_ACTIONS} size={25} />
          </TouchableOpacity>
        </View>
      </View>
    </ImageBackground>
  );
};

export default Home;
