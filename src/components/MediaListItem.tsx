import { Text, View } from "react-native";
import mediaList from "@assets/data/mediaList.json";
import { MediaList } from "@/types/types";

type MediaListItemProps = {
  mediaItem: MediaList;
};

export default function MediaListItem({ mediaItem }: MediaListItemProps) {
  return (
    <View>
      <Text style={{ color: "white" }}>{mediaItem.title}</Text>
    </View>
  );
}
