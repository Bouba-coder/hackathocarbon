import MyProfile from "../../components/Consultant/forms/MyProfile";
import { useState } from "react";

const CreateConsultant = () => {
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

    const handleSubmit = (values) => {
        const req = fetch(`http://localhost:3000/consultant`, {
        method: "POST",
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

export default CreateConsultant;
