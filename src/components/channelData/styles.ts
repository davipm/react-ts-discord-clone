import styled from "styled-components/macro";
import { AlternateEmail } from "styled-icons/material";

export const Container = styled.div`
  grid-area: CD;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  background-color: var(--primary);
`;

export const Messages = styled.div`
  display: flex;
  flex-direction: column;
  padding: 20px 0;
  max-height: calc(100vh - 46px - 68px);
  overflow-y: scroll;

  ::-webkit-scrollbar {
    width: 8px;
  }

  ::-webkit-scrollbar-thumb {
    background-color: var(--tertiary);
    border-radius: 4px;
  }

  ::-webkit-scrollbar-track {
    background-color: var(--secondary);
  }
`;

export const InputWrapper = styled.div`
  width: 100%;
  padding: 0 16px;
`;

export const Input = styled.input`
  position: relative;
  padding: 0 10px 0 57px;
  width: 100%;
  height: 44px;
  color: var(--white);
  background-color: var(--chat-input);
  border-radius: 7px;

  ::placeholder {
    color: var(--gray);
  }

  ~ svg {
    position: relative;
    top: -34px;
    left: 14px;
    transition: 180ms ease-in-out;
  }
`;

export const InputIcon = styled(AlternateEmail)`
  width: 24px;
  height: 24px;
  color: var(--gray);
`;
