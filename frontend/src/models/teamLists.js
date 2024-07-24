import React from "react";
import '../App.css';
import magyar from '../assets/magyar.png';
import nemet from '../assets/nemet.png';
import spanyol from '../assets/spanyol.png';
import lengyel from '../assets/lengyel.png';
import olasz from '../assets/olasz.svg';
import francia from '../assets/francia.svg';
import horvat from '../assets/horvat.png';
import portugal from '../assets/portugal.png';
import belga from '../assets/belga.png';
import anglia from '../assets/anglia.png';
import roman from '../assets/roman.png';
import holland from '../assets/holland.png';
import svajc from '../assets/svajc.png';
import dania from '../assets/dania.png';
import szlovak from '../assets/szlovak.png';
import ausztria from '../assets/ausztria.png';
import torok from '../assets/torok.png';
import cseh from '../assets/cseho.svg';
import szerb from '../assets/szerb.png';
import alban from '../assets/alban.png';
import szloven from '../assets/szloven.jpg';
import ukrajna from '../assets/ukrajna.png';
import skocia from '../assets/skocia.png';
import gruz from '../assets/gruz.png';

const cImages = [
    magyar, spanyol, nemet, lengyel, olasz, francia, horvat, portugal, belga, anglia, roman, holland, svajc,
    dania, szlovak, ausztria, torok, cseh, szerb, alban, szloven, ukrajna, skocia, gruz
];

const TeamsList = ({ teams }) => {
    const sortedTeams = [...teams].sort((a, b) => b.votes - a.votes);

    return (
        <ul className="teams-list">
            {sortedTeams.map((item, index) => (
                <li key={index} className="team-item">
                    <span className="team-name">{item.name}</span>
                    <span className="team-votes">{item.votes}</span>
                    <span className="team-other"><img className="pictures" src={cImages[item.cIndex]} alt="kep" /></span>
                </li>
            ))}
        </ul>
    );
};

export default TeamsList;
