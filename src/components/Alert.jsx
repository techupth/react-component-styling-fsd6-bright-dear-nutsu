// Start coding here
/** @jsxImportSource @emotion/react */
import { css } from '@emotion/react';
import frown from '../assets/frown.png';
import alertTriangle from '../assets/alert-triangle.png';
import alertCircle from '../assets/alert-circle.png';
import checkCircle from '../assets/check-circle.png';

function Alert(props) {
  let bgColor;
  let imageIcon;
  if (props.type === 'error') {
    bgColor = '#F9C8C8';
    imageIcon = frown;
  } else if (props.type === 'warning') {
    bgColor = '#F9D9C8';
    imageIcon = alertTriangle;
  } else if (props.type === 'info') {
    bgColor = '#F9EBC8';
    imageIcon = alertCircle;
  } else if (props.type === 'success') {
    bgColor = '#CEF7CD';
    imageIcon = checkCircle;
  }
  return (
    <div
      css={css`
        color: black;
        padding: 20px;
        margin-left: 0px;
        background-color: ${bgColor};
        font-size: 20px;
        font-weight: 600;
        border: none;
        border-radius: 10px;
        display: flex;
        align-items: center;
        gap: 20px;
      `}
    >
      <img src={imageIcon} alt="image-icon" />
      <span>{`This is ${props.type} alert box`}</span>
    </div>
  );
}

export default Alert;
