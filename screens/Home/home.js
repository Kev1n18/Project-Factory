import { View, Text, Button, TouchableOpacity, Switch } from "react-native";
import {styles} from './homeStyle';
import { SafeAreaView } from "react-native-safe-area-context";
import * as Feather from "react-native-feather";
import Slider from '@react-native-community/slider';
import { useState } from "react";
import { useFonts } from 'expo-font';


export const Home = () =>{
    const [range,setRange] = useState('0%');
    const[activoLight, setActivoLight] = useState(false);
    const[activoLock, setActivoLock] = useState(false);
    const[activoFan, setActivoFan] = useState(false);
    const[belanosima] = useFonts({

        'Belanosima-Bold': require('../../assets/fonts/Belanosima/Belanosima-Bold.ttf'),
        'Belanosima-Regular': require('../../assets/fonts/Belanosima/Belanosima-Regular.ttf'),
        'Belanosima-SemiBold': require('../../assets/fonts/Belanosima/Belanosima-SemiBold.ttf')
    })

    const toogleSwitchLight = () =>{

        setActivoLight(previousState => !previousState)

    }

    const toogleSwitchLock = () =>{

        setActivoLock(previousState => !previousState)
    }

    const toogleSwitchFan = () =>{

        setActivoFan(previousState => !previousState)
    }

    

    return(
        <View style={styles.container}>
            <SafeAreaView style={styles.safeareaContainer} >
                <View style={styles.upContentContainer}>
                    <View style={styles.leftContent}>
                        <View style={styles.ProfilePicture}>
                            <Feather.User height={45} width={45} color={'white'}/>
                        </View>
                    </View>

                    <View style={styles.rightContent}>
                        
                        <TouchableOpacity style={styles.partnersButton}>
                            <Feather.Plus height={35} width={35} color={'#013823'}/>
                            <Text style={{fontSize:20, color:'#013823', fontFamily: "Belanosima-Regular"}}>Shelter Partners</Text>
                        </TouchableOpacity>
                    </View>
                </View>

                <View style={styles.MidContentContainer}>
                    <View style={styles.userNameWelcomeBack}>
                        <Text style={{fontSize:33, fontFamily:"Belanosima-Bold"}}>Hi User 👋</Text>
                        <Text style={{fontSize:21, color:"#B5B3B3",}}>Welcome Back to your Shelter</Text>
                    </View>

                    <View style={styles.locationAndTemperature}>
                        <Text style={{fontSize:49,fontFamily: "Belanosima-Regular" }}>Location</Text>
                        <Text style={{fontSize: 188,color:'#F07426'}}> 35º</Text>
                    </View>

                    <View style={styles.sliderviewContainer}>
                        <Text style={{fontSize:23, color:"#B5B3B3", fontFamily: "Belanosima-Regular"}}>Fan Speed {range}</Text>

                        <View style={styles.sliderIconsAlign}>

                            <Feather.Minus width={41} height={51} color={'#B1FC85'}/>

                            <Slider style={{width: 250, height: 40,         marginHorizontal:10,
                            shadowColor:"#CFCFCF",
                            shadowOffset:{
                            width: 1,
                            height:2,
                            },shadowOpacity: 0.6,}}
                                minimumValue={0}
                                maximumValue={1}
                                minimumTrackTintColor="#B1FC85"
                                maximumTrackTintColor="gray"
                                thumbTintColor="#B1FC85"
                                value={0}
                                onValueChange={value => setRange(parseInt(value*100) + '%')}
                            >
                            </Slider>

                            <Feather.Plus width={41} height={51} color={'#B1FC85'}/>
                        </View>
                    </View>

                    <View style={styles.onAndOffButtonsContainer}>

                        <View style={styles.LightContainer}>
                            <Feather.Sun width={55} height={45} color={'#616161'} style={{marginBottom:10}}/>

                            <Switch 
                            trackColor={{false: 'gray', true: '#0099FF'}} 
                            thumbColor={activoLight ? 'white' : 'white'}
                            ios_backgroundColor='grey'
                            onValueChange={toogleSwitchLight}
                            value={activoLight}
                            />
                        </View>

                        <View style={styles.FanContainer}>
                            <Feather.Aperture width={55} height={45} color={'#616161'} style={{marginBottom:10}}/>

                            <Switch
                            trackColor={{false: 'gray', true: '#0099FF'}} 
                            thumbColor={activoFan ? 'white' : 'white'}
                            ios_backgroundColor='grey'
                            onValueChange={toogleSwitchFan}
                            value={activoFan}
                            />
                        </View>

                        <View style={styles.LockContainer}>
                            <Feather.Lock width={55} height={45} color={'#616161'} style={{marginBottom:10}}/>

                            <Switch
                            trackColor={{false: 'gray', true: '#0099FF'}} 
                            thumbColor={activoLock ? 'white' : 'white'}
                            ios_backgroundColor='grey'
                            onValueChange={toogleSwitchLock}
                            value={activoLock}
                            />
                        </View>
                    </View>
                </View>
            </SafeAreaView>
        </View>
    )
}

