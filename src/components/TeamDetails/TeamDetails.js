import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router';
import DetailsHeader from '../DetailsHeader/DetailsHeader';
import malePic from '../../images/male.png';
import femalePic from '../../images/female.png';
import './TeamDetails.css';

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
            <div style={{ backgroundColor: '#0e0a2a' }}>
                <DetailsHeader badge={details.strBadge} />
                <div className="container text-white">
                    <div className="top-part p-5 m-5 rounded">
                        <div className="row">
                            <div className="col-md-6">
                                <h2>{details.strLeague}</h2>
                                <h2>{details.intFormedYear}</h2>
                                <h2>{details.strCountry}</h2>
                                <h2>{details.strSport}</h2>
                                <h2>{details.strGender}</h2>
                            </div>
                            <div className="col-md-6">
                                <img src={details?.strGender ? malePic : femalePic} className="img-fluid" />
                            </div>
                        </div>
                    </div>
                    <div className="details-text">
                        <p>{details.strDescriptionEN}</p>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default TeamDetails;