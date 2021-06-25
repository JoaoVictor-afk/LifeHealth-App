import React from "react";
import { StyleSheet, Text, View } from "react-native";
import styles from "./style";
export default function Title(){
    return(
        <View styles={styles.boxTitle}>
            <Text style={styles.textTitle}>LifeHealth</Text>
        </View>
    )
}