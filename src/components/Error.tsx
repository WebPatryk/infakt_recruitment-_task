import React from "react";

type Error = {
  error: string;
};

function Error({ error }: Error) {
  return (
    <div>
      <h2>{error.trim()}</h2>
    </div>
  );
}

export default Error;
