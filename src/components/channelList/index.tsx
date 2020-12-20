import ChannelButton from "../channelButton";
import { Container, AddCategoryIcon, Category } from "./styles";

const ChannelList = () => (
  <Container>
    <Category>
      <span>Channel text</span>
      <AddCategoryIcon />
    </Category>

    <ChannelButton channelName="free-chat" />
    <ChannelButton channelName="chat-1" />
    <ChannelButton channelName="chat-2" />
    <ChannelButton channelName="chat-3" />
    <ChannelButton channelName="chat-4" />
  </Container>
);

export default ChannelList;
