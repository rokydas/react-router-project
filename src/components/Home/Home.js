import React, { useEffect, useState } from 'react';
import League from '../League/League';

const Home = () => {

    const [leagues, setLeagues] = useState([]);
    let first15;

    useEffect(() => {
        fetch('https://www.thesportsdb.com/api/v1/json/1/all_leagues.php')
            .then(res => res.json())
            .then(data => {
                const leagues = data.leagues;
                for (let i = 0; i < leagues.length; i++) {
                    const randomIndex = Math.floor(Math.random() * 530);
                    const temp = leagues[i];
                    leagues[i] = leagues[randomIndex];
                    leagues[randomIndex] = temp;
                }
                setLeagues(leagues.slice(0, 16))
            })

        console.log(leagues.length);
    }, [])

    return (
        <div style={{backgroundColor: '#0e0a2a'}}>
            <div className="container">
                <div className="row">
                    {
                        leagues && leagues.map(league => <League league={league} />)
                    }
                </div>
            </div>
        </div>
    );
};

export default Home;