import { View, Text, SafeAreaView } from "react-native";
import { styles} from './MapStyle';
import MapView from 'react-native-maps';
import { SearchBar } from "../../Components/searchbar";

export const Maps = () =>{

    return(
        <View style={styles.container}>
            <MapView style={styles.mapStyle}>
                <SafeAreaView style={styles.searchBarContainer}>
                    <SearchBar/>
                </SafeAreaView>
            </MapView>
        </View>
    )
}