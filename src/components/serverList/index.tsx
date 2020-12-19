import ServerButton from "../serverButton";

import { Container, Separator } from "./styles";

export default function ServerList() {
  return (
    <Container>
      <ServerButton isHome />
      <Separator />
      <ServerButton />
      <ServerButton hasNotifications />
      <ServerButton mentions={3} />
      <ServerButton />
      <ServerButton />
      <ServerButton />
      <ServerButton hasNotifications />
      <ServerButton />
      <ServerButton />
      <ServerButton mentions={72} />
      <ServerButton />
      <ServerButton />
    </Container>
  );
}
