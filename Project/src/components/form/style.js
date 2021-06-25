import React from "react";
import { StyleSheet } from "react-native";
import { color } from "react-native-reanimated";
import ResultImc from "./ResultadoImc";

const styles = StyleSheet.create({
    formContext:{
        width:"100%",
        height:"100%",
        bottom:0,
        backgroundColor:"#FFFFFF",    
        alignItems:"center",
        marginTop:10,
        borderTopLeftRadius:30,
        borderTopRightRadius:30,
        
        flex:1

    },
    form:{
        width:"100%",
        height:"auto",
        marginTop:30,
        padding:10,
         
    },
    formLabel:{
        color:"#000000",
        fontSize:18,
        paddingLeft:20,
    },
    input:{
        width:"90%",
        borderRadius:50,
        backgroundColor:"#f6f6f6",
        height:40,
        margin:12,
        paddingLeft:10,
    },
    Touchable:{
        borderRadius:50,
        alignItems:"center",
        justifyContent:"center",
        width:"90%",
        backgroundColor:"#FF0043",
        paddingTop:10,
        paddingBottom:10,
        marginLeft:12,
        marginTop:10

    },
    textTouchable:{
        fontSize:20,
        color:"#FFFFFF",
    },
    errorMessage:{
        fontSize:12,
        paddingLeft:20,
        fontWeight:"bold",
        color:"red"    
    },
    exitResult:{
        width:"100%",
        height:"50%",
        
        
    },
    listImcs:{
        marginTop:40,    
    },
    ResultImcitem:{
        fontSize:24,
        color:"red",
        height:50,
        width:"100%",
        paddingRight:20,
        fontWeight:"bold"  
    },
    textImcitem:{
        fontSize:18
    }

})

export default styles
