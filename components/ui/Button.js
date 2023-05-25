import { Pressable, StyleSheet, Text, View } from "react-native"

import { GlobalStyles } from "../../constants/styles"
import React from "react"

export default function Button({
  children,
  onPress,
  variant = "contained",
  style,
  styleText
}) {
  let buttonStyle = styles.buttonContained
  let buttonTextStyle = styles.buttonContainedText

  switch (variant) {
    case "outlined":
      buttonStyle = styles.buttonOutlined
      buttonTextStyle = styles.buttonOutlinedText
      break
  }

  return (
    <Pressable
      onPress={onPress}
      style={({ pressed }) => pressed && styles.buttonPressed}
    >
      <View style={[styles.button, buttonStyle, style]}>
        <Text style={[buttonTextStyle, styleText]}>{children}</Text>
      </View>
    </Pressable>
  )
}

const styles = StyleSheet.create({
  button: {
    paddingVertical: 8,
    paddingHorizontal: 16,
    borderRadius: 6
  },
  buttonContained: {
    backgroundColor: GlobalStyles.colors.primary500
  },
  buttonOutlined: {
    borderColor: GlobalStyles.colors.primary500,
    borderWidth: 1
  },
  buttonPressed: {
    opacity: 0.6
  },
  buttonContainedText: {
    color: "white"
  },
  buttonOutlinedText: {
    color: GlobalStyles.colors.primary500
  }
})
