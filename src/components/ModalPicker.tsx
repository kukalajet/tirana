import React, { useRef, useState } from "react";
import { View, Text, Pressable, TouchableOpacity } from "react-native";
import { BottomSheetFlatList, BottomSheetModal } from "@gorhom/bottom-sheet";
import { makeStyles } from "../utils";
import Modal from "./Modal";

export type Data = {
  name: string;
};

export enum Selection {
  Single,
  Multi,
}

type Configs = {
  selection: Selection;
};

type Props = {
  name: string;
  data: Array<Data>;
  onPress: (selected: Data) => void;
  configs: Configs;
};

const ModalPicker = ({
  name,
  data,
  onPress,
  configs = { selection: Selection.Single },
}: Props) => {
  const bottomSheetModalRef = useRef<BottomSheetModal>(null);
  const [selected, setSelected] = useState<Data | undefined>();
  const styles = useStyles({ selected: !!selected });

  const type = configs.selection;

  const handleOpen = () => {
    bottomSheetModalRef?.current?.present();
  };

  const handleDismiss = () => {
    bottomSheetModalRef?.current?.dismiss();
  };

  const renderSelectionItem = ({ item }: { item: Data }) => {
    const isSelected = item === selected;

    return (
      <TouchableOpacity
        onPress={() => {
          setSelected(item);
          onPress(item);
          if (type === Selection.Single) handleDismiss();
        }}
      >
        <View style={styles.selectionItem}>
          <Text>{item.name}</Text>
          {!!isSelected && <Text>HEEEY</Text>}
        </View>
      </TouchableOpacity>
    );
  };

  return (
    <Pressable style={styles.container} onPress={handleOpen}>
      <Text style={styles.value}>{selected ? selected.name : name}</Text>
      <Modal name={name} ref={bottomSheetModalRef}>
        <BottomSheetFlatList
          data={data}
          renderItem={renderSelectionItem}
          keyExtractor={(_, index) => index.toString()}
        />
      </Modal>
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
  selectionItem: {
    height: 60,
    width: "100%",
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
    marginVertical: 4,
    borderRadius: 16,
    borderWidth: 2,
    borderColor: "#80808025",
  },
}));

export default ModalPicker;
