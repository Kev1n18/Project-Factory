import { View, Text, StyleSheet, TextInput } from "react-native";
import * as Feather from "react-native-feather";

export const SearchBar = () =>{

    return(
        <View style={styles.container}>
            <Feather.Search stroke='#013823' width={30} height={30}/>
            <TextInput placeholder="Your Friend Name" style={styles.InputText}/>
        </View>
    );

}

const styles = StyleSheet.create({

    container:{
        width: '80%',
        height: '65%',
        backgroundColor: 'white',
        borderRadius: 48,
        borderWidth: 0,
        alignItems: 'center',
        flexDirection: 'row',
        paddingHorizontal:20,
        shadowColor:"#CFCFCF",
        shadowOffset:{
            width: 1,
            height:2,
        },
        shadowOpacity: 0.6,
        
    },
    InputText:{
        paddingHorizontal: 10,
        fontSize:20,
        
    }
})