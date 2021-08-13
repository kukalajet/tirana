import React, { useMemo, ForwardedRef } from "react";
import { View, Text } from "react-native";
import { BottomSheetModal } from "@gorhom/bottom-sheet";
import CustomBackdropModal from "./CustomBackdropModal";
import { makeStyles } from "../utils";

type Props = {
  name: string;
  children: React.ReactNode;
};

const Modal = React.forwardRef(
  ({ name, children }: Props, ref: ForwardedRef<BottomSheetModal>) => {
    const styles = useStyles();
    const SNAP_POINTS = useMemo(() => ["25%", "50%", "75%"], []);

    return (
      <BottomSheetModal
        ref={ref}
        snapPoints={SNAP_POINTS}
        enableOverDrag
        index={1}
        keyboardBehavior="interactive"
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
    paddingVertical: 8,
    paddingHorizontal: 24,
  },
  pickerContainer: {
    flex: 1,
  },
  title: {
    paddingBottom: 16,
  },
}));

export default Modal;
