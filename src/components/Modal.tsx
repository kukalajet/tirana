import React, { useRef, useCallback, useMemo } from "react";
import { StyleSheet, Text, View } from "react-native";
import {
  BottomSheetBackdrop,
  BottomSheetBackdropProps,
  BottomSheetModal,
} from "@gorhom/bottom-sheet";
import { useSafeAreaInsets } from "react-native-safe-area-context";
import { Feather } from "@expo/vector-icons";
import { PrimaryButton } from "./buttons";
import { useEffect } from "react";

type Props = {
  open: boolean;
  children: React.ReactElement;
  onConfirm?: () => void;
  onRemove: () => void;
  onDismiss: () => void;
  disabledButton?: boolean;
};

const Modal = ({
  open,
  children,
  onConfirm,
  onRemove,
  onDismiss,
  disabledButton,
}: Props) => {
  const bottomSheetRef = useRef<BottomSheetModal>(null);
  const snapPoints = useMemo(() => ["25%", "50%", "70%", "90%"], []);
  const { bottom } = useSafeAreaInsets();

  const handleDismiss = useCallback(() => {
    onDismiss();
  }, []);

  useEffect(() => {
    if (open) bottomSheetRef.current?.present();
    if (!open) bottomSheetRef.current?.dismiss();
  }, [open]);

  const renderBackdrop = useCallback(
    (props: BottomSheetBackdropProps) => (
      <BottomSheetBackdrop
        {...props}
        pressBehavior="close"
        disappearsOnIndex={-1}
      />
    ),
    []
  );

  return (
    <BottomSheetModal
      ref={bottomSheetRef}
      snapPoints={snapPoints}
      onDismiss={handleDismiss}
      backdropComponent={renderBackdrop}
      bottomInset={bottom}
      index={snapPoints.length - 1}
    >
      <View style={styles.topBarContainer}>
        <Text style={styles.title}>Title</Text>
        <Feather name="x" size={28} onPress={onRemove} style={styles.remove} />
      </View>
      {children}
      {!!onConfirm && (
        <PrimaryButton
          label="Done"
          disabled={disabledButton}
          onPress={() => onConfirm()}
          style={styles.buttonContainer}
        />
      )}
    </BottomSheetModal>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 24,
  },
  topBarContainer: {
    flexDirection: "row",
    justifyContent: "space-between",
  },
  buttonContainer: {
    marginBottom: 16,
    marginHorizontal: 16,
  },
  title: {
    fontWeight: "bold",
    fontSize: 24,
    paddingVertical: 8,
    paddingHorizontal: 16,
  },
  remove: {
    paddingVertical: 8,
    paddingHorizontal: 16,
  },
});

export default Modal;
