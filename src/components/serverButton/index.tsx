import Logo from "../../assets/discord.webp";
import { Button } from "./styles";

export interface ServerButtonProps {
  selected?: boolean;
  isHome?: boolean;
  hasNotifications?: boolean;
  mentions?: number;
}

const ServerButton = ({
  selected,
  hasNotifications,
  isHome,
  mentions,
}: ServerButtonProps) => (
  <Button
    isHome={isHome}
    hasNotifications={hasNotifications}
    mentions={mentions}
    className={selected ? "active" : ""}
  >
    {isHome && <img src={Logo} alt="Discord" />}
  </Button>
);

export default ServerButton;
