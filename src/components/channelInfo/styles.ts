import styled from "styled-components/macro";
import { Hashtag } from "styled-icons/heroicons-outline";

export const Container = styled.div`
  grid-area: CI;
  display: flex;
  align-items: center;
  padding: 0 17px;
  background-color: var(--primary);
  box-shadow: rgba(0, 0, 0, 0.2) 0 1px 0 0;
  z-index: 2;
`;

export const Title = styled.h1`
  margin-left: 9px;
  font-size: 16px;
  font-weight: bold;
  color: var(--white);
`;

export const Separator = styled.div`
  margin: 0 13px;
  width: 1px;
  height: 24px;
  background-color: var(--white);
  opacity: 0.2;
`;

export const Description = styled.div`
  font-size: 15px;
  color: var(--gray);
`;

export const HashtagIcon = styled(Hashtag)`
  width: 24px;
  height: 24px;
  color: var(--symbol);
`;
