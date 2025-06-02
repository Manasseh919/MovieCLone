import { Image, Text, View } from "react-native";
import mediaList from "@assets/data/mediaList.json";
import { MediaList, MediaListData } from "@/types/types";

type MediaListItemProps = {
  mediaItem: MediaListData;
};

export default function MediaListItem({ mediaItem }: MediaListItemProps) {
  return (
    <View>
      <Image
        source={{ uri: mediaItem.image }}
        style={{ width: 110, aspectRatio: 3 / 4 ,marginHorizontal:5,borderRadius:5}}
      />
    </View>
  );
}
