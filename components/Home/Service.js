import React, { useEffect } from "react";
import { StyleSheet, View, Image, Text } from "react-native";
import { Card } from "react-native-elements";
import { globalStyles } from "../../styles/global";
import { useDispatch, useSelector } from "react-redux";
import { allService } from "../../redux/actions/service";

export default function Service() {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(allService());
  }, []);
  const allServices = useSelector((state) => state.service?.AllData?.services);
  return (
    <View style={styles.services}>
      <Text style={globalStyles.mainHeading}>Popular Services</Text>
      <View style={styles.serviceCards}>
        {allServices?.map((service) => (
          <Card containerStyle={styles.card}>
            <Image
              source={require("../../assets/Barber.png")}
              style={styles.serviceImage}
            />           
            <Text style={styles.heading}>{service.name}</Text>
          </Card>
        ))}
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  card: {
    backgroundColor: "#eee",
    width: "26%",
    alignSelf: "center",
    borderRadius: 100
  },
  services: {
    backgroundColor: "#fff",
    paddingVertical: 50,    
  },
  serviceImage: {
    width: 50,
    height: 50,
    alignSelf: "center",
    marginBottom: 10
  },
  serviceCards: {
    flex: 1,
    flexDirection: "row",
    flexWrap: "wrap",
    justifyContent: "center"
  },
  heading:{
    fontFamily: "font-demi",
    fontSize: 16,
    textAlign: "center",
    color: "#333",
  }
});
