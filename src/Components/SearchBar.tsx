import React from 'react';
import { TextInput } from '@mantine/core';
import { IconSearch } from '@tabler/icons';

function SearchBar() {
    return (
        <div className="App">
            <TextInput
                placeholder="Search"
                icon={<IconSearch size={18} />}
                radius="sm"
                size="md"
                style={{ width: 450 }}
                pr="xl"
            />
        </div>
    );
}

export default SearchBar;