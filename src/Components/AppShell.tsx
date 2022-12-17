import { useState } from 'react';
import {
    AppShell,
    Navbar,
    Header,
    Footer,
    Aside,
    Text,
    MediaQuery,
    Burger,
    useMantineTheme,
    Grid,
} from '@mantine/core';
import LightDarkButton from './LightDarkButton';
import FishTable from './FishTable';
import SearchBar from './SearchBar';

export default function AppShellLoader() {
    const theme = useMantineTheme();
    const [opened, setOpened] = useState(false);
    return (
        <AppShell
            styles={{
                main: {
                    background: theme.colorScheme === 'dark' ? theme.colors.dark[8] : theme.colors.gray[0],
                },
            }}
            navbarOffsetBreakpoint="sm"
            asideOffsetBreakpoint="sm"
            navbar={
                <Navbar p="md" hiddenBreakpoint="sm" hidden={!opened} width={{ sm: 200, lg: 300 }}>
                    <Text>placeholder</Text>
                </Navbar>
            }
            /*
            aside={
                <MediaQuery smallerThan="sm" styles={{ display: 'none' }}>
                    <Aside p="md" hiddenBreakpoint="sm" width={{ sm: 200, lg: 300 }}>
                        <Text>Application sidebar</Text>
                    </Aside>
                </MediaQuery>
            }
            */
            footer={
                <Footer height={60} p="md">
                    another placeholder
                </Footer>
            }
            header={
                <Header height={{ base: 50, md: 70 }} p="md">
                    <div style={{ display: 'flex', justifyContent: "space-between" }}>
                        <MediaQuery largerThan="sm" styles={{ display: 'none' }}>
                            <Burger
                                opened={opened}
                                onClick={() => setOpened((o) => !o)}
                                size="sm"
                                color={theme.colors.gray[6]}
                                mr="xl"
                            />
                        </MediaQuery>
                        <Text
                            variant='gradient'
                            gradient={{ from: 'blue', to: 'indigo' }}
                        >MollyBot - Developer Tool</Text>
                        <SearchBar />
                        <LightDarkButton />

                    </div>
                </Header>
            }
        >
            <FishTable />
        </AppShell>
    );
}