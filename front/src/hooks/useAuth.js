import { useState, useEffect } from 'react';

const useAuth = () => {
    const [user, setUser] = useState(null);
    const headers = new Headers({
        'Content-Type': 'application/json',
        'Authorization': `Bearer ${localStorage.getItem('token')}`,
    });

    useEffect(() => {
        const fetchUser = async () => {
        try {
            const response = await fetch('http://localhost:3000/auth/profile', { headers });
            const data = await response.json();
            setUser(data);
            localStorage.setItem("currentUser", data.id);
            console.log(data);
        } catch (error) {
            console.error('Erreur lors de la récupération de l\'utilisateur courant', error);
        }
        };

        fetchUser();
    }, []);

    return user;
};

export default useAuth;
