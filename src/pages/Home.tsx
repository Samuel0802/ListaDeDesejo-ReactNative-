import React, { useState, useEffect } from "react"; //userState serve pra armazenar estado

import {
   View,
   Text,
   StyleSheet,
   TextInput,
   Platform, 
   FlatList, //barra de rolagem
   ImageBackground,
   Image,
   TouchableWithoutFeedback,
   Keyboard
  }
   from 'react-native';

import { Button } from "../components/Button";
import { SkillCard } from "../components/SkillCard";


interface SkillData{
  id: string;
  name: string;
 
}

export function Home(){
  const [newSkill, setNewSkill] = useState('');
  const [mySkills, setMySkills] = useState<SkillData[ ]>([]);
  const [gretting, setGretting] = useState('');

  function handleAddNewSkill(){ /* Ela é uma função com interação com usuario */
  const data = {
    id: String(new Date().getTime()),
    name: newSkill
  }
   setMySkills(oldState => [...oldState, data]);
  }


  function handleRemoveSkill(id: string){
setMySkills(oldState => oldState.filter(
   skill => skill.id !== id
));
  }


  /*  */
  useEffect(() =>{
const currentHour = new Date().getHours();

if(currentHour < 12){
setGretting('Bom dia!')
}
else if(currentHour >= 12 && currentHour < 18 ){
  setGretting('Boa tarde!');
} else {
  setGretting('Boa noite!');
}
  }, [])



  return (

    <TouchableWithoutFeedback onPress={Keyboard.dismiss}> 
    <View style={style.container}>
        
      <Text style={style.title}>Seja Bem Vindo, Samuel</Text>
      <Text style={style.greetings}>
      {gretting}
     </Text>

         <TextInput
         style={style.input} 
         placeholder="Nova Lista"
         placeholderTextColor="#555"
         onChangeText={setNewSkill}
     />

     <Button onPress={handleAddNewSkill}
     title='Add' />


     <Text  style={[style.title, {marginVertical: 50}]}>
    LISTA DE DESEJO
     </Text>

     
   <FlatList 
   
     data={mySkills}
     keyExtractor={item => item.id}
     renderItem={({ item }) => (
     <SkillCard  
     skill={item.name}
     onPress={() => handleRemoveSkill(item.id)}
     />
     )
    }
   />

  </View>
  </TouchableWithoutFeedback>

  )
}

/* parte de baixo é css do app */
const style =  StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#121015', 
    paddingVertical: 70,
    paddingHorizontal: 30
},
title: {
  flex: 1,
  color:'#fff',
  fontSize: 24,
  fontWeight: 'bold',
  alignItems: 'center',
  justifyContent: 'center'
},
input:{
  backgroundColor: '#1F1E25',
  color: '#fff',
  fontSize: 18,
  padding: Platform.OS == 'ios' ? 15 : 10,
  marginTop: 30,
  borderRadius: 7
},
greetings:{
  color: '#fff',
  fontSize: 22,
  fontWeight: 'bold'
}

});