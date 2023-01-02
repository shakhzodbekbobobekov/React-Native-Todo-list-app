import { useState } from "react";
import {
  Button,
  StyleSheet,
  Text,
  View,
  TextInput,
  ScrollView,
} from "react-native";

export default function App() {
  const [enterText, setEnterText] = useState("");
  const [textArray, setTextArray] = useState(["salom"]);
  const handleChange = (text) => {
    setEnterText(text);
  };

  function addGoalHandler() {
    setTextArray((allText) => {
      return [...allText, enterText];
    });
  }

  console.log(textArray);
  return (
    <>
      <View style={styles.container}>
        <TextInput style={styles.textInput} onChangeText={handleChange} />
        <Button
          style={styles.buttonAdded}
          title="click me"
          onPress={addGoalHandler}
        />
      </View>
      <ScrollView>
        {textArray &&
          textArray.map((goal) => {
            return (
              <Text key={goal} style={styles.texts}>
                {goal}
              </Text>
            );
          })}
      </ScrollView>
    </>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: "row",
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
  textInput: {
    borderColor: "#000000",
    borderWidth: 1,
    width: "60%",
    padding: 2.5,
    marginRight: 4,
  },
  texts: {
    color: "black",
  },
});
