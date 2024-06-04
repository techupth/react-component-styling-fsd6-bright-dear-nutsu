// Start coding here
/** @jsxImportSource @emotion/react */
import { css } from "@emotion/react";

function Button(props) {
  if (props.type === "error") {
    return (
      <button
        css={css`
          background-color: #de5753;
          padding-bottom: 16px;
          padding-top: 16px;
          height: 50px;
          width: 200px;
          border-radius: 7px;
          margin-right: 10px;
        `}
      >
        Large
      </button>
    );
  } else if (props.type === "success") {
    return (
      <button
        css={css`
          background-color: #26b795;
          padding-bottom: 16px;
          padding-top: 16px;
          height: 50px;
          width: 200px;
          border-radius: 7px;
          margin-left: 10px;
        `}
      >
        Large
      </button>
    );
  }
}

export default Button;
