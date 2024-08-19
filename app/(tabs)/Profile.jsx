import { useRouter } from "expo-router";
import { Text, SafeAreaView, TouchableOpacity, StyleSheet, Platform, StatusBar } from "react-native";

const Profile = () => {
  const router = useRouter();

  onLogout = () => {
    router.push("/");
  };

  return (
    <SafeAreaView style={styles.container}>
      <Text style={{ color: "#fff" }}>Profile</Text>

      <TouchableOpacity style={styles.btnContainer} onPress={onLogout}>
        <Text style={styles.btnText}>Logout</Text>
      </TouchableOpacity>
    </SafeAreaView>
  );

};

export default Profile;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: Platform.OS === "android" ? StatusBar.currentHeight : 0,
  },
  btnContainer: {
    backgroundColor: "#2E456A",
    padding: 14,
    borderRadius: 10,
    marginTop: 20,
  },
  btnText:{
    color: "#fff",
    textAlign: "center",
    fontWeight: "bold",
    fontSize: 16,
  }
});
