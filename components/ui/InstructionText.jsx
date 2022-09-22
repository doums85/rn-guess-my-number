import { StyleSheet, Text } from 'react-native';
import { COLORS } from '../../constants/Colors';

export default function InstructionText({ children, style }) {
  return <Text style={[styles.instructionText, style]}>{children}</Text>;
}

const styles = StyleSheet.create({
  instructionText: {
    color: COLORS.white,
    fontSize: 18,
  },
});
