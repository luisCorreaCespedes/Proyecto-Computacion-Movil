import { database } from "../../firebaseAuth";
import { ref, set, onValue, push } from "firebase/database";
import * as Location from 'expo-location'

const refMarker = ref(database, 'markers/');

interface Marker {
    latitude: number,
    longitude: number,
}

const writeMarkerData= async (texto: String) => {
    let current: Marker;
    let location = await Location.getCurrentPositionAsync({});
    current = {
        latitude: location.coords.latitude,
        longitude: location.coords.longitude
    }
    let listRef = refMarker;
    let newPost = push(listRef)
    set(newPost, {
            latitude: current.latitude,
            longitude: current.longitude, 
            fuente: texto,
        });
    }

const readMarkerData = () =>{
    let information
    onValue (refMarker, (snapshot) =>{
        const data = snapshot.val();
        information = data
    })
    return information
}

export {writeMarkerData, readMarkerData};