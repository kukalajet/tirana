import React, { useMemo, ForwardedRef } from "react";
import { View, Text } from "react-native";
import { BottomSheetModal } from "@gorhom/bottom-sheet";
import CustomBackdropModal from "./CustomBackdropModal";
import { makeStyles } from "../utils";

type Props = {
  name: string;
  children: React.ReactNode;
};

const ModalPicker = React.forwardRef(
  ({ name, children }: Props, ref: ForwardedRef<BottomSheetModal>) => {
    const styles = useStyles();
    const SNAP_POINTS = useMemo(() => ["25%", "50%", "75%"], []);

    return (
      <BottomSheetModal
        ref={ref}
        key={"modal"}
        snapPoints={SNAP_POINTS}
        keyboardBehavior="interactive"
        enableOverDrag
        backdropComponent={(props) => <CustomBackdropModal {...props} />}
      >
        <View style={styles.container}>
          <Text style={styles.title}>{name}</Text>
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
  title: {},
}));

export default ModalPicker;
