import { Text, View } from "react-native";
import mediaList from "@assets/data/mediaList.json";
import MediaListItem from "@/components/MediaListItem";

export default function HomeScreen() {


  return (
    <View>
      <MediaListItem mediaItem={mediaList[1]}/>
    </View>
  );
}
