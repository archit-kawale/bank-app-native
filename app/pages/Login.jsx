import { Feather } from "@expo/vector-icons";
import React from "react";
import {
  Image,
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from "react-native";

import {useRouter} from 'expo-router';

const Login = () => {
    const router = useRouter();

    const onSubmit = () =>{
        router.push('/(tabs)/Home');
    }
  return (
    <View style={styles.content}>
      <View style={styles.logoContainer}>
        <Image
          style={styles.logoImg}
          source={{
            uri: "https://lakshmoney.com/wp-content/uploads/2024/05/Lakshmoney-logo-1.png",
          }}
        />
      </View>
      <Text style={styles.title}>Login</Text>

      <View style={styles.inputContainer}>
        <View style={styles.icon}>
          <Feather name="mail" size={22} color="#7c808d" />
        </View>
        <TextInput
          style={styles.input}
          placeholder="Email"
          placeholderTextColor="#576a8796"
        />
      </View>
      <View style={styles.inputContainer}>
        <View style={styles.icon}>
          <Feather name="lock" size={22} color="#7c808d" />
        </View>
        <TextInput
          style={styles.input}
          secureTextEntry={true}
          placeholder="Password"
          placeholderTextColor="#576a8796"
        />
        <TouchableOpacity style={styles.passwordVisibleButton}>
          <Feather name="eye-off" size={20} color="#7c808d" />
        </TouchableOpacity>
      </View>

      <View>
        <TouchableOpacity style={styles.loginButton} onPress={onSubmit}>
          <Text style={styles.loginButtonText}>Login</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default Login;

export const getStaticProps = () => {
  return {
    headerShown: false, // Hides the entire header, including the back button
  };
};

const styles = StyleSheet.create({
  content: {
    paddingHorizontal: 30,
  },
  title: {
    fontSize: 22,
    fontWeight: "bold",
    color: "#2E456A",
    marginBottom: 40,
    textAlign: "center",
  },
  inputContainer: {
    flexDirection: "row",
    width: "100%",
    alignItems: "center",
    justifyContent: "center",
    marginBottom: 20,
    position: "relative",
  },
  icon: {
    marginRight: 15,
  },
  input: {
    borderBottomWidth: 1.5,
    flex: 1,
    paddingBottom: 10,
    borderBottomColor: "#2E456A",
    fontSize: 16,
  },
  passwordVisibleButton: {
    position: "absolute",
    right: 0,
  },
  loginButton: {
    backgroundColor: "#2E456A",
    padding: 14,
    borderRadius: 10,
    marginTop: 20,
  },
  loginButtonText: {
    color: "#fff",
    textAlign: "center",
    fontWeight: "bold",
    fontSize: 16,
  },
  logoImg: {
    width: "100%",
    height: "30%",
    resizeMode: "contain",
  },
  logoContainer: {
    marginBottom: -40,
  },
});
