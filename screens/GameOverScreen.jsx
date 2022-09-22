import {
  Image,
  StyleSheet,
  Text,
  useWindowDimensions,
  View,
} from 'react-native';
import { PrimaryButton, Title } from '../components/ui';
import { COLORS } from '../constants/Colors';
export default function GameOverScreen({
  winner,
  guessRound,
  secretNumber,
  startNewGameHandler,
}) {
  const src = winner
    ? require('../assets/images/success.jpeg')
    : require('../assets/images/game-over.jpeg');

  const { width, height } = useWindowDimensions();
console.log(width, height);
  let imageSize = 300;

  if (width < 380) {
    imageSize = 150;
  }

  if (height < 420) {
    imageSize = 100;
  }

  const imageStyle = {
    width: imageSize,
    height: imageSize,
    borderRadius: imageSize / 2,
  };



  return (
    <View style={styles.container}>
      <Title style={styles.title}>
        {winner ? 'Congratulation' : 'Game Over'}{' '}
      </Title>
      {/* Image */}
      <View style={[styles.imageContainer, imageStyle]}>
        <Image style={styles.image} resizeMode="cover" source={src} />
      </View>

      {/* Message */}
      {winner ? (
        <Text style={styles.summaryText}>
          Your phone needed <Text style={styles.highlight}>{guessRound}</Text>{' '}
          rounds to guess the secret number{' '}
          <Text style={styles.highlight}>{secretNumber}</Text>.
        </Text>
      ) : (
        <Text style={styles.summaryText}>
          You don't find the secret number{' '}
          <Text style={styles.highlight}>{secretNumber}</Text> Do you want play
          again ?
        </Text>
      )}

      {/* Button */}
      <PrimaryButton onPress={startNewGameHandler}>
        Start New Game
      </PrimaryButton>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
    //justifyContent: 'center',
    alignItems: 'center',
  },
  title: { color: COLORS.white, borderColor: COLORS.white },
  imageContainer: {
    borderWidth: 3,
    borderColor: COLORS.white,
    margin: 20,
    overflow: 'hidden',
  },
  image: {
    width: '100%',
    height: '100%',
  },
  summaryText: {
    fontSize: 20,
    textAlign: 'center',
    marginVertical: 20,
    color: COLORS.white,
  },
  highlight: {
    color: COLORS.yellow,
  },
});
