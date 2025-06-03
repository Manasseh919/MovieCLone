import { useLocalSearchParams } from "expo-router";
import { Text, View } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import mediaDetailedList from "@assets/data/mediaDetailedList.json";

export default function MediaDetails() {
    const {id}  = useLocalSearchParams()

    const mediaItem = mediaDetailedList.find((media) => media.id === id)

     if (!mediaItem) {
    return <Text style={{color: 'white'}}>Media Not Found!</Text>;
  }
    return (
        <SafeAreaView>
            <Text style={{color: 'white'}}>{mediaItem.title}</Text>
        </SafeAreaView>
    )
}
