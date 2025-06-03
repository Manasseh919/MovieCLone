import { useLocalSearchParams } from "expo-router";
import { Text, View } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import mediaDetailedList from "@assets/data/mediaDetailedList.json";
import MediaInfo from "@/components/MediaDetails/MediaInfo";

export default function MediaDetails() {
  const { id } = useLocalSearchParams();

  const mediaItem = mediaDetailedList.find((media) => media.id === id);

  if (!mediaItem) {
    return <Text style={{ color: "white" }}>Media Not Found!</Text>;
  }

  const { title, description, ageRestriction, duration, type, releaseYear } =
    mediaItem;
  return (
    <SafeAreaView>
      <MediaInfo
        title={title}
        description={description}
        ageRestriction={ageRestriction}
        duration={duration}
        type={type}
        releaseYear={releaseYear}
      />
    </SafeAreaView>
  );
}
