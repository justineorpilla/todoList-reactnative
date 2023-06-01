/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 */

import React from 'react';
import type { PropsWithChildren } from 'react';
import {
  SafeAreaView,
  ScrollView,
  StatusBar,
  StyleSheet,
  Text,
  useColorScheme,
  View,
} from 'react-native';
import Task from './components/Task';


type SectionProps = PropsWithChildren<{
  title: string;
}>;

function App(): JSX.Element {
  return (
    <SafeAreaView style={styles.container}>
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
              <Task />
          </View>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#E8EAED',
  },
  taskWrapper: {
    // color: 'red'
    marginTop: StatusBar.currentHeight,
    paddingHorizontal: 20,
  },
  taskTitle: {
    fontSize: 24,
    fontWeight: "bold",
  },
  taskItems: {
    marginTop: 20,
  }
});

export default App;
