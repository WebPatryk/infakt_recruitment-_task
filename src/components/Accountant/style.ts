import styled from "styled-components";
import { TextProps } from "components/Accountant/types";

const Button = styled.button`
  background: ${(props) => props.theme.colors?.secondaryColor};
  border-radius: 8px;
  border: none;
  padding: 8px 16px;
  color: ${(props) => props.theme.colors?.primaryColor};
  transition: opacity 0.3s ease-in-out;
  cursor: pointer;

  &:hover {
    opacity: 0.8;
  }
`;

const Item = styled.div`
  border-radius: 16px;
  border: 1px solid ${(props) => props.theme.colors?.lightGrayColor};
  color: ${(props) => props.theme.colors?.primaryColor};
  padding: 24px;
  width: 250px;
`;
const Image = styled.img`
  border-radius: 8px;
  width: 64px;
  height: 64px;
`;
const Label = styled.p`
  font-size: 14px;
  color: ${(props) => props.theme.colors?.grayColor};
  line-height: 20px;
`;

const Text = styled.p<TextProps>`
  font-size: 16px;
  color: ${(props) => props.theme.colors?.blackColor};
  line-height: 24px;
  text-decoration: ${(props) => (props?.$email ? "underline" : "none")};
`;

const Name = styled.h3`
  font-size: 24px;
  color: ${(props) => props.theme.colors?.blackColor};
  margin: 0;
`;
const Proficiency = styled.p`
  font-size: 16px;
  color: ${(props) => props.theme.colors?.grayColor};
  margin: 0;
`;
const Figure = styled.div`
  display: flex;
  align-items: center;
  margin-bottom: 24px;
`;
const FigCaption = styled.div`
  margin: 0 1rem;
`;
const Box = styled.div`
  margin: 1rem 0;
`;

export {
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
};
