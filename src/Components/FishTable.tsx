import { Table } from '@mantine/core';
import supabase from '../Utils/supabase';
import React from 'react';

export default function FishTable() {

    //retrieve all fish from the database using react hooks

    const [fish, setFish] = React.useState<any[]>([]);
    React.useEffect(() => {
        const fetchFish = async () => {
            const { data, error } = await supabase
                .rpc('get_caught_fish')
            setFish(data as any[]);
        }
        fetchFish();
    }, []);

    function handleRowClick(element: any) {
        console.log(element);
    }

    function sortByColumn(column: string)
    {
        console.log(column);
    }

    //create a table using the data from the database
    const rows = fish.map((element, index) => (
        <tr key={element.fish_id} onClick={() => handleRowClick(element)}>
            <td>{index + 1}</td>
            <td>{element.fish_id}</td>
            <td>{element.name}</td>
            <td>{element.fish_number}</td>
            <td>{element.rarity}</td>
            <td>{element.value}</td>
            <td>{(element.fish_weight) + ' lb'}</td>
            <td>{element.fish_length + ' in'}</td>
            <td>{element.original_owner}</td>
            <td>{element.current_owner}</td>
            <td>
                {element.shiny ? 'Yes' : 'No'}
            </td>
            <td>
                {element.locked ? 'Yes' : 'No'}
            </td>
        </tr>
    ));

    return (
        <Table withBorder withColumnBorders highlightOnHover captionSide='top'>
            <caption>{`All Fish as of ${new Date().toLocaleTimeString()} (${new Date().toDateString()})`}</caption>
            <thead>
                <tr>
                    <th onClick={() => sortByColumn('index')}>#</th>
                    <th>ID</th>
                    <th>Name</th>
                    <th>Fish Number</th>
                    <th>Rarity</th>
                    <th>Value</th>
                    <th>Weight</th>
                    <th>Length</th>
                    <th>Original Owner</th>
                    <th>Current Owner</th>
                    <th>Shiny</th>
                    <th>Locked</th>
                </tr>
            </thead>
            <tbody>{rows}</tbody>
        </Table>
    );
    
}