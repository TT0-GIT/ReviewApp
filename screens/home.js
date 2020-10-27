import React, { useState, useLayoutEffect } from "react";
import {
  StyleSheet,
  View,
  Text,
  Button,
  FlatList,
  TouchableOpacity,
  Modal,
} from "react-native";
import { MaterialIcons } from "@expo/vector-icons";
import { globalStyles } from "../styles/global";
import Card from "../shared/card";
import ReviewForm from "./reviewForm";

export default function Home({ navigation }) {
  const [modalOpen, setModalOpen] = useState(false);
  const [reviews, setReviews] = useState([
    {
      title: "Zelda, Breath of Fresh Air",
      rating: 5,
      body: "lorem ipsum",
      key: "1",
    },
    {
      title: "Gotta Catch Them All (again)",
      rating: 4,
      body: "lorem ipsum",
      key: "2",
    },
    {
      title: 'Not So "Final" Fantasy',
      rating: 3,
      body: "lorem ipsum",
      key: "3",
    },
  ]);

  const addReview = (review) => {
    review.key = Date.now().toString();
    setReviews([review, ...reviews]);
    setModalOpen(false);
  };

  const handleDelete = (key) => {
    let newReviews = reviews.filter((item) => item.key !== key);
    setReviews(newReviews);
  };

  //   const [count, setCount] = useState(0);

  //   useLayoutEffect(() => {
  //     navigation.setOptions({
  //       headerRight: () => (
  //         <Button onPress={() => setCount((c) => c + 1)} title="Update count" />
  //       ),
  //     });
  //   }, [navigation, setCount]);

  return (
    <View style={globalStyles.container}>
      <Modal visible={modalOpen} animationType="slide">
        <View style={styles.modalContent}>
          <MaterialIcons
            name="close"
            size={24}
            style={{ ...styles.modalToggle, ...styles.modalClose }}
            onPress={() => setModalOpen(false)}
          />
          <ReviewForm addReview={addReview} />
        </View>
      </Modal>

      <MaterialIcons
        name="add"
        size={24}
        style={styles.modalToggle}
        onPress={() => setModalOpen(true)}
      />
      <FlatList
        data={reviews}
        renderItem={({ item }) => (
          <TouchableOpacity
            onPress={() => navigation.navigate("Review Detail", item)}
          >
            <Card>
              <View style={styles.wrapper}>
                <Text style={globalStyles.titleText}>{item.title}</Text>
                <TouchableOpacity>
                  <MaterialIcons
                    name="delete"
                    size={24}
                    onPress={() => handleDelete(item.key)}
                  />
                </TouchableOpacity>
              </View>
            </Card>
          </TouchableOpacity>
        )}
        keyExtractor={(item) => item.key}
      />
      {/* <Text>Count: {count}</Text> */}
      {/* <Button
        title="go to detail"
        onPress={() => navigation.navigate("Review Detail")} // navogation.push("Review Detail")
      /> */}
    </View>
  );
}

const styles = StyleSheet.create({
  modalToggle: {
    justifyContent: "center",
    alignItems: "center",
    marginBottom: 10,
    marginRight: 16,
    borderWidth: 1,
    borderColor: "#f2f2f2",
    padding: 10,
    borderRadius: 10,
    alignSelf: "flex-end",
  },
  modalClose: {
    marginTop: 50,
    marginBottom: 0,
  },
  modalContent: {
    flex: 1,
  },
  wrapper: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
  },
});
