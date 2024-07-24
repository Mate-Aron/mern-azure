import React from "react";
import '../App.css';

const TeamsList = ({ teams }) => {
    const sortedTeams = [...teams].sort((a, b) => a.name.localeCompare(b.name));

    return (
        <ul className="teams-list2">
            {sortedTeams.map((team) => (
                <li key={team._id} className="team-item2">
                    <span className="team-name2">{team.name}</span>
                </li>
            ))}
        </ul>
    );
};

export default TeamsList;
