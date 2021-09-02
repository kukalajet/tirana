import React from "react";
import { Circle } from "native-base";

type Props = {
  children: React.ReactNode;
  bg: string;
};

const CircleBackgroundIcon = ({ children, bg }: Props) => (
  <Circle bg={bg} padding={1}>
    {children}
  </Circle>
);

export default CircleBackgroundIcon;
