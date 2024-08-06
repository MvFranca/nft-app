import { Dimensions, TouchableOpacity, View } from "react-native";
import { Text } from "react-native";
import { StyleSheet } from 'react-native';
import Icon from "react-native-vector-icons/Entypo";
import Icon2 from "react-native-vector-icons/MaterialIcons";
import { theme } from "../../theme/fonts";
import { useEffect, useState } from "react";

type props ={
    option: boolean;
    setOption: (x: boolean) => void;
}

const Options = ({option, setOption}:props) => {

    const [optionSelected, setOptionsSelected] = useState<"selected" | 'noSelected'>("noSelected")

    useEffect(() => {
        
        option ? setOptionsSelected("selected") :
        setOptionsSelected("noSelected") 
        
    }, [option])

    function selectOption (option:boolean){
        setOption(option)
    }

    return ( 
        <View style={styles.container}>
            
            <TouchableOpacity style={[styles.option,[styles.option, optionSelected === "selected" ? styles.noSelected : styles.selected]]}
                onPress={() => selectOption(false)}
            >
                <Icon name="bar-graph" size={20} color={optionSelected === "selected" ? theme.colors.textOpacity : theme.colors.white} />
                <Text style={[optionSelected === "selected" ? styles.textOpacity : styles.text]}>
                    Ranking
                </Text>
            </TouchableOpacity>
          
            <TouchableOpacity style={[styles.option, styles[optionSelected]]}
                       onPress={() => selectOption(true)}
            >
                <Icon2 name="query-stats" size={20} color={optionSelected === "selected" ? theme.colors.white : theme.colors.textOpacity} />
                <Text style={[optionSelected === "selected" ? styles.text : styles.textOpacity]}>
                   Activity
                </Text>
            </TouchableOpacity>

        </View>
     );
}


export const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    width: Dimensions.get("window").width,
    height: 52.25,
    borderBottomWidth: 1.5,
    borderColor: "#97a9f668",
    justifyContent: "center",
    gap: 10
  },
  option: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
    gap: 10,
    marginBottom: -1.5 ,
    width: 140,

    borderBottomWidth: 3.6,
    borderColor: "#97A9F6",

  },

  selected: {
    
    borderBottomWidth: 3.6,
    borderColor: "#97A9F6",
  },

  noSelected: {
    borderBottomWidth: 0,
  },    

  text: {
    color: theme.colors.white
  },
  textOpacity: {
    color: theme.colors.textOpacity
  }
});

export default Options;