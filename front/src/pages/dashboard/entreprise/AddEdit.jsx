import { entrepriseService } from '../../../services'; 
import { useParams, useNavigate, Link } from 'react-router-dom';
import { useForm } from "react-hook-form";
import { useEffect } from "react";

function AddEditEntreprise() {
    const { id } = useParams();
    const navigate = useNavigate();

    const isAddMode = !id;

    const { register, handleSubmit, reset, setValue, formState } = useForm();

    function onSubmit(data) {
        return isAddMode
            ? createEntreprise(data)
            : updateEntreprise(id, data);
    }

    function createEntreprise(data) {
        return entrepriseService.create(data).then(() => {
            navigate("..");
        }).catch(console.error);
    }

    function updateEntreprise(id, data) {
        return entrepriseService.update(id, data).then(() => {
            navigate("..");
        }).catch(console.error);
    }

    useEffect(() => {
        if (!isAddMode) {
            entrepriseService.getById(id).then((entreprise) => {
                const fields = ["nom", "contact"];
                fields.forEach((field) => setValue(field, entreprise[field]));
            });
        }
    }, []);

    return (
        <form onSubmit={handleSubmit(onSubmit)} className="mt-20 px-8 py-6">
            <h2 className="text-center text-3xl leading-9 font-extrabold text-gray-900">{isAddMode ? "Ajouter une entreprise" : "Modifier une entreprise"}</h2>
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
                    <label className="block text-gray-700 text-sm font-bold mb-2">Contact</label>
                    <input 
                        {...register("contact")} 
                        type="text" 
                        className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                    />
                </div>
            </div>
            <div className="mt-6">
                <button type="submit" disabled={formState.isSubmitting} className="bg-[#00BB7E] text-white font-bold py-2 px-4 rounded-full focus:outline-none focus:shadow-outline">
                    {formState.isSubmitting && <span className="spinner-border spinner-border-sm mr-1"></span>}
                    Enregistrer
                </button>
                {/* <button onClick={() => reset()} type="button" disabled={formState.isSubmitting} className="btn btn-secondary">
                    Réinitialiser
                </button> */}
                <Link to=".." className="font-bold py-2 px-4 mr-4 rounded-full focus:outline-none focus:shadow-outline">Annuler</Link>
            </div>
        </form>
    );
}

export { AddEditEntreprise };