import { useState, useEffect } from "react";

export const useUserData = (email) => {
    const [user, setUser] = useState();
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);

    useEffect(() => {
        const getOneUser = async () => {
            try {
                let result = await fetch(`/api/user/${email}`);
                if (!result.ok) {
                    throw Error('Nem sikerült a kapcsolat');
                }
                result = await result.json();
                setUser(result);
            } catch (error) {
                setError("Hiba történt az adatok lekérésekor.");
                console.error(error);
            } finally {
                setLoading(false);
            }
        };

        getOneUser();
    }, [email]);

    return { user, loading, error };
};