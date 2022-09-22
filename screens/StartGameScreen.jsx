import { useState } from 'react';
import {
  StyleSheet,
  Text,
  View,
  Dimensions,
  useWindowDimensions,
  Platform,
  ScrollView,
  KeyboardAvoidingView,
} from 'react-native';
import { NumberInput } from '../components/game';
import { Card, InstructionText } from '../components/ui';
import { COLORS } from '../constants/Colors';

export default function StartGameScreen({ pickedNumberHandler }) {
  // Static => Dimensions
  //const { width, height } = Dimensions.get('window');

  // Dynamic => useWindowDimensions
  const { width, height } = useWindowDimensions();
  const marginTop = height < 440 ? 30 : 100;

  return (
    <ScrollView style={styles.screen}>
      <KeyboardAvoidingView style={styles.screen} behavior="position">
        <View style={[styles.wrapper, { marginTop }]}>
          <Text style={styles.title}>Guess My Number</Text>

          {/* Card */}
          <Card>
            <InstructionText style={{ color: 'red' }}>
              Enter a Number
            </InstructionText>
            {/* Number Input */}
            <NumberInput pickedNumberHandler={pickedNumberHandler} />
          </Card>
        </View>
      </KeyboardAvoidingView>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  screen: {
    flex: 1,
  },
  wrapper: {
    flex: 1,
    // marginTop: 100,
    padding: 20,
  },
  title: {
    fontSize: 20,
    fontFamily: 'press-start',
    fontWeight: 'bold',
    textAlign: 'center',
    borderWidth: 2,
    borderColor: COLORS.primary,
    padding: 12,
    textAlign: 'center',
    color: COLORS.primary,
  },
  card: {
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: 36,
    backgroundColor: COLORS.primary,
    borderRadius: 6,
    padding: 16,
    // Shadow for Android
    elevation: 4,
    // Shadow for iOS
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowRadius: 6,
    shadowOpacity: 0.25,
  },
});
