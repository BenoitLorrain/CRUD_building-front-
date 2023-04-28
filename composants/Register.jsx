import { StyleSheet, Text, View, TextInput, TouchableOpacity, ScrollView } from 'react-native'
import React, {useEffect, useState} from 'react'
import { KeyboardAwareScrollView } from 'react-native-keyboard-aware-scroll-view'


import axios from 'axios';
 



const Register = ({ navigation }) => {

    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");


    /*
    const handleSubmit = async () => {
        if (email === '' || password === '') {
            alert("Tous les champs doivent être remplis.");
            return;
        }
        const resp = await axios.post("http://localhost:4003/user/", { email, password}).then(reps => {
          console.log(resp);
          console.log(resp.data);
          alert("Votre compte à bien été créé.");
        })
        .catch(error => console.log(error));
    }
    */
   /*
    useEffect(() => {
      axios.post(url).then(res => {
        setEmail(res.data.email);
        setPassword(res.data.password);
        alert("Vous vous êtes bien connecté.")
      })
    }, [])
    */
    

  return (
    <KeyboardAwareScrollView contentContainerStyle={styles.container} >
      <View style={{marginHorizontal: 20}}>
        <Text style={styles.textRegister}>Créer un compte</Text>
        <View>
          <Text style={styles.textStyle}>Email :</Text>
          <TextInput style={styles.textInputStyle}  onChangeText={text => setEmail(text)} keyboardType='email-address'/>
        </View>
        <View>
          <Text style={styles.textStyle}>Mot de passe :</Text>
          <TextInput style={styles.textInputStyle}  onChangeText={text => setPassword(text)} secureTextEntry={true}/>
        </View>
        <TouchableOpacity onPress={() => {}} style={styles.buttonStyle}>
          <Text style={styles.buttonText}>Valider</Text>
        </TouchableOpacity>
        <View style={styles.textAlreadyHaveAccount}>
          <Text style={{ fontSize: 13, textAlign: 'center' }}>Vous avez déjà un compte ?</Text>
          <TouchableOpacity onPress={() => navigation.navigate("connexion")}>          
            <Text style={{fontWeight: "bold", color:"#389FFF"}}>Connectez-vous ici</Text>
          </TouchableOpacity>
        </View>

      </View>
    </KeyboardAwareScrollView>
  )
}

export default Register

const styles = StyleSheet.create({
    container : {
        flex : 1,
        justifyContent: 'center',
        margin : 40
    },
    textRegister : {
        fontSize : 40,
        textAlign : 'center',
        marginBottom : 30,
        fontWeight : "bold"
    },
    textStyle : {
        fontSize : 20
    },
    textInputStyle : {
        borderWidth : 0.7,
        borderColor : '#8e93a1',
        marginBottom : 40,
        width : 300,
        height : 40
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
    textAlreadyHaveAccount : {
      alignItems : "center",
      marginBottom : 20
    }
})
