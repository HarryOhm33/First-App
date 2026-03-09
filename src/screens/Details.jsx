import { StyleSheet, Text, View, Image, ScrollView } from 'react-native';
import React from 'react';

const Details = ({ route }) => {
  const { name } = route.params;

  return (
    <ScrollView contentContainerStyle={styles.container}>
      <Image
        style={styles.image}
        source={{
          uri: 'https://img.freepik.com/free-photo/closeup-scarlet-macaw-from-side-view-scarlet-macaw-closeup-head_488145-3540.jpg',
        }}
      />

      <Text style={styles.heading}>{`Hi, I am ${name}!! 🙃`}</Text>

      <Text style={styles.text}>
        I am a colorful parrot who loves flying around in tropical forests. I
        enjoy eating fresh fruits, nuts, seeds, and sometimes sweet berries. My
        favorite foods are mangoes, bananas, and sunflower seeds.
      </Text>

      <Text style={styles.text}>
        I spend most of my day flying between trees, talking with other parrots,
        and exploring the jungle. People love me because I am intelligent,
        playful, and sometimes I can even mimic human speech!
      </Text>

      <Text style={styles.text}>
        When I am not flying, I like sitting on branches and watching the world
        around me. I also enjoy making funny sounds and interacting with my
        parrot friends. Life in the forest is always an adventure!
      </Text>
    </ScrollView>
  );
};

export default Details;

const styles = StyleSheet.create({
  container: {
    flexGrow: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'grey',
    padding: 20,
    gap: 20,
  },

  image: {
    width: '70%',
    height: 220,
    borderRadius: 10,
    resizeMode: 'cover',
  },

  heading: {
    fontSize: 26,
    fontWeight: '700',
    color: 'white',
    textAlign: 'center',
  },

  text: {
    fontSize: 16,
    color: 'white',
    lineHeight: 22,
    textAlign: 'center',
  },
});
