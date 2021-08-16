import React, { useRef, useCallback, useMemo } from "react";
import { StyleSheet, Text } from "react-native";
import {
  BottomSheetBackdrop,
  BottomSheetBackdropProps,
  BottomSheetModal,
} from "@gorhom/bottom-sheet";
import { PrimaryButton } from "./buttons";
import { useSafeAreaInsets } from "react-native-safe-area-context";
import { useEffect } from "react";

type Props = {
  children: React.ReactElement;
  onConfirm?: () => void;
  onDismiss: () => void;
  open: boolean;
  disabledButton?: boolean;
};

const Modal = ({
  children,
  onConfirm,
  onDismiss,
  open,
  disabledButton,
}: Props) => {
  const bottomSheetRef = useRef<BottomSheetModal>(null);
  const snapPoints = useMemo(() => ["25%", "50%", "75%"], []);
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
      <Text style={styles.title}>Title</Text>
      {children}
      {!!onConfirm && (
        <PrimaryButton
          label="Done"
          disabled={disabledButton}
          onPress={() => onConfirm()}
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
  title: {
    fontWeight: "bold",
    fontSize: 24,
    paddingVertical: 8,
    paddingHorizontal: 16,
  },
});

export default Modal;
