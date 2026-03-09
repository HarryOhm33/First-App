import React, { useState } from 'react';
import {
  StyleSheet,
  Text,
  View,
  StatusBar,
  Image,
  Button,
  TouchableOpacity,
  Alert,
  Pressable,
  TextInput,
} from 'react-native';
import Toast from 'react-native-toast-message';
import { SafeAreaView } from 'react-native-safe-area-context';

const Home = ({ navigation }) => {
  const [height, setHeight] = useState(200);
  const [parrot, setParrot] = useState('');
  const [name, setName] = useState('');
  const [showDetailBtn, setShowDetailBtn] = useState(false);

  const handleSubmit = () => {
    setParrot(name);
    setName('');
    setShowDetailBtn(true);
  };

  return (
    <SafeAreaView style={styles.container}>
      <StatusBar barStyle="dark-content" />

      <Text style={styles.heading}>Hello buddies!!</Text>

      <Image
        style={styles.image}
        source={{
          uri: 'https://img.freepik.com/free-photo/closeup-scarlet-macaw-from-side-view-scarlet-macaw-closeup-head_488145-3540.jpg',
        }}
      />

      <Text style={styles.parrotText}>
        {parrot ? `Hi, I am ${parrot}!! 🙃` : 'Please Name Me!! ☹️'}
      </Text>

      {showDetailBtn && (
        <Button
          title="Show More About Me"
          onPress={() => navigation.navigate('Details', { name: parrot })}
          color="teal"
        />
      )}

      <TextInput
        style={styles.input}
        placeholder="Enter Name ..."
        placeholderTextColor="#555"
        value={name}
        onChangeText={text => setName(text)}
      />

      <Button title="Submit" onPress={handleSubmit} color="purple" />

      <View style={styles.testButtons}>
        <TouchableOpacity
          style={{ padding: 10, backgroundColor: 'green' }}
          onPressIn={() => setHeight(h => h + 20)}
          onPressOut={() => setHeight(h => h - 20)}
        >
          <Text>Button</Text>
        </TouchableOpacity>

        <TouchableOpacity
          style={{ padding: 10, backgroundColor: 'blue' }}
          onPress={() => Alert.alert('Button Pressed')}
        >
          <Text>Button</Text>
        </TouchableOpacity>

        <Pressable
          style={styles.btn}
          onPress={() =>
            Toast.show({
              type: 'success',
              text1: 'Button Pressed',
            })
          }
        >
          <Text>Button</Text>
        </Pressable>
      </View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    gap: 20,
    backgroundColor: 'grey',
  },

  heading: {
    fontSize: 20,
    fontWeight: 'bold',
    color: 'white',
    textDecorationLine: 'underline',
  },

  image: {
    width: '50%',
    height: '40%',
    resizeMode: 'cover',
    borderRadius: 10,
  },

  parrotText: {
    color: 'white',
    width: '80%',
    textAlign: 'center',
    fontSize: 25,
    fontWeight: '700',
  },

  input: {
    padding: 10,
    width: '80%',
    fontSize: 16,
    fontWeight: '600',
    color: 'white',
    backgroundColor: 'black',
    borderRadius: 10,
  },

  btn: {
    padding: 10,
    width: 100,
    backgroundColor: 'orange',
    borderRadius: 50,
    justifyContent: 'center',
    alignItems: 'center',
  },

  testButtons: {
    flexDirection: 'row',
    gap: 10,
  },
});

export default Home;
