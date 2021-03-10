import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import './League.css';
import pic from '../../images/image 4.png'

const League = ({ league }) => {

    const [details, setDetails] = useState({})

    useEffect(() => {
        fetch(`https://www.thesportsdb.com/api/v1/json/1/lookupleague.php?id=${league.idLeague}`)
        .then(res => res.json())
        .then(data => setDetails(data.leagues[0]))
    }, [])

    return (
        <div className="col-md-3 mt-5">
            <div className="rounded bg-white shadow p-5 h-100 text-center">
                <img className="img-fluid p-3" src={details.strBadge || pic} alt="Image not found"/>
                <h4>{league.strLeague}</h4>
                <p>Sports Type: {league.strSport}</p>
                <Link to={`league/${league.idLeague}`}><button className="custom-btn">Explore</button></Link>
            </div>
        </div>
    );
};

export default League;