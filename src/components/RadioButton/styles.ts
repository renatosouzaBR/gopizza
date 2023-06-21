import styled, { css } from "styled-components/native";
import { TouchableOpacity } from "react-native";

interface RadioButtonProps {
  selected: boolean;
}

export const Container = styled(TouchableOpacity)<RadioButtonProps>`
  width: 104px;
  height: 82px;
  border-radius: 8px;
  padding: 14px 12px;

  ${({ theme, selected }) => css`
    background-color: ${selected
      ? theme.COLORS.SUCCESS_50
      : theme.COLORS.TITLE};
    border: 1px solid
      ${selected ? theme.COLORS.SUCCESS_900 : theme.COLORS.SHAPE};
  `};
`;

export const Title = styled.Text`
  font-size: 16px;
  margin-top: 16px;

  ${({ theme }) => css`
    font-family: ${theme.FONTS.TITLE};
    color: ${theme.COLORS.SECONDARY_900};
  `};
`;

export const Radio = styled.View<RadioButtonProps>`
  width: 20px;
  height: 20px;
  border-radius: 10px;
  border: 1px solid
    ${({ theme, selected }) =>
      selected ? theme.COLORS.SUCCESS_900 : theme.COLORS.SECONDARY_900};

  align-items: center;
  justify-content: center;
`;

export const Selected = styled.View`
  width: 8px;
  height: 8px;
  border-radius: 4px;
  background-color: ${({ theme }) => theme.COLORS.SUCCESS_900};
`;
