import { useState } from 'react';
import { StyleSheet, TextInput, View, Alert } from 'react-native';
import { Ionicons } from '@expo/vector-icons';

// Component imports
import { COLORS } from '../../constants/Colors';
import { PrimaryButton } from '../ui';

export default function NumberInput({
  pickedNumberHandler,
  variant,
  opponentNumber,
}) {
  const [enterNumber, setEnterNumber] = useState('');
  const [userNumber, setUserNumber] = useState(opponentNumber);

  const numberInputHandler = (enteredText) => setEnterNumber(enteredText);

  const resetInputHandler = () => setEnterNumber('');

  function confirmInputHandler() {
    //parseInt(enterNumber)
    const guessNumber = Number(enterNumber);

    if (isNaN(guessNumber) || guessNumber <= 0 || guessNumber > 20) {
      Alert.alert(
        'Invalid number',
        '🚨 You should entre a number between 0 and 20...',
        [{ text: 'Okay', style: 'destructive' }]
      );

      return;
    }

    // get the entered text
    pickedNumberHandler(guessNumber);
  }

  /* Component for varian props */
  if (variant) {
    // Function handling add and decrement user guess number
    function iconButtonHandler(icon) {
      if (icon === 'add') setUserNumber(userNumber + 1);
      else setUserNumber(userNumber - 1);

      numberInputHandler(userNumber.toString());
    }

    return (
      <>
        <View style={styles.container}>
          <PrimaryButton onPress={() => iconButtonHandler('add')}>
            <Ionicons name="add" size={24} color={COLORS.primary} />
          </PrimaryButton>

          <TextInput
            keyboardType="number-pad"
            maxLength={2}
            style={styles.numberInput}
            onChangeText={numberInputHandler}
            placeholder="?"
            placeholderTextColor={COLORS.white}
            value={enterNumber}
          />

          <PrimaryButton onPress={() => iconButtonHandler('remove')}>
            <Ionicons name="remove" size={24} color={COLORS.primary} />
          </PrimaryButton>
        </View>

        {/* Container Buttons */}
        <View style={styles.buttonsContainer}>
          <View style={styles.buttonLeft}>
            <PrimaryButton onPress={resetInputHandler}>Reset</PrimaryButton>
          </View>

          <PrimaryButton onPress={confirmInputHandler}>Confirm</PrimaryButton>
        </View>
      </>
    );
  }

  return (
    <>
      <TextInput
        keyboardType="number-pad"
        maxLength={2}
        style={styles.numberInput}
        onChangeText={numberInputHandler}
        placeholder="?"
        placeholderTextColor={COLORS.white}
        value={enterNumber}
      />
      {/* Container Buttons */}
      <View style={styles.buttonsContainer}>
        <View style={styles.buttonLeft}>
          <PrimaryButton onPress={resetInputHandler}>Reset</PrimaryButton>
        </View>

        <PrimaryButton onPress={confirmInputHandler}>Confirm</PrimaryButton>
      </View>
    </>
  );
}

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  numberInput: {
    width: 80,
    height: 50,
    fontSize: 32,
    fontFamily: 'press-start',
    marginVertical: 10,
    borderBottomColor: COLORS.white,
    borderBottomWidth: 2,
    textAlign: 'center',
    color: COLORS.white,
  },
  buttonsContainer: {
    flexDirection: 'row',
    justifyContent: 'center',
    marginTop: 24,
  },
  buttonLeft: {
    marginRight: 16,
  },
});
