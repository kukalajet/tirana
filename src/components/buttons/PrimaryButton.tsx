import React, { useState } from "react";
import { Text, Pressable } from "react-native";
import { makeStyles } from "../../utils";

type Props = {
  label: string;
  disabled?: boolean;
  onPress: () => void;
};

const PrimaryButton = ({ label, disabled, onPress }: Props) => {
  const [pressed, setPressed] = useState<boolean>(false);
  const styles = useStyles({ pressed, disabled });

  return (
    <Pressable
      onPress={onPress}
      onPressIn={() => setPressed(true)}
      onPressOut={() => setPressed(false)}
      disabled={disabled}
      style={styles.container}
    >
      <Text style={styles.label}>{label}</Text>
    </Pressable>
  );
};

type StylesProps = {
  pressed: boolean;
  disabled?: boolean;
};

const useStyles = makeStyles(({ pressed, disabled }: StylesProps) => ({
  container: {
    height: 48,
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: disabled ? "#eee" : pressed ? "#1237E480" : "#1237E4",
    margin: 8,
    borderRadius: 8,
  },
  label: {
    color: "white",
    fontWeight: "bold",
    fontSize: 16,
  },
}));

export default PrimaryButton;
