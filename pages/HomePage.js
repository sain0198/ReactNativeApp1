import { StatusBar } from "expo-status-bar";
import { Button, SafeAreaView, StyleSheet, Text, View } from "react-native";

export default function HomePage({ navigation }) {
  return (
    <SafeAreaView style={styles.container}>
      <View>
        <Text>Hello React Native</Text>
        <View
          style={{
            marginBottom: 20,
            marginTop: 20,

          }}
          >
          <Button
            title="About Page"
            onPress={() => navigation.navigate("About")}
          ></Button>
        </View>
                <Button
          title="List Page"
          onPress={() => navigation.navigate("List")}
        ></Button>
        <StatusBar style="auto" />
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#000",
    alignItems: "center",
    justifyContent: "center",
   
  },
});
