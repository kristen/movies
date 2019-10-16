import React from "react";
import {Cast} from "../MovieDetails";
import './index.css';

const CastMember: React.FC<Cast> = ({profile_path, character, name}) => {
    return (
        <div>
            <div className="cast-member">
                {profile_path ?
                    <img className="profile-image"
                         alt=""
                         src={`https://image.tmdb.org/t/p/w138_and_h175_bestv2/${profile_path}`} /> :
                    <div className="profile-image"/>}
                <div className="bottom">
                    {name ? <div className="actor-name">{name}</div> :
                        <div className="actor-name skeleton-actor-name"/>}
                    {character ? <div className="character-name">{character}</div> :
                        <div className="character-name skeleton-character-name"/>}
                </div>
            </div>
        </div>
    )
};

export default CastMember;
