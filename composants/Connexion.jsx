import { StyleSheet, Text, View, TextInput, TouchableOpacity, ScrollView } from 'react-native'
import React, {useEffect, useState} from 'react'
import { KeyboardAwareScrollView } from 'react-native-keyboard-aware-scroll-view'
import axios from 'axios';

const Connexion = ({navigation}) => {
  
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const url = "http://localhost:4003/login/"

  const handleSubmit = async () => {
    if (email === '' || password === '') {
        alert("Tous les champs doivent être remplis.");
        return;
    }
  }

  /*
  const resp = await axios.post("http://localhost:4003/login/", { email, password}).then(resp => {
          console.log(resp);
          console.log(resp.data);
          alert("Vous vous êtes bien connecté.");
        })
        .catch(error => console.log(error));
  };
  */
 /*
  useEffect(() => {
    axios.post(url).then(res => {
      setEmail(res.data.email);
      setPassword(res.data.password);
      alert("Vous vous êtes bien connecté.")
    })
  }, []);
  */

  
  


  return (
    <KeyboardAwareScrollView contentContainerStyle={styles.container}>
      <View style={{marginHorizontal: 20}}>
        <Text style={styles.textLogIn}>Se connecter</Text>
        <View>
          <Text style={styles.textStyle}>Email :</Text>
          <TextInput style={styles.textInputStyle} value={email} onChangeText={text => setEmail(text)} keyboardType='email-address'/>
        </View>
        <View>
          <Text style={styles.textStyle}>Mot de passe :</Text>
          <TextInput style={styles.textInputStyle} value={password} onChangeText={text => setPassword(text)} secureTextEntry={true}/>
        </View>
        <TouchableOpacity onPress={() => {}} style={styles.buttonStyle}>
          <Text style={styles.buttonText}>Se connecter</Text>
        </TouchableOpacity>
        <View style={styles.textRegister}>
          <Text style={{ fontSize: 13, textAlign: 'center' }}>Vous n'avez pas de compte ?</Text>
          <TouchableOpacity onPress={() => navigation.navigate("inscription")}>          
            <Text style={{fontWeight: "bold", color:"#389FFF"}}>Inscrivez-vous ici</Text>
          </TouchableOpacity>
        </View>
      </View>
    </KeyboardAwareScrollView>
  )
}

export default Connexion

const styles = StyleSheet.create({
    container : {
        flex : 1,
        justifyContent: 'center',
        margin : 40
    },
    textStyle : {
        fontSize : 20
    },
    textInputStyle : {
        borderWidth : 1,
        borderColor : '#8e93a1',
        marginBottom : 30,
        width : 300,
        height : 40
    },
    textLogIn : {
      fontSize : 40,
      textAlign : 'center',
      marginBottom : 30,
      fontWeight : "bold"
  },
    buttonStyle : {
      backgroundColor : "#389FFF",
      height : 45,
      marginBottom : 20,
      justifyContent : "center",
      marginHorizontal : 50,
      borderRadius : 25,
    },
    buttonText : {
      color : "white",
      textAlign : "center",
      fontSize : 22,
      fontWeight : "bold"
    },
    textRegister : {
      alignItems : "center",
      marginBottom : 20
    }
})