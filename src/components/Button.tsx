import React from "react";

import { 
 Text,
 TouchableOpacity, 
 StyleSheet,
 TouchableOpacityProps,
 ButtonProps

} 
from 'react-native';
interface buttonProps extends TouchableOpacityProps{
  title: string
}
 
export function Button({title,  ...rest } : ButtonProps){
return (
    <TouchableOpacity 
     style={style.button}
     activeOpacity={0.7}
     {...rest}
     >
      <Text style={style.buttonText}>{title}</Text>
     </TouchableOpacity>
) 
}

const style =  StyleSheet.create({
  button:{
    backgroundColor: '#A370F7',
    padding: 15,
    borderRadius: 7,
    alignItems: 'center',
    marginTop: 20
  },
  buttonText:{
    color:'#fff',
    fontWeight: 'bold',
  },

  });