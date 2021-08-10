import React, { useMemo, useCallback, ForwardedRef } from "react";
import { View, Text } from "react-native";
import { BottomSheetModal } from "@gorhom/bottom-sheet";
import { BottomSheetModalMethods } from "@gorhom/bottom-sheet/lib/typescript/types";
import { makeStyles } from "../utils";

type Props = {
  name: string;
  children: React.ReactNode;
};

const ModalPicker = React.forwardRef(
  ({ name, children }: Props, ref: ForwardedRef<BottomSheetModalMethods>) => {
    const styles = useStyles();

    const snapPoints = useMemo(() => ["25%", "50%", "75%"], []);
    const handleSheetChanges = useCallback((index: number) => {
      console.log("handleSheetChanges", index);
    }, []);

    return (
      <BottomSheetModal
        ref={ref}
        snapPoints={snapPoints}
        onChange={handleSheetChanges}
        keyboardBehavior="interactive"
        enableOverDrag
      >
        <View style={styles.container}>
          <Text>{name}</Text>
          <View style={styles.pickerContainer}>{children}</View>
        </View>
      </BottomSheetModal>
    );
  }
);

type StylesProps = {};

const useStyles = makeStyles(({}: StylesProps) => ({
  container: {
    flex: 1,
    padding: 24,
  },
  pickerContainer: {
    flex: 1,
    alignItems: "center",
  },
}));

export default ModalPicker;
