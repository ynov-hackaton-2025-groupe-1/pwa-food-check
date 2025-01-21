import { Platform } from "react-native";
import AsyncStorage from "@react-native-async-storage/async-storage";
import { useEffect, useState } from "react";

export default function UseProfile() {
  const [user, setUser] = useState(null);

  const getUserData = async () => {
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
        const response = await fetch(`${process.env.EXPO_PUBLIC_API_URL}/api/user/${id}`, {
          method: "GET",
          headers: {
            "Content-Type": "application/json",
            Authorization: `Bearer ${jwt}`,
          },
        });

        const data = await response.json();
        setUser({ ...data, jwt, id });
        console.log("User:", data);
      }
    } catch (error) { 
      console.error("Error:", error);
    }
  };

  const editProfile = async () => {
    try {
      const response = await fetch(`${process.env.EXPO_PUBLIC_API_URL}/api/user/${user.id}`, {
        method: "PUT",
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${user.jwt}`,
        },
        body: JSON.stringify({
          email: user.email,
          fullname: user.fullname,
        }),
      });
      console.log("Response editProfile:", response);
      return response;
    } catch (error)
    {
      console.error("Error:", error);
    }
  };


  useEffect(() => {
    const fetchData = async () => {
      await getUserData();
    };
    fetchData();
  }, []);

  return { user, setUser, getUserData, editProfile };
}