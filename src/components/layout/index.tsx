import ServerList from "../serverList";
import ServerName from "../serverName";
import ChannelInfo from "../channelInfo";

import { Grid } from "./styles";

const Layout = () => (
  <Grid>
    <ServerList />
    <ServerName />
    <ChannelInfo />
  </Grid>
);

export default Layout;
