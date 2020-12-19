import { Container, HashtagIcon, InviteIcon, SettingIcon } from "./styles";

interface Props {
  channelName?: string;
  selected?: boolean;
}

const ChannelButton = ({ selected, channelName }: Props) => (
  <Container className={selected ? "active" : ""}>
    <div>
      <HashtagIcon />
      <span>{channelName}</span>
    </div>

    <section>
      <InviteIcon />
      <SettingIcon />
    </section>
  </Container>
);

export default ChannelButton;
