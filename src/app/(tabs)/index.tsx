import { FlatList, StyleSheet, Text, View } from "react-native";
import mediaList from "@assets/data/mediaList.json";
import MediaListItem from "@/components/MediaListItem";

export default function HomeScreen() {
  return (
    <View>
      <View>
        <Text>For Mann</Text>
      </View>
      <FlatList
        data={mediaList}
        renderItem={({ item:veriticalListItem }) => (
         <View>
           <Text style={styles.sectionTitle}>{veriticalListItem.title}</Text>
           <FlatList
           horizontal
           data={veriticalListItem.data}
           renderItem={({item:horizontalListItem})=><MediaListItem mediaItem={horizontalListItem} />}
           />
         </View>
        )}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  sectionTitle: {
    fontSize: 17,
    color: "white",
    fontWeight: "700",
    paddingVertical: 10,
  },
});
