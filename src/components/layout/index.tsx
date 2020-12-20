import ServerList from "../serverList";
import ServerName from "../serverName";
import ChannelInfo from "../channelInfo";
import ChannelList from "../channelList";

import { Grid } from "./styles";

const Layout = () => (
  <Grid>
    <ServerList />
    <ServerName />
    <ChannelInfo />
    <ChannelList />
  </Grid>
);

export default Layout;
