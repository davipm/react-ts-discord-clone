import ServerList from "../serverList";
import ServerName from "../serverName";
import ChannelInfo from "../channelInfo";
import ChannelList from "../channelList";
import UserInfo from "../userInfo";
import ChannelData from "../channelData";
import UserList from "../userList";

import { Grid } from "./styles";

const Layout = () => (
  <Grid>
    <ServerList />
    <ServerName />
    <ChannelInfo />
    <ChannelList />
    <UserInfo />
    <ChannelData />
    <UserList />
  </Grid>
);

export default Layout;
