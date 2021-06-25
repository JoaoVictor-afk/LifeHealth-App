import React from "react";
import { StyleSheet, Text, View, Share, TouchableOpacity} from "react-native";
import styles from "./style";

export default function ResultImc(props){
    const onShare= async () =>{
        const result= await Share.share({
        message:"Meu Imc  é "+props.ResultImc,
     })
    }
    return(
        <View style={styles.resultImc}>
            
            <Text style={styles.textResult}>{props.messageResultImc}</Text>
            <Text style={styles.numberImc}>{props.ResultImc}</Text>
            <Text style={styles.textResult}>{props.messageResultwaterday}</Text>
            <Text style={styles.numberImc}>{props.resultwaterday}</Text>

             <View style={styles.boxSharebutton}>
            
                <TouchableOpacity style={styles.shareButton}
                onPress={onShare}>
                <Text style={styles.shareText}>Share</Text>
                </TouchableOpacity>
            
            </View>
        </View>
    );
}