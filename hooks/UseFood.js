import { Platform } from "react-native";
import AsyncStorage from "@react-native-async-storage/async-storage";
import { useEffect, useState } from "react";

export default function UseProfile() {
  const [food, setFood] = useState(null);

  const getFoodData = async () => {
    try {
      let jwt, id;
      if (Platform.OS === "web") {
        jwt = localStorage.getItem("jwt");
        id = localStorage.getItem("id");
      } else {
        jwt = await AsyncStorage.getItem("jwt");
        id = await AsyncStorage.getItem("id");
      }

      if (jwt && id) {
        const response = await fetch(`${process.env.EXPO_PUBLIC_API_URL}/api/food`, {
          method: "GET",
          headers: {
            "Content-Type": "application/json",
            Authorization: `Bearer ${jwt}`,
          },
        });

        const data = await response.json();
        setFood(data);
      }
    } catch (error) { 
      console.error("Error:", error);
    }
  };

  useEffect(() => {
    const fetchData = async () => {
      await getFoodData();
    };
    fetchData();
  }, []);

  return { food, setFood, getFoodData };
}