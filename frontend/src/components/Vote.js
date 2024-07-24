import React, { useState } from "react";
import '../App.css';
import { useAuthContext } from '../hooks/useAuthContext'
import { useTeams } from "../hooks/useTeam";
import TeamsList from "../models/teamLists2";
import { useUserData } from '../hooks/useUserData';

const Vote = () => {
    const { teams, loading, error } = useTeams();
    const [selectedTeam, setSelectedTeam] = useState("");
    const { user: authUser } = useAuthContext();
    const { user, loadingUser, errorUser } = useUserData(authUser?.email);

    if (loadingUser) {
        return <p>Betöltés...</p>;
    }

    if (errorUser) {
        return <p>{error}</p>;
    }

    const handleVote = async (e) => {
        e.preventDefault();
        if (!selectedTeam) {
            alert("Válassz egy csapatot!");
            return;
        }

        if(user.isvoted){
            alert("Már szavaztál!")
            return;
        }
        try {
            const response = await fetch(`/api/teams/${selectedTeam}`, {
                method: 'PATCH',
                headers: {
                    'Content-Type':'application/json',
                    'Authorization': `Bearer ${authUser.token}`,
                },
                body: JSON.stringify({ name: selectedTeam }),
            });

            if (!response.ok) {
                throw Error('Network response was not ok');
            }

            if(response.ok){
                setSelectedTeam("");
                alert("Sikeres szavazás!")
                //console.log({user})
            }

            const response2 = await fetch(`/api/user/voted/${user.email}`, {
                method: 'PATCH',
                headers: {
                    'Content-Type':'application/json',
                    'Authorization': `Bearer ${authUser.token}`,
                },
                body: JSON.stringify({ email: user.email }),
            });
            if (!response2.ok) {
                throw Error('Network response2 was not ok');
            }

        } catch (error) {
            console.error("Hiba történt a szavazás során:", error);
        }
    };

    return (
        <div>
            { !loading && user ? (
                <div className="vote-container2">
                    <h3>Csapatok szavazása</h3>
                    <TeamsList teams={teams} />
                    <form onSubmit={handleVote} className="vote-form">
                        <label htmlFor="team-select">Válassz csapatot:</label>
                        <select
                            id="team-select"
                            value={selectedTeam}
                            onChange={(e) => setSelectedTeam(e.target.value)}
                        >
                            <option value="">Válassz...</option>
                            {teams.sort((a, b) => a.name.localeCompare(b.name)).map((team) => (
                                <option key={team._id} value={team.name}>
                                    {team.name}
                                </option>
                            ))}
                        </select>
                        <button type="submit">Szavazás</button>
                    </form>
                </div>
            ) : (
                <h2 className="profile-not-found">A szavazáshoz jelentkezz be, vagy regisztrálj.</h2>
            )}
            {loading && <p>Betöltés...</p>}
            {error && <p>{error}</p>}
        </div>
    );
}

export default Vote;
