import React from "react";

type IError = {
  error: string;
};

function Error({ error }: IError) {
  return (
    <div>
      <h2>{error.trim()}</h2>
    </div>
  );
}

export default Error;
