import styled, { css } from "styled-components/macro";
import { Mic, Headset, Settings } from "styled-icons/material";

const IconCSS = css`
  width: 20px;
  height: 20px;
  color: var(--white);
  opacity: 0.7;
  cursor: pointer;
  transition: opacity 0.2s;

  :hover {
    opacity: 1;
  }
`;

export const Container = styled.div`
  grid-area: UI;
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 10px;
  background-color: var(--quaternary);
  box-shadow: rgba(0, 0, 0, 0.2) 0 1px 0 0;
`;

export const Profile = styled.div`
  display: flex;
  align-items: center;
`;

export const Avatar = styled.div`
  width: 32px;
  height: 32px;
  background-color: var(--gray);
`;

export const UserData = styled.div`
  display: flex;
  flex-direction: column;
  margin-left: 8px;

  > strong {
    display: block;
    font-size: 13px;
    color: var(--white);
  }

  > span {
    color: var(--gray);
    font-size: 13px;
  }
`;

export const Icons = styled.div`
  display: flex;
  align-items: center;

  > svg:not(:first-child) {
    margin-left: 7px;
  }
`;

export const MicIcon = styled(Mic)`
  ${IconCSS}
`;

export const HeadphoneIcon = styled(Headset)`
  ${IconCSS}
`;

export const SettingsIcon = styled(Settings)`
  ${IconCSS}
`;
