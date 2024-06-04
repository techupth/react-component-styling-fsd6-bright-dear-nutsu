// Start coding here
/** @jsxImportSource @emotion/react */
import { css } from '@emotion/react';

function Button(props) {
  let bgColor;
  if (props.color === 'primary') {
    bgColor = '#074EE8';
  } else if (props.color === 'secondary') {
    bgColor = '#07A4E8';
  }
  return (
    <button
      css={css`
        padding: 20px 50px;
        background-color: ${bgColor};
        font-size: 16px;
        border: none;
        border-radius: 5px;
        text-align: center;
        &:hover {
          color: white;
        }
      `}
    >
      {props.text}
      {/* Large */}
    </button>
  );
}

export default Button;

// background-color: #4caf50;
// background-color: ${props.color === 'primary' ? '#074EE8 ' : '#07A4E8'};
