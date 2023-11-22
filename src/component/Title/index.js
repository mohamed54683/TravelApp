import React, { useState } from "react";
import { Text} from "react-native";

import styles from './styles';

const Title = ({text}) =>{
    const[stateText, setText] = useState('Default State');
     const onTextPressed = () =>{
        setText='Updated'
     }

     
    return(
            <Text  onPress={onTextPressed} style={styles.title}> {stateText}</Text>
    )
}
Title.defaultProps ={
Text:'Default text'
};
export default Title;