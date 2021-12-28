import { StyleSheet, Text, View } from 'react-native'

export default function App() {
  return (
    <View style={styles.container}>
      <Text style={styles.emoji}>😻</Text>
      <Text style={styles.text}>Open up src/App.tsx to start working on your app!</Text>
      <Text>Happy hacking! 🙌🏻</Text>
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center'
  },
  text: {
    marginBottom: 8
  },
  emoji: {
    fontSize: 82,
    marginBottom: 24
  }
})
