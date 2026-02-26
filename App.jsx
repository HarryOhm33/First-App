import {
  StyleSheet,
  Text,
  View,
  StatusBar,
  Image,
  Button,
  TouchableOpacity,
  TouchableHighlight,
  Alert,
  Pressable,
} from 'react-native';
import React, { useState } from 'react';
import Toast from 'react-native-toast-message';
import { BaseToast } from 'react-native-toast-message';
import { SafeAreaView } from 'react-native-safe-area-context';

const toastConfig = {
  success: props => (
    <BaseToast
      {...props}
      style={{ borderLeftColor: 'yellow', backgroundColor: '#dfbe1b' }}
      contentContainerStyle={{ paddingHorizontal: 15 }}
      text1Style={{ fontSize: 16, fontWeight: '600' }}
    />
  ),
};

const App = () => {
  const [height, setHeight] = useState(200);
  // console.log('APP RENDERED 🔥');

  return (
    <>
      <SafeAreaView style={styles.container}>
        <StatusBar barStyle="dark-content" />

        <Text style={styles.heading}>Hello buddies!!</Text>

        <Image
          style={styles.image}
          source={{
            uri: 'https://img.freepik.com/free-photo/closeup-scarlet-macaw-from-side-view-scarlet-macaw-closeup-head_488145-3540.jpg',
          }}
        />

        {/* buttons */}
        <TouchableOpacity
          style={{ padding: 10, backgroundColor: 'green' }}
          onPressIn={() => setHeight(h => h + 20)}
          onPressOut={() => setHeight(h => h - 20)}
        >
          <Text>Button</Text>
        </TouchableOpacity>

        <TouchableOpacity
          style={{ padding: 10, backgroundColor: 'blue', marginTop: 10 }}
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
      </SafeAreaView>

      {/* keep outside */}
      <Toast config={toastConfig} />
    </>
  );
};

const styles = StyleSheet.create({
  container: {
    height: '100%',
    width: '100%',
    display: 'flex',
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
    overflow: 'hidden',
  },

  btn: {
    padding: 10,
    width: 100,
    fontSize: 16,
    fontWeight: '600',
    color: 'white',
    backgroundColor: 'orange',
    borderRadius: 50,
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    textAlign: 'center',
    textAlignVertical: 'center',
  },
});

export default App;
