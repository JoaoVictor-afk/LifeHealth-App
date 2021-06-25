import React,{useState} from "react";
import { FlatList, Text, View, TextInput, TouchableOpacity, Vibration, Pressable,Keyboard} from "react-native";
import ResultImc from "./ResultadoImc";
import styles from "./style";

export default function Form(){
    
    const[height, setHeight]= useState(null)
    const[weight, setWeight]= useState(null)
    const[messageImc, setMessageImc]= useState(null)
    const[imc,setImc]= useState(null)
    const[waterday,setWaterday]= useState(null)
    const[waterMessage,setWaterMessage]= useState(null)
    const[errorMessage,setErrorMessage]= useState(null)
    const[imcList,setimcList]=useState([])

function imcCalculator(){
    let heightFormat = height.replace(",",".")
    let totalImc= (weight/(heightFormat*heightFormat)).toFixed(2)
    setimcList((arr)=>[...arr,{id:new Date().getTime(),imc:totalImc}])
    setImc(totalImc)
}

function validationError(){
    if(imc == null){
        setErrorMessage("*Campo obrigatório")
        Vibration.vibrate();
        
    }
}
function Waterday(){
    return setWaterday((weight*0.035).toFixed(2))
}
function validationImc(){
    if(weight !=null && height !=null){
        Keyboard.dismiss()
        imcCalculator()
        Waterday()
        setMessageImc("Seu IMC é:")
        setWaterMessage("Quantidade de água em L por dia:")
        setHeight(null)
        setWeight(null)
        setErrorMessage(null)
        return
    }
    
    Keyboard.dismiss()
    validationError()
    setImc(null)
    setWaterday(null)
    setMessageImc("Preencha peso e altura!")
    setWaterMessage(null)
    
}

return(
    <View style={styles.formContext} >
        {imc == null ?
        <Pressable onPress={Keyboard.dismiss} style={styles.form}>
           
               <Text style={styles.formLabel}>Altura</Text>
               <Text style={styles.errorMessage}>{errorMessage}</Text>

               <TextInput 
               style={styles.input}
               onChangeText={setHeight}
               value={height}
               placeholder="Ex: 1.75"
               keybordType="numeric"
               ></TextInput>
               
               <Text style={styles.formLabel}>Peso</Text>
               <Text style={styles.errorMessage}>{errorMessage}</Text>
               
               <TextInput 
               style={styles.input}
               onChangeText={setWeight}
               value={weight}
               placeholder="Ex: 80"
               keybordType="numeric"
               ></TextInput>
               
               <TouchableOpacity 
               style={styles.Touchable} 
               onPress={()=>validationImc()}>
                   <Text style={styles.textTouchable}>Calcular</Text>
               </TouchableOpacity>
           </Pressable>
        :
        <View style={styles.exitResult}>
             <ResultImc messageResultImc={messageImc} ResultImc={imc} messageResultwaterday={waterMessage} resultwaterday={waterday}/>
             <TouchableOpacity 
               style={styles.Touchable} 
               onPress={()=>validationImc()}
               >
                   <Text style={styles.textTouchable}>Calcular</Text>
             </TouchableOpacity>
          </View>  
          }
          <FlatList 
          showsVerticalScrollIndicator={false}
          style={styles.listImcs}
          data={imcList.reverse()}
          
          renderItem={({item}) =>{
            return(
              <Text style={styles.ResultImcitem}>
                  <Text style={styles.textImcitem}>Resultado do Imc= </Text>
                  {item.imc}
              </Text>
          )}
          }
          keyExtractor={(item)=> {
              item.id
            }}/>

          
    </View>
    )
}
