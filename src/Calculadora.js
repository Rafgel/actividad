import React, { useState } from "react";
import {create,all} from 'mathjs';
const math = create(all);


import  { View,
          text,
          TouchableOpacity,
          StyleSheet
        } from "react-native";     


const Calculadora = () => {
    const [reultado, setResultado] = useState('');

}

const handleButtonPress = (value) => {
    setResultado(resultado) + value
}

const calculadoraResultado = () => {
    try {
        const evaluatedResult = math.evaluate(resultado);
        setResultado(evaluatedResult.toString);
    } catch (error) {
        setResultado('Error');
    }
}



export default Calculadora;