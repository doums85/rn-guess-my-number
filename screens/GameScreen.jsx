import { useEffect, useState } from 'react';
import { StyleSheet, Text, View, Platform, FlatList } from 'react-native';
import { Entypo } from '@expo/vector-icons';

// Component import
import { NumberInput } from '../components/game';
import { Card, Title } from '../components/ui';
import { COLORS } from '../constants/Colors';

export default function GameScreen({
  secretNumber,
  userNumber,
  gameOverHandler,
  score,
  scoreHandler,
  highScore,
  highScoreHandler,
}) {
  const [opponentsGuess, setOpponentsGuess] = useState([userNumber]);

  /*
1) score = 14 => high score = 14
2) score = 9 !== high score = 9
score > high => high = score
*/
  useEffect(() => {
    if (secretNumber === opponentsGuess[opponentsGuess.length - 1]) {
      console.log('Winner 🎉');
      highScoreHandler();
      gameOverHandler(opponentsGuess.length, true);
    } else if (secretNumber !== opponentsGuess[opponentsGuess.length - 1]) {
      // Score has be greater than 1
      // score = 1 => 1 > 1 => false
      if (score > 1) return scoreHandler();
      highScoreHandler();
      gameOverHandler(opponentsGuess.length);
    }
  }, [opponentsGuess]);

  const checkOpponentsGuessHandler = (opponentNumber) =>
    setOpponentsGuess((previous) => [...previous, opponentNumber]);

  function onPickNumber(pickedNumber) {
    checkOpponentsGuessHandler(pickedNumber);
  }

  return (
    <View style={styles.screen}>
      <Title>Opponent's Guess</Title>
      <Card>
        {/* BOX  */}
        <View style={styles.box}>
          <Text style={styles.boxText}>?</Text>
        </View>
        {/* INPUT */}
        <View style={styles.containerInput}>
          <NumberInput
            opponentNumber={opponentsGuess[opponentsGuess.length - 1]}
            pickedNumberHandler={onPickNumber}
            variant={true}
          />
        </View>
      </Card>

      {/* Indicator lower or high */}
      <Text style={styles.textIndicator}>
        {opponentsGuess[opponentsGuess.length - 1] > secretNumber
          ? '📈 Too High !'
          : '📉 Too Low !'}
      </Text>

      {/* Score */}
      <View style={styles.containerScore}>
        {/* Score text */}
        <View style={styles.score}>
          {/* icon  */}
          <Entypo name="heart" size={24} color="crimson" />
          <Text style={styles.scoreText}>{score} </Text>
        </View>
        {/* High Score */}
        <Text style={styles.scoreText}>High Score : {highScore} </Text>
      </View>

      {/* List Opponents  */}
      <View style={styles.containerList}>
        <FlatList
          data={opponentsGuess}
          showsVerticalScrollIndicator={false}
          renderItem={(itemData) => (
            <View style={styles.listItem}>
              <Text>#{itemData.index + 1} </Text>
              <Text>Opponent's Guess : {itemData.item} </Text>
            </View>
          )}
          keyExtractor={(item, index) => `${item}-${index}`}
        />
      </View>
      {/* 
      // 15 => Opponent's Guess :  15
      */}
    </View>
  );
}

const styles = StyleSheet.create({
  screen: {
    flex: 1,
    padding: 20,
    // marginTop: Platform.OS === 'ios' ? 0 : 30
    marginTop: Platform.select({ ios: 0, android: 30 }),
  },
  box: {
    backgroundColor: COLORS.white,
    padding: 32,
    margin: 24,
    justifyContent: 'center',
    alignItems: 'center',
  },
  boxText: {
    color: COLORS.primary,
    fontSize: 42,
    fontFamily: 'press-start',
  },
  containerInput: {
    justifyContent: 'center',
    alignContent: 'center',
  },
  textIndicator: {
    marginTop: 20,
    color: 'crimson',
    textAlign: 'center',
    fontWeight: '700',
  },
  listItem: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    padding: 12,
    marginVertical: 10,
    borderRadius: 8,
    borderWidth: 1,
    borderColor: COLORS.yellow,
    backgroundColor: COLORS.yellow,

    elevation: 4,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 0 },
    shadowOpacity: 0.3,
    shadowRadius: 3,
  },
  containerList: {
    flex: 1,
    padding: 16,
  },
  containerScore: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  score: {
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'baseline',
  },
  scoreText: {
    fontSize: 16,
  },
});
