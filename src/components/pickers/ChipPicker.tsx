import React, { useState } from "react";
import { Pressable, Text } from "react-native";
import MultiSelectionModal from "./MultiSelectionModal";
import SingleSelectionModal from "./SingleSelectionModal";
import { makeStyles } from "../../utils";
import {
  ModalSelection,
  Price,
  PropertyStatus,
  PropertyType,
} from "../../models";
import { Data, ModalSize } from "../../models";
import { PropertyKeys } from "../../models/CompactProperty";

export type SelectedFilter = Data<PropertyStatus | PropertyType | Price>;

type Props = {
  label: PropertyKeys;
  data: SelectedFilter[];
  modalSize: ModalSize;
  selection: ModalSelection;
  onConfirm: (data: SelectedFilter | SelectedFilter[]) => void;
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
  const [selected, setSelected] = useState<SelectedFilter | SelectedFilter[]>();
  const styles = useStyles({ selected: !!selected });

  const getLabel = (item: SelectedFilter | SelectedFilter[]): string => {
    if (Array.isArray(item)) {
      const items = (item as Data<PropertyStatus | PropertyType>[])
        .map((value) => value.value)
        .join(" | ");
      return items;
    }
    return (item as SelectedFilter).value!.toString();
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
