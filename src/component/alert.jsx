// src/components/alert.jsx
/** @jsxImportSource @emotion/react */
import * as React from "react";
import { css } from "@emotion/react";
import picfrown from "../icon/frown.png";
import piccircle from "../icon/alert-circle.png";
import pictrinag from "../icon/alert-triangle.png";
import piccheck from "../icon/check-circle.png";
function Alert(props) {
  const alertStyles = css`
    display: flex;
    align-items: center;
    height: 40px;
    color: #444444;
    border-radius: 7px;
    text-align: start;
    margin-bottom: 20px;
    padding: 10px 15px;
  `;

  if (props.type === "alert-error") {
    return (
      <div
        css={css`
          ${alertStyles};
          background-color: #f9c8c8;
        `}
      >
        <img
          src={picfrown}
          alt=""
          css={css`
            padding-right: 10px;
          `}
        />
        <span>This is error alert box.</span>
      </div>
    );
  } else if (props.type === "alert-warning") {
    return (
      <div
        css={css`
          ${alertStyles};
          background-color: #f9d9c8;
        `}
      >
        <img
          src={piccircle}
          alt=""
          css={css`
            padding-right: 10px;
          `}
        />
        <span>This is warning alert box.</span>
      </div>
    );
  } else if (props.type === "alert-info") {
    return (
      <div
        css={css`
          ${alertStyles};
          background-color: #f9ebc8;
        `}
      >
        <img
          src={pictriangle}
          alt=""
          css={css`
            padding-right: 10px;
          `}
        />
        <span>This is info alert box.</span>
      </div>
    );
  } else if (props.type === "alert-success") {
    return (
      <div
        css={css`
          ${alertStyles};
          background-color: #cef7cd;
        `}
      >
        <img
          src={piccheck}
          alt=""
          css={css`
            padding-right: 10px;
          `}
        />
        <span>This is success alert box.</span>
      </div>
    );
  }
}

export default Alert;
