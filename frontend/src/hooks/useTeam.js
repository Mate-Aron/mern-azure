import { useState, useEffect } from "react";

export const useTeams = () => {
    const [teams, setTeams] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);

    useEffect(() => {
        const getTeams = async () => {
            try {
                let result = await fetch('/api/teams');
                if (!result.ok) {
                    throw Error('Nem sikerült a kapcsolat');
                }
                result = await result.json();
                setTeams(result);
            } catch (error) {
                setError("Hiba történt az adatok lekérésekor.");
                console.error(error);
            } finally {
                setLoading(false);
            }
        };

        getTeams();
    }, []);

    return { teams, loading, error };
};
