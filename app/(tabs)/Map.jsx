import { Text, SafeAreaView, StyleSheet, Platform, StatusBar } from "react-native";

const Map = () => {
  return (
    <SafeAreaView style={styles.container}>
      <Text style={{ color: "#fff" }}>Map</Text>
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

export default Map;
