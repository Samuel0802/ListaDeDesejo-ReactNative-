import React from "react";
import {
    TouchableOpacity, 
    Text, 
    StyleSheet,
    TouchableOpacityProps
} 
from "react-native";

interface SkillCardProps extends TouchableOpacityProps{
  skill: string;
}


export function SkillCard({ skill, ...rest} : SkillCardProps){
    return(
<TouchableOpacity  style={style.buttonSkill}
{...rest}

>
   <Text style={style.skill}>
       {skill}
      </Text>
      </TouchableOpacity>
    )
}


const style =  StyleSheet.create({
  
  skill: {
    color: '#fff',
    fontSize: 18, 
    fontWeight: 'bold',
  
  },
  buttonSkill:{
    backgroundColor: '#1F1E25',
    padding: 20,
    borderRadius: 50,
    alignItems: 'center',
    marginVertical: 10
  }
  });