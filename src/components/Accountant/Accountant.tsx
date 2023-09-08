import React from "react";
import { IAccountant } from "components/Accountant/types";
import {
  Button,
  Image,
  Item,
  Label,
  Text,
  Name,
  Proficiency,
  Figure,
  FigCaption,
  Box,
} from "./style";
export function Accountant(props: IAccountant) {
  const { cell, name, email, picture } = props;

  return (
    <Item>
      <Figure>
        <Image src={picture.thumbnail} alt={picture.thumbnail} />
        <FigCaption>
          <Proficiency>Twoja ksiegowa</Proficiency>
          <Name>
            {name.first} {name.last}
          </Name>
        </FigCaption>
      </Figure>
      <Box>
        <Label>Email</Label>
        <Text $email>{email}</Text>
      </Box>
      <Box>
        <Label>Telefon</Label>
        <Text> {cell}</Text>
      </Box>
      <Box>
        <Label>Srednia cenna netto uslugi / m-ce</Label>
        <Text> 350,00 PLN</Text>
      </Box>
      <Button>Dowiedz sie wiecej</Button>
    </Item>
  );
}
