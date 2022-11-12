import React from "react";
import { TouchableOpacityProps } from "react-native";
import { Feather } from "@expo/vector-icons";
import { useTheme } from "styled-components/native";

import {
  Container,
  Content,
  Description,
  Details,
  Identification,
  Line,
  Photo,
  Title,
} from "./styles";

export interface ProductProps {
  id: string;
  photo_url: string;
  name: string;
  description: string;
}

interface ProductCardProps extends TouchableOpacityProps, ProductProps {}

export function ProductCard(props: ProductCardProps) {
  const { photo_url, name, description, ...rest } = props;
  const { COLORS } = useTheme();

  return (
    <Container>
      <Content {...rest}>
        <Photo source={{ uri: photo_url }} />

        <Details>
          <Identification>
            <Title>{name}</Title>
            <Feather
              name="chevron-right"
              size={16}
              color={COLORS.SECONDARY_900}
            />
          </Identification>

          <Description>{description}</Description>
        </Details>
      </Content>

      <Line />
    </Container>
  );
}
