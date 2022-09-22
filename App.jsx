import { useCallback, useState } from 'react';
import { StatusBar } from 'expo-status-bar';
import {
  ImageBackground,
  Platform,
  SafeAreaView,
  StyleSheet,
} from 'react-native';
import { LinearGradient } from 'expo-linear-gradient';
import { useFonts } from 'expo-font';
import * as SplashScreen from 'expo-splash-screen';

// Component Import
import { GameOverScreen, GameScreen, StartGameScreen } from './screens';
// import PrimaryButton from components/ui/PrimaryButton
// import Title from components/ui/Title

export default function App() {
  const random = Math.trunc(Math.random() * 20 + 1);
  const [secretNumber, setSecretNumber] = useState(random);
  const [userNumber, setUserNumber] = useState(null);
  const [gameIsOver, setGameIsOver] = useState(false);
  const [winner, setWinner] = useState(false);
  const [score, setScore] = useState(20);
  const [highScore, setHighScore] = useState(0);
  const [guessRound, setGuessRound] = useState(null);
  console.log(Platform.OS, secretNumber);

  // Use font family
  const [fontsLoaded] = useFonts({
    'press-start': require('./assets/fonts/PressStart2P-Regular.ttf'),
  });

  const onLayoutRootView = useCallback(async () => {
    // If Font is loaded, we show app
    if (fontsLoaded) {
      await SplashScreen.hideAsync();
    }
  }, [fontsLoaded]);

  if (!fontsLoaded) return null;
  // End Font loading process

  function gameOverHandler(numberOfRounds, status) {
    console.log('numberOfRounds', numberOfRounds);
    setGameIsOver(true);
    setWinner(status || false);
    setGuessRound(numberOfRounds);
  }

  // Decrement Score when user don't find the secretNumber
  const scoreHandler = () => setScore((currentScore) => currentScore - 1);

  const pickedNumberHandler = (pickedNumber) => setUserNumber(pickedNumber);

  function highScoreHandler() {
    if (score > highScore) setHighScore(score);
  }

  function startNewGameHandler() {
    setUserNumber(null);
    setGameIsOver(false);
    setGuessRound(0);
    setScore(20);
    setSecretNumber(Math.trunc(Math.random() * 20 + 1));
  }

  // SCREEN
  // 1) Default Screen
  let screen = <StartGameScreen pickedNumberHandler={pickedNumberHandler} />;
  // screen = <GameScreen />;

  // 2) Game Screen
  if (userNumber) {
    screen = (
      <GameScreen
        {...{
          userNumber,
          secretNumber,
          gameOverHandler,
          score,
          highScore,
          highScoreHandler,
          scoreHandler,
        }}
      />
    );
  }

  let colorsLinear = ['#F5F7Fa', '#B8C6DB'];

  // 3) Game Over Screen
  // Render Game Over screen
  if (gameIsOver) {
    screen = (
      <GameOverScreen
        {...{ winner, guessRound, secretNumber, startNewGameHandler }}
      />
    );

    // Change background Colors
    winner
      ? (colorsLinear = ['#233329', '#63D471'])
      : (colorsLinear = ['#FE0944', '#FEAE96']);
  }

  return (
    <LinearGradient
      colors={colorsLinear}
      style={styles.root}
      onLayout={onLayoutRootView}>
      <ImageBackground
        resizeMode="cover"
        source={require('./assets/images/dice.jpeg')}
        imageStyle={styles.backgroundImage}
        style={styles.root}>
        {/* SAFEARIAVIEW */}
        <SafeAreaView style={styles.root}>
          {/* Container Input + Buttons */}
          {screen}
        </SafeAreaView>
        <StatusBar style="auto" />
      </ImageBackground>
    </LinearGradient>
  );
}

const styles = StyleSheet.create({
  root: {
    flex: 1,
  },
  backgroundImage: {
    opacity: 0.2,
  },
});
