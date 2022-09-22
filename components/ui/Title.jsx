import { StyleSheet, Text } from 'react-native';
import { COLORS } from '../../constants/Colors';

export default function Title({ children, style }) {
  return <Text style={[styles.title, style]}>{children}</Text>;
}

const styles = StyleSheet.create({
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
});
