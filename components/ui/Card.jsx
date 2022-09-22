import { StyleSheet, Text, View } from 'react-native';
import { COLORS } from '../../constants/Colors';

export default function Card({ children }) {
  return <View style={styles.card}>{children}</View>;
}

const styles = StyleSheet.create({
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
