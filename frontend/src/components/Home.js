import React from "react";
import '../App.css';
import { useTeams } from "../hooks/useTeam";
import TeamsList from "../models/teamLists";

const Home = () => {
    const { teams, loading, error } = useTeams();

    return (
        <div className="teams-container">
            <h3 className="teams-h3">Csapatok ranglista</h3>
            {loading && <p>Betöltés...</p>}
            {error && <p>{error}</p>}
            {!loading && teams.length > 0 && <TeamsList teams={teams} />}
        </div>
    );
};

export default Home;
