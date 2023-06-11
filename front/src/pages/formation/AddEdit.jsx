import { useParams, useNavigate, Link } from 'react-router-dom';
import { useForm } from "react-hook-form";
import { useEffect } from "react";
import { formationService } from "../../services";

function AddEditFormation() {
    const { id } = useParams();
    const navigate = useNavigate();

    const isAddMode = !id;

    const { register, handleSubmit, reset, setValue, formState } = useForm();

    function onSubmit(data) {
        return isAddMode
            ? createFormation(data)
            : updateFormation(id, data);
    }

    function createFormation(data) {
        return formationService.create(data).then(() => {
            navigate("/formations");
        }).catch(console.error);
    }

    function updateFormation(id, data) {
        return formationService.update(id, data).then(() => {
            navigate("/formations");
        }).catch(console.error);
    }

    useEffect(() => {
        if (!isAddMode) {
            formationService.getById(id).then((formation) => {
                const fields = ["nom", "niveau", "description", "duree"];
                fields.forEach((field) => setValue(field, formation[field]));
            });
        }
    }, []);

    return (
        <form onSubmit={handleSubmit(onSubmit)} className="mt-20 px-8 py-6">
            <h2 className="text-center text-3xl leading-9 font-extrabold text-gray-900">{isAddMode ? "Ajouter une formation" : "Modifier une formation"}</h2>
            <div className="mb-6">
                <div className="mb-4">
                    <label className="block text-gray-700 text-sm font-bold mb-2">Nom</label>
                    <input 
                        {...register("nom")} 
                        type="text" 
                        className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" 
                    />
                </div>
                <div className="mb-4">
                    <label className="block text-gray-700 text-sm font-bold mb-2">Niveau</label>
                    <input 
                        {...register("niveau")} 
                        type="text" 
                        className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" 
                    />
                </div>
                <div className="mb-4">
                    <label className="block text-gray-700 text-sm font-bold mb-2">Description</label>
                    <input 
                        {...register("description")} 
                        type="text" 
                        className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" 
                    />
                </div>
                <div className="mb-4">
                    <label className="block text-gray-700 text-sm font-bold mb-2">Durée</label>
                    <input 
                        {...register("duree")} 
                        type="number" 
                        className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" 
                    />
                </div>
            </div>
            <div className="mt-6">
                <button type="submit" disabled={formState.isSubmitting} className="bg-[#00BB7E] text-white font-bold py-2 px-4 rounded-full focus:outline-none focus:shadow-outline">
                    {formState.isSubmitting && <span className="spinner-border spinner-border-sm mr-1"></span>}
                    Enregistrer
                </button>
                <Link to="/formations" className="font-bold py-2 px-4 mr-4 rounded-full focus:outline-none focus:shadow-outline">Annuler</Link>
            </div>
        </form>
    );
}

export { AddEditFormation };