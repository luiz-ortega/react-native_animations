import * as React from "react";
import { SafeAreaView, StyleSheet, Text, View } from "react-native";
import { RectButton } from "react-native-gesture-handler";

const styles = StyleSheet.create({
  container: {
    padding: 2,
    backgroundColor: "#424242",
    borderRadius: 5,
    marginBottom: 20,
  },
  label: {
    textAlign: "center",
    color: "#fff",
    padding: 8,
  },
});

const Button = ({ label, onPress }) => {
  return (
    <View style={styles.container}>
      <RectButton {...{ onPress }}>
        <SafeAreaView>
          <Text style={styles.label}>{label}</Text>
        </SafeAreaView>
      </RectButton>
    </View>
  );
};

export default Button;
