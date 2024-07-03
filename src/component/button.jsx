// src/components/button.jsx
/** @jsxImportSource @emotion/react */
import { css } from "@emotion/react";
import * as React from "react";
function Button(props) {
  const buttonStyles = css`
    padding-bottom: 16px;
    padding-top: 16px;
    height: 50px;
    width: 200px;
    border-radius: 7px;
    margin-right: 10px;
    color: white;
    border: none;
  `;

  if (props.type === "error") {
    return (
      <button
        css={css`
          ${buttonStyles};
          background-color: #de5753;
        `}
      >
        Large
      </button>
    );
  } else if (props.type === "success") {
    return (
      <button
        css={css`
          ${buttonStyles};
          background-color: #26b795;
        `}
      >
        Large
      </button>
    );
  }
}

export default Button;
