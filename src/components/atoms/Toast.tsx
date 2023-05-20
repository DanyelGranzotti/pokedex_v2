import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import styled, { keyframes } from "styled-components";

const toastSlideIn = keyframes`
  from {
    transform: translateX(100%);
  }

  to {
    transform: translateX(0%);
  }
`;

export const StyledToastContainer = styled(ToastContainer)`
  --toastify-color-light: linear-gradient(
    360deg,
    rgba(21, 26, 55, 0) 1%,
    var(--primary-color) 50%
  );
  --toastify-color-progress-light: var(--secondary-color);

  .Toastify__toast {
    border: 1px solid var(--tertiary-color);
    border-radius: 8px;
    font-weight: 700;
    font-size: 1rem;
    line-height: 150%;
    color: #fff;
  }
`;
