import * as React from "react";
import styled from "styled-components";

import { Channel } from "@mod-tool/utils";

import { ListChannelItem } from "../3.compounds";

const Container = styled.div`
  display: flex;
  flex-direction: column;
`;

type ListChannelsProps = { channels: Channel[] };

export const ListChannels: React.FC<ListChannelsProps> = ({ channels }) => {
  return (
    <Container>
      {channels.map((channel, index) => <ListChannelItem key={index} channel={channel} index={index} /> )}
    </Container>
  );
};

