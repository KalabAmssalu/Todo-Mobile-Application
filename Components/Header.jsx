import React from "react";
import {
  HeaderView,
  HeaderTitle,
  HeaderButton,
  colors,
} from "../styles/appstyles";
import { Entypo } from "@expo/vector-icons";
// ICONS

const Header = ({ handleClearTodos }) => {
  return (
    <HeaderView>
      <HeaderTitle>Todos</HeaderTitle>
      <HeaderButton onPress={handleClearTodos}>
        <Entypo name='trash' size={25} color={colors.tertiary} />
      </HeaderButton>
    </HeaderView>
  );
};

export default Header;
