export interface IAccountantsList {
  results: AccountantType[];
  info: {
    page: number;
  };
}

export interface AccountantType {
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
