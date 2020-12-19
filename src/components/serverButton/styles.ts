import styled from "styled-components/macro";
import { ServerButtonProps } from "./index";

export const Button = styled.button<ServerButtonProps>`
  position: relative;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-shrink: 0;
  margin-bottom: 8px;
  width: 48px;
  height: 48px;
  border-radius: 50%;

  background-color: ${({ isHome }) =>
    isHome ? "var(--logo)" : "var(--primary)"};

  cursor: pointer;

  > img {
    width: 24px;
    height: 24px;
  }

  ::before {
    content: "";

    display: ${({ hasNotifications }) =>
      hasNotifications ? "inline" : "none"};

    position: relative;
    top: calc(50% - 4.5px);
    left: -17px;
    width: 9px;
    height: 9px;
    background-color: var(--white);
    border-radius: 50%;
  }

  ::after {
    content: "${({ mentions }) => mentions && mentions}";
    display: ${({ mentions }) =>
      mentions && mentions > 0 ? "inline" : "none"};

    background-color: var(--notification);
    width: auto;
    height: 16px;
    padding: 0 4px;
    position: absolute;
    bottom: -4px;
    right: -4px;
    border-radius: 12px;
    border: 4px solid var(--quaternary);
    text-align: right;
    font-size: 13px;
    font-weight: bold;
    color: var(--white);
  }

  transition: all 0.2s;

  :hover,
  &.active {
    border-radius: 16px;

    background-color: ${({ isHome }) =>
      isHome ? "var(--logo)" : "var(--primary)"};
  }
`;
