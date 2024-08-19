import { Text, SafeAreaView, StyleSheet, Platform, StatusBar } from "react-native";

const Home = () => {
  return (
    <SafeAreaView style={styles.container}>
      <Text style={{ color: "#fff" }}>Home</Text>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: Platform.OS === "android" ? StatusBar.currentHeight : 0,
  },
  text: {
    color: "#fff",
  },
});

export default Home;
