import { useEffect, useRef, MutableRefObject } from "react";
import ChannelMessage, { Mention } from "../channelMessage";
import { Container, Input, InputIcon, InputWrapper, Messages } from "./styles";

export default function ChannelData() {
  const messageRef = useRef() as MutableRefObject<HTMLDivElement>;

  useEffect(() => {
    const divElement = messageRef.current;
    if (divElement) divElement.scrollTop = divElement.scrollHeight;
  }, [messageRef]);

  return (
    <Container>
      <Messages ref={messageRef}>
        {Array.from(Array(15).keys()).map((item) => (
          <ChannelMessage
            key={item}
            author="Davi Pereira"
            date="00/00/0000"
            content="Content"
          />
        ))}

        <ChannelMessage
          author="Davi Pereira"
          date="00/00/0000"
          content={
            <>
              <Mention>@Davi Pereira</Mention>, Lorem lorem Lorem lorem
            </>
          }
        />
      </Messages>

      <InputWrapper>
        <Input type="text" placeholder="Talk #free-chat" />
        <InputIcon />
      </InputWrapper>
    </Container>
  );
}
