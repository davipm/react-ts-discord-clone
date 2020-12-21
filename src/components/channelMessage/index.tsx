import { ReactElement, ReactNode } from "react";

import { Container, Avatar, Content, Header, Message } from "./styles";
export { Mention } from "./styles";

interface Props {
  author: string;
  date: string;
  content: string | ReactElement | ReactNode;
  hasMention?: boolean;
  isBot?: boolean;
}

const ChannelMessage = ({
  author,
  content,
  date,
  hasMention,
  isBot,
}: Props) => (
  <Container className={hasMention ? "mention" : ""}>
    <Avatar className={isBot ? "bot" : ""} />
    <Message>
      <Header>
        <strong>{author}</strong>
        {isBot && <span>Bot</span>}
        <time>{date}</time>
      </Header>
      <Content>{content}</Content>
    </Message>
  </Container>
);

export default ChannelMessage;
