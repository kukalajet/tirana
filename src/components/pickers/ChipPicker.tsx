import React, { useState } from "react";
import { Pressable, Text } from "react-native";
import MultiSelectionModal from "./MultiSelectionModal";
import SingleSelectionModal from "./SingleSelectionModal";
import { makeStyles } from "../../utils";
import { Size } from "../Modal";
import Selection from "./Selection";
import Data from "./Data";

type Props = {
  label: string;
  data: Data[];
  modalSize: Size;
  selection: Selection;
  onConfirm: (values: Data[] | Data) => void;
  onRemove: () => void;
};

const ChipPicker = ({
  label,
  data,
  modalSize,
  selection,
  onConfirm,
  onRemove,
}: Props) => {
  const [open, setOpen] = useState<boolean>(false);
  const [selected, setSelected] = useState<Data | Data[]>();
  const styles = useStyles({ selected: !!selected });

  const getLabel = (item: Data | Data[]): string => {
    if (Array.isArray(item)) {
      const items = (item as Data[]).map((value) => value.label).join(" | ");
      return items;
    }
    return (item as Data).label;
  };

  return (
    <Pressable onPress={() => setOpen(true)} style={styles.container}>
      {selection === "multi" ? (
        <MultiSelectionModal
          data={data}
          open={open}
          label={label}
          size={modalSize}
          onConfirm={(value) => {
            setSelected(value);
            onConfirm(value);
            setOpen(false);
          }}
          onRemove={() => {
            onRemove();
            setSelected(undefined);
            setOpen(false);
          }}
          onDismiss={() => setOpen(false)}
        />
      ) : (
        <SingleSelectionModal
          data={data}
          open={open}
          label={label}
          size={modalSize}
          onConfirm={(value) => {
            setSelected(value);
            onConfirm(value);
            setOpen(false);
          }}
          onRemove={() => {
            onRemove();
            setSelected(undefined);
            setOpen(false);
          }}
          onDismiss={() => setOpen(false)}
        />
      )}
      <Text style={styles.label}>{selected ? getLabel(selected!) : label}</Text>
    </Pressable>
  );
};

type StylesProps = {
  selected: boolean;
};

const useStyles = makeStyles(({ selected }: StylesProps) => ({
  container: {
    borderRadius: 16,
    borderWidth: 1.5,
    borderColor: selected ? "#ffffff20" : "#00000020",
    marginHorizontal: 4,
    backgroundColor: selected ? "#68a0cf" : "#ffffff80",
    alignItems: "center",
    justifyContent: "center",
  },
  label: {
    paddingVertical: 8,
    paddingHorizontal: 20,
    color: selected ? "white" : "black",
  },
}));

export default ChipPicker;
