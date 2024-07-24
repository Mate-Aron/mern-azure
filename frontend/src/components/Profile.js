import React from "react";
import '../App.css';
import { useAuthContext } from '../hooks/useAuthContext';
import { useUserData } from '../hooks/useUserData';

const Profile = () => {
    const { user: authUser } = useAuthContext();
    const { user, loading, error } = useUserData(authUser?.email);

    if (!authUser) {
        return <h2 className="profile-not-found"> A profil nem található. Jelentkezz be, vagy regisztrálj. </h2>;
    }

    if (loading) {
        return <p>Betöltés...</p>;
    }

    if (error) {
        return <p>{error}</p>;
    }

    if (!user) {
        return <p>Nem sükerült az adatok lekérése.</p>;
    }

    return (
        <div className="profile-container">
            <h2 className="profile-title">Profil adatok:</h2>
            <div className="profile-details">
                <p><strong>Jogosultság:</strong> {user.type}</p>
                <p><strong>Név:</strong> {user.name}</p>
                <p><strong>Email:</strong> {user.email}</p>
                <p><strong>Szavazott:</strong> {user.isvoted ? 'Igen' : 'Nem'}</p>
            </div>
        </div>
    );
};

export default Profile;
