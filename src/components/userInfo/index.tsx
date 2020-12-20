import {
  Container,
  Avatar,
  Icons,
  Profile,
  UserData,
  HeadphoneIcon,
  MicIcon,
  SettingsIcon,
} from "./styles";

const UserInfo = () => (
  <Container>
    <Profile>
      <Avatar />
      <UserData>
        <strong>Davi Pereira</strong>
        <span>#1234</span>
      </UserData>
    </Profile>

    <Icons>
      <MicIcon />
      <HeadphoneIcon />
      <SettingsIcon />
    </Icons>
  </Container>
);

export default UserInfo;
