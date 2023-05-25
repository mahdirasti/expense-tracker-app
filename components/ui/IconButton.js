import { Pressable, StyleSheet, Text } from "react-native"

import React from "react"

export default function IconButton({ children, onPress, size, color }) {
  return (
    <Pressable
      onPress={onPress}
      style={({ pressed }) =>
        pressed
          ? [styles.container, styles.pressedContainer]
          : [styles.container]
      }
    >
      <Text style={{ fontSize: size, color }}>{children}</Text>
    </Pressable>
  )
}

const styles = StyleSheet.create({
  container: {
    margin: 4
  },
  pressedContainer: {
    opacity: 0.6
  }
})
