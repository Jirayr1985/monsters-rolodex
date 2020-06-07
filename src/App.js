import React, {useEffect, useState} from 'react';
import './App.css';
import {CardList} from "./components/card-list/card-list.component";
import {SearchBox} from "./components/search-box/search-box.component";

function App() {

    const [monsters, setMonsters] = useState([]);
    const [search, setSearch] = useState('');

    useEffect(() => {
        fetch('https://jsonplaceholder.typicode.com/users')
            .then(response => response.json())
            .then(users => setMonsters(users))
    }, []);

    const filteredMonsters = monsters.filter(monster => monster.name.toLowerCase().includes(search.toLowerCase()));

    const handleChange = (e) => {
        setSearch(e.target.value)
    }

    return (
        <div className="App">
            <h1>Monsters Rolodex</h1>
            <SearchBox
                placeholder='search monsters'
                handleChange={handleChange}
            />
            <CardList monsters={filteredMonsters}/>
        </div>
    );
}

export default App;
