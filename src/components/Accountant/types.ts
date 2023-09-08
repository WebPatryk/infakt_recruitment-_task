import React from "react";

export type TextProps = React.HTMLProps<HTMLParagraphElement> & {
  $email?: boolean;
};
export interface IAccountant {
  cell: string;
  name: {
    first: string;
    last: string;
  };
  email: string;
  picture: { thumbnail: string; medium: string };
  login: {
    uuid: string;
  };
}
