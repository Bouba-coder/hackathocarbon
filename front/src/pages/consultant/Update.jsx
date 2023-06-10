import MyProfile from "../../components/Consultant/forms/MyProfile";
import { useEffect, useState } from "react";
import useConsultant from "../../hooks/useConsultant";

const UpdateConsultant = () => {
    const initValues = {
        metier: null,
        secteur: null,
        disponibilite: null,
        perimetre: null,
        competences: [],
        level: null,
        salaire: null,
        experiences: [],
        parcours: [],
        entrepriseId: null,
        userId: Number(localStorage.getItem("currentUser")),
    };
    const [isFormValue, setFormValue] = useState(initValues);

    const { item, updateItem } = useConsultant(`http://localhost:3000/consultant`);
    console.log("item", item);

    useEffect(() => {
        if (item) {
            setFormValue({
                metier: item.metier,
                secteur: item.secteur,
                disponibilite: item.disponibilite,
                perimetre: item.perimetre,
                competences: item.competences,
                level: item.level,
                salaire: item.salaire,
                experiences: item.experiences,
                parcours: item.parcours,
                entrepriseId: item.entrepriseId,
                userId: item.userId,
            });
        }
    }, [item]);

    const handleSubmit = (values) => {
        const userId = localStorage.getItem("currentUser");
        updateItem(userId, values);
        console.log("patch", values);
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
