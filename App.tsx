/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 */

import React from 'react';
import type { PropsWithChildren } from 'react';
import {
  Button,
  Image,
  ImageBackground,
  SafeAreaView,
  ScrollView,
  StatusBar,
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  useColorScheme,
  View,
} from 'react-native';
import Task from './components/Task';

type SectionProps = PropsWithChildren<{
  title: string;
}>;

const backgroundImage = { uri: 'https://images.unsplash.com/photo-1508614999368-9260051292e5?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1740&q=80' }

function App(): JSX.Element {
  return (
    <SafeAreaView style={styles.container}>
      <ImageBackground
        source={backgroundImage}
        resizeMode="cover"
        style={styles.image}>
        <ScrollView
          contentInsetAdjustmentBehavior="automatic"
        >
          {/* Todo Today  */}
          <View style={styles.taskWrapper}>
            <Text style={styles.taskTitle}>My Todo Today</Text>

            <View style={styles.taskItems}>
              {/* Task List  */}
              <Task />
              <Task />
              <Task />
            </View>

            <View style={{ flexDirection: 'row', marginHorizontal: 5 }}>
              <TextInput
                style={styles.input}
              // onChangeText={onChangeText}
              // value={text}
              />
              <TouchableOpacity style={styles.button}
              //  onPress={onPress}
              >
                <Text style={{ color: 'white', fontWeight: 'bold', alignItems: 'center' }}>Add Task</Text>
              </TouchableOpacity>
            </View>
          </View>
        </ScrollView>
      </ImageBackground>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#E8EAED',

  },
  taskWrapper: {
    marginTop: StatusBar.currentHeight,
    paddingHorizontal: 20,
  },
  taskTitle: {
    fontSize: 24,
    fontWeight: "bold",
  },
  taskItems: {
    marginTop: 20,
  },
  input: {
    flex: 1,
    marginTop: 20,
    backgroundColor: '#FFF',
    borderRadius: 5,
    borderColor: 'orange',
    borderWidth: 2,
    marginRight: 2,
  },
  button: {
    alignItems: 'center',
    backgroundColor: 'orange',
    padding: 10,
    marginTop: 20,
    borderRadius: 5,
  },
  image: {
    flex: 1,
  }
});

export default App;
