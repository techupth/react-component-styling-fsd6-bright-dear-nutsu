// Start coding here
/** @jsxImportSource @emotion/react */
import { css } from "@emotion/react";
import picfrown from "../icon/frown.png";
import piccircle from "../icon/alert-circle.png";
import pictrinag from "../icon/alert-triangle.png";
import piccheck from "../icon/check-circle.png";

function Alert(props) {
  if (props.type === "alert-error") {
    return (
      <div
        css={css`
          display: flex;
          align-items: center;
          background-color: #f9c8c8;
          height: 40px;
          color: #444444;
          border-radius: 7px;
          text-align: start;
          margin-bottom: 20px;
          padding-bottom: 10px;
          padding-top: 10px;
          padding-left: 15px;
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
          display: flex;
          align-items: center;
          background-color: #f9d9c8;
          height: 40px;
          color: #444444;
          border-radius: 7px;
          text-align: start;
          margin-bottom: 20px;
          padding-bottom: 10px;
          padding-top: 10px;
          padding-left: 15px;
        `}
      >
        <img
          src={piccircle}
          alt=""
          css={css`
            padding-right: 10px;
          `}
        />
        <span>This is error alert box.</span>
      </div>
    );
  } else if (props.type === "alert-info") {
    return (
      <div
        css={css`
          display: flex;
          align-items: center;
          background-color: #f9ebc8;
          height: 40px;
          color: #444444;
          border-radius: 7px;
          text-align: start;
          margin-bottom: 20px;
          padding-bottom: 10px;
          padding-top: 10px;
          padding-left: 15px;
        `}
      >
        <img
          src={pictrinag}
          alt=""
          css={css`
            padding-right: 10px;
          `}
        />
        <span>This is error alert box.</span>
      </div>
    );
  } else if (props.type === "alert-success") {
    return (
      <div
        css={css`
          display: flex;
          align-items: center;
          background-color: #cef7cd;
          height: 40px;
          color: #444444;
          border-radius: 7px;
          text-align: start;
          padding-bottom: 10px;
          padding-top: 10px;
          padding-left: 15px;
        `}
      >
        <img
          src={piccheck}
          alt=""
          css={css`
            padding-right: 10px;
          `}
        />
        <span>This is error alert box.</span>
      </div>
    );
  }
}

export default Alert;
