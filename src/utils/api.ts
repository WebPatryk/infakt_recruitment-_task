interface Api {
  result: number;
  seed?: string;
  gender?: string;
  page?: number;
}

export const generateApiUrl = ({
  result,
  seed = "abc",
  gender = "female",
  page = 1,
}: Api): string => {
  return `https://randomuser.me/api/?seed=${seed}&gender=${gender}&page=${page}&results=${result}`;
};
