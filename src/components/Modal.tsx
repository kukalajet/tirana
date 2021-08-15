import React, { useState, useRef, useCallback, useMemo } from "react";
import { View, StyleSheet, Text, Pressable } from "react-native";
import { BottomSheetModal } from "@gorhom/bottom-sheet";
import HeaderHandle from "./HeaderHandle";

const Modal = () => {
  //#region state
  const [enablePanDownToClose, setEnablePanDownToClose] = useState(true);
  const [enableDismissOnClose, setEnableDismissOnClose] = useState(true);
  //#endregion

  // refs
  const bottomSheetRef = useRef<BottomSheetModal>(null);

  // variables
  const snapPoints = useMemo(() => ["25%", "50%"], []);

  //#region callbacks
  const handleChange = useCallback((index: number) => {
    // eslint-disable-next-line no-console
    console.log("index", index);
  }, []);
  const handleDismiss = useCallback(() => {
    // eslint-disable-next-line no-console
    console.log("on dismiss");
  }, []);
  const handleDismissPress = useCallback(() => {
    bottomSheetRef.current!.dismiss();
  }, []);
  const handleClosePress = useCallback(() => {
    bottomSheetRef.current!.close();
  }, []);
  const handleExpandPress = useCallback(() => {
    bottomSheetRef.current!.expand();
  }, []);
  const handleCollapsePress = useCallback(() => {
    bottomSheetRef.current!.collapse();
  }, []);
  const handlePresentPress = useCallback(() => {
    bottomSheetRef.current!.present();
  }, []);
  const handleEnablePanDownToClosePress = useCallback(() => {
    setEnablePanDownToClose((state) => !state);
  }, []);
  const handleEnableDismissOnClosePress = useCallback(() => {
    setEnableDismissOnClose((state) => !state);
  }, []);
  //#endregion

  // renders
  const renderHeaderHandle = useCallback(
    (props) => <HeaderHandle {...props} children="Modal Example" />,
    []
  );

  return (
    <View style={styles.container}>
      <Pressable onPress={handlePresentPress}>
        <Text>Present Modal</Text>
      </Pressable>
      <Pressable onPress={handleDismissPress}>
        <Text>Dismiss Modal</Text>
      </Pressable>
      <Pressable onPress={handleExpandPress}>
        <Text>Expand</Text>
      </Pressable>
      <Pressable onPress={handleCollapsePress}>
        <Text>Collapse</Text>
      </Pressable>
      <Pressable onPress={handleClosePress}>
        <Text>Close</Text>
      </Pressable>
      <Pressable onPress={handleEnablePanDownToClosePress}>
        <Text>{`${
          enablePanDownToClose ? "Disable" : "Enable"
        } Pan Down To Close`}</Text>
      </Pressable>
      <Pressable onPress={handleEnableDismissOnClosePress}>
        <Text>{`${
          enableDismissOnClose ? "Disable" : "Enable"
        } Dismiss On Close`}</Text>
      </Pressable>
      <BottomSheetModal
        ref={bottomSheetRef}
        snapPoints={snapPoints}
        enablePanDownToClose={enablePanDownToClose}
        enableDismissOnClose={enableDismissOnClose}
        onDismiss={handleDismiss}
        onChange={handleChange}
        handleComponent={renderHeaderHandle}
      >
        <Text>HEEEY</Text>
      </BottomSheetModal>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 24,
  },
});

export default Modal;
