import { useState } from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { NumberInput } from '../components/game';
import { Card, InstructionText } from '../components/ui';
import { COLORS } from '../constants/Colors';

export default function StartGameScreen({ pickedNumberHandler }) {
  return (
    <View style={styles.wrapper}>
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
  );
}


const styles = StyleSheet.create({
  wrapper: {
    flex: 1,
    marginTop: 100,
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
