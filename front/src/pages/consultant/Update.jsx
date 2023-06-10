import MyProfile from "../../components/Consultant/forms/MyProfile";
import { useEffect, useState } from "react";

const UpdateConsultant = () => {
    const [isFormValue, setFormValue] = useState({
        metier: null,
        secteur: null,
        disponibilite: null,
        perimetre: null,
        competences: [],
        level: null,
        salaire: null,
        experiences: [],
        parcours: [],
        entreprise: null,
        userId: Number(localStorage.getItem("currentUser")),
    });

    useEffect(() => {
        const userId = localStorage.getItem("currentUser");
        const fetchUser = async () => {
        try {
            const response = await fetch(`http://localhost:3000/consultant/${userId}`);
            if (!response.ok) {
            throw new Error("Failed to fetch user data");
            }
            const data = await response.json();
            setFormValue(data);
        } catch (error) {
            console.error(error);
        }
        };
        fetchUser();
    }, []);

    const handleSubmit = (values) => {
        const userId = localStorage.getItem("currentUser");
        const req = fetch(`http://localhost:3000/consultant/${userId}`, {
        method: "PUT",
        headers: {
            "Content-Type": "application/json",
        },
        body: JSON.stringify(values),
        });
        console.log(values);    
        console.log(req);
    };

    return (
        <div className="min-h-screen mt-24">
            <MyProfile
                initialValues={isFormValue}
                onSubmit={handleSubmit}
            />
        </div>
    );
};

export default UpdateConsultant;
