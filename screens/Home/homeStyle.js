import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({

    container:{
        flex: 1,
        backgroundColor: '#F3F7E4',
    },

    safeareaContainer:{
        backgroundColor: '#F3F7E4',
        flex: 1,
    },

    upContentContainer:{
        
        width:'100%',
        height: '15%',
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',
       
    },

    leftContent:{
        
        height: 100,
        width: 170,
        justifyContent: 'center',
        alignItems: 'flex-start',
        paddingHorizontal: 10,
    },

    rightContent:{
        
        height: 100,
        width: 210,
        alignItems: 'flex-end',
        justifyContent:'center',
        paddingHorizontal: 10,
        
    },
    partnersButton:{
        backgroundColor: 'white',
        width: 190,
        flexDirection: 'row',
        justifyContent: 'flex-start',
        alignItems: 'center',
        borderRadius: 23,
        paddingHorizontal:5,
        shadowColor:"#CFCFCF",
        shadowOffset:{
            width: 1,
            height:2,
        },
        shadowOpacity: 0.6,
        
    },
    ProfilePicture:{
        width: 90,
        height:90,
        borderRadius: 48,
        backgroundColor:'#013823',
        alignItems:'center',
        justifyContent: 'center'
    },
    MidContentContainer:{
        
        height: '75%',
        width: '100%',
        
    },
    userNameWelcomeBack:{
        height: 95,
        width: '100%',
        paddingHorizontal: 10,

    },
    locationAndTemperature:{
        
        height: 260,
        width: '100%',
        alignItems: 'center',
        justifyContent: 'center',
    },
    sliderviewContainer:{
        
        width: '100%',
        height:70,
        alignItems: 'center',
        justifyContent: 'center',
    },
    sliderIconsAlign:{
        width: '100%',
        height: 'auto',
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems:'center',
    },
    onAndOffButtonsContainer:{
        width: '100%',
        height: 155,
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',
        paddingHorizontal:10,
    },
    LightContainer:{
        height:100,
        width: 105,
        borderRadius: 10,
        backgroundColor: '#FEFFF6',
        alignItems: 'center',
        justifyContent: 'center',
        shadowColor:"#CFCFCF",
        shadowOffset:{
            width: 1,
            height:2,
        },
        shadowOpacity: 0.6,
    },
    FanContainer:{
        height:100,
        width: 105,
        borderRadius: 10,
        backgroundColor: '#FEFFF6',
        alignItems: 'center',
        justifyContent: 'center',
        shadowColor:"#CFCFCF",
        shadowOffset:{
            width: 1,
            height:2,
        },
        shadowOpacity: 0.6,
    },
    LockContainer:{
        height:100,
        width: 105,
        borderRadius: 10,
        backgroundColor: '#FEFFF6',
        alignItems: 'center',
        justifyContent: 'center',
        shadowColor:"#CFCFCF",
        shadowOffset:{
            width: 1,
            height:2,
        },
        shadowOpacity: 0.6,
    }
});