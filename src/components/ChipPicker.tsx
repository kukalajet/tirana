import React, { useRef, useState } from "react";
import { View, Text, Pressable, TouchableOpacity } from "react-native";
import { BottomSheetFlatList, BottomSheetModal } from "@gorhom/bottom-sheet";
import { makeStyles } from "../utils";
import ModalPicker from "./ModalPicker";

export type Data = {
  name: string;
};

type Props = {
  name: string;
  data: Array<Data>;
  onPress: (selected: Data) => void;
};

const ChipPicker = ({ name, data, onPress }: Props) => {
  const bottomSheetModalRef = useRef<BottomSheetModal>(null);
  const [selected, setSelected] = useState<Data | undefined>();
  const styles = useStyles({ selected: !!selected });

  const handleOpen = () => {
    bottomSheetModalRef?.current?.present();
  };

  const handleDismiss = () => {
    bottomSheetModalRef?.current?.dismiss();
  };

  const renderSelectionItem = ({ item }: { item: Data }) => {
    return (
      <TouchableOpacity
        style={{ flex: 1 }}
        onPress={() => {
          setSelected(item);
          onPress(item);
          handleDismiss();
        }}
      >
        <View
          style={{
            height: 40,
            width: "100%",
            flexDirection: "row",
            justifyContent: "center",
            alignItems: "center",
            backgroundColor: "blue",
          }}
        >
          <Text>{item.name}</Text>
        </View>
      </TouchableOpacity>
    );
  };

  return (
    <Pressable style={styles.container} onPress={handleOpen}>
      <Text style={styles.value}>{selected ? selected.name : name}</Text>
      <ModalPicker name={name} ref={bottomSheetModalRef}>
        <BottomSheetFlatList
          data={data}
          renderItem={renderSelectionItem}
          keyExtractor={(_, index) => index.toString()}
        />
      </ModalPicker>
    </Pressable>
  );
};

type StylesProps = {
  selected: boolean;
};

const useStyles = makeStyles(({ selected }: StylesProps) => ({
  container: {
    backgroundColor: selected ? "#68a0cf" : undefined,
    borderRadius: 16,
    borderWidth: 1,
    borderColor: "red",
    marginHorizontal: 4,
  },
  value: {
    paddingVertical: 8,
    paddingHorizontal: 12,
  },
}));

export default ChipPicker;
