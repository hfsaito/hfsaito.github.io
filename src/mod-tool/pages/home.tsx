import * as React from 'react';
import styled from 'styled-components';

import { H1, ListChannels, Container, Button, HSpace, VSpace } from '@mod-tool/components';
import { gankListStore, useStore } from '@mod-tool/stores';

const ActionsContainer = styled.div`
  display: flex;
`;

export const HomePage: React.FC = () => {
  useStore(gankListStore);

  const importList = React.useCallback(async () => {
    const imported = await navigator.clipboard.readText();
    const displayNames = imported.split(',').map(name => name.trim());
    gankListStore.setChannels(displayNames);
  }, []);
  const exportList = React.useCallback(() => {
    const exported = gankListStore.state.channels.map(channel => channel.name).join(', ');
    navigator.clipboard.writeText(exported);
  }, []);
  const refresh = React.useCallback(() => {
    const displayNames = gankListStore.state.channels.map(channel => channel.name);
    gankListStore.setChannels(displayNames);
  }, []);

  return (
    <main>
      <Container>
        <H1>Gank list</H1>
        <VSpace />
        <ActionsContainer>
          <HSpace />
          <Button onClick={importList} disabled={gankListStore.state.loading}>
            Import
          </Button>
          <HSpace />
          <Button onClick={exportList} disabled={gankListStore.state.loading}>
            Export
          </Button>
          <HSpace />
          <Button onClick={refresh} disabled={gankListStore.state.loading}>
            Refresh
          </Button>
          <HSpace />
        </ActionsContainer>
        <VSpace />
        {!gankListStore.state.loading && (
          <ListChannels channels={gankListStore.state.channels} />
        )}
      </Container>
    </main>
  );
}
