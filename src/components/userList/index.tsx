import { Container, Avatar, Role, User } from "./styles";

interface UserProps {
  nickname: string;
  isBot?: boolean;
}

const UserRow = ({ isBot, nickname }: UserProps) => (
  <User>
    <Avatar className={isBot ? "bot" : ""} />
    <strong>{nickname}</strong>
    {isBot && <span>Bot</span>}
  </User>
);

const UserList = () => (
  <Container>
    <Role>Online - 1</Role>
    <UserRow nickname="Davi Pereira" />

    <Role>Offline - 20</Role>
    <UserRow nickname="Davi Pereira" isBot />

    {Array(16)
      .fill("Davi Pereira")
      .map((user, index) => (
        <UserRow nickname={user} key={index} />
      ))}
  </Container>
);

export default UserList;
