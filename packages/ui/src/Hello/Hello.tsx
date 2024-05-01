import React from "react";
import { Text } from "./styles";

interface HelloProps {}

const Hello: React.FC<HelloProps> = () => {
  return <Text>Hello</Text>;
};

export default Hello;
