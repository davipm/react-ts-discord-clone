import ServerList from "../serverList";
import ServerName from "../serverName";
import ChannelInfo from "../channelInfo";
import ChannelList from "../channelList";
import UserInfo from "../userInfo";

import { Grid } from "./styles";

const Layout = () => (
  <Grid>
    <ServerList />
    <ServerName />
    <ChannelInfo />
    <ChannelList />
    <UserInfo />
  </Grid>
);

export default Layout;
