import React from "react";

export default function Button({ title, ...rest }) {
  return (
    <>
      <button className="button" {...rest}>
        {title}
      </button>
    </>
  );
}
