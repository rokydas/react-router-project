import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router';
import DetailsHeader from '../DetailsHeader/DetailsHeader';

const TeamDetails = () => {

    const { id } = useParams();

    const [details, setDetails] = useState({})

    useEffect(() => {
        fetch(`https://www.thesportsdb.com/api/v1/json/1/lookupleague.php?id=${id}`)
        .then(res => res.json())
        .then(data => setDetails(data.leagues[0]))
    }, [])

    return (
        <div>
            <DetailsHeader badge={details.strBadge}/>
            {details.strLeague}
            {details.strCountry}
        </div>
    );
};

export default TeamDetails;