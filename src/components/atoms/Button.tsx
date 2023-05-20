import styled from "styled-components";

export const Button = styled.button<any>`
  /* Common styles for all buttons */
  padding: 10px 20px;
  border: none;
  border-radius: 4px;
  font-size: 1rem;
  cursor: pointer;

  ${(props: any) =>
    props.primary &&
    `
    background: linear-gradient(
    360deg,
    rgba(21, 26, 55, 0) 1%,
    var(--primary-color) 50%
    );
    color: var(--text-color);
    border: 1px solid var(--tertiary-color);
    border-radius: 8px;

  `}

  ${(props: any) =>
    props.secondary &&
    `
    :before {
      background-color: var(--text-color);
      content: "";
      position: absolute;
      mix-blend-mode: color-burn;
    }
    border: 2px solid var(--text-color);
    border-radius: 8px;
    font-weight: 700;
    mix-blend-mode: screen;
  `}

  ${(props: any) =>
    props.outlined &&
    `
    background-color: transparent;
    border: 1px solid #333333;
    color: #333333;
  `}
  
  &:hover {
    opacity: 0.8;
  }
`;
