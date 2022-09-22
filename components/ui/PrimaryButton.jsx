import { Pressable, StyleSheet, Text, View } from "react-native";

export default function PrimaryButton({ children, onPress }) {
  return (
    <Pressable
      //  android_ripple={{ color: "#31356E" }}
      // pressed => Component Pressable => true or false
      style={({ pressed }) =>
        pressed
          ? [styles.buttonContainer, styles.pressed]
          : styles.buttonContainer
      }
      onPress={onPress}
    >
      <Text style={styles.buttonText}>{children}</Text>
    </Pressable>
  );
}

const styles = StyleSheet.create({
  buttonContainer: {
    backgroundColor: "#5762B7",
    paddingVertical: 14,
    paddingHorizontal: 16,
    // Shadow works only for Android Devices 🤖
    elevation: 4,
    // Shadow works only for iOS Devices 🍎
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowRadius: 6,
    shadowOpacity: 0.25,
  },
  pressed: {
    opacity: 0.75,
  },
  buttonText: {
    fontFamily: 'press-start',
    textAlign: 'center',
  }
});
