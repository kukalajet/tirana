import React, { useMemo } from "react";
import {
  BottomSheetBackdropProps,
  useBottomSheetModal,
} from "@gorhom/bottom-sheet";
import Animated, {
  Extrapolate,
  interpolate,
  useAnimatedStyle,
} from "react-native-reanimated";
import { Pressable } from "react-native";

const CustomBackdropModal = ({
  animatedIndex,
  style,
}: BottomSheetBackdropProps) => {
  const { dismissAll } = useBottomSheetModal();

  const containerAnimatedStyle = useAnimatedStyle(() => ({
    opacity: interpolate(
      animatedIndex.value,
      [0, 1],
      [0, 1],
      Extrapolate.CLAMP
    ),
  }));
  const containerStyle = useMemo(
    () => [style, { backgroundColor: "#00000025" }, containerAnimatedStyle],
    [style, containerAnimatedStyle]
  );

  return (
    <Animated.View style={containerStyle}>
      <Pressable style={{ flex: 1 }} onPress={dismissAll} />
    </Animated.View>
  );
};

export default CustomBackdropModal;
