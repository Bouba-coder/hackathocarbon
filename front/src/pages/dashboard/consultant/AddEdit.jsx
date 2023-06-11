import { useParams, useNavigate, Link } from 'react-router-dom';
import { useForm, useFieldArray } from "react-hook-form";
import { useEffect, useState } from "react";
import { consultantService } from '../../../services';
import { entrepriseService } from '../../../services';

function AddEditConsultant() {
    const { id } = useParams();
    const navigate = useNavigate();
    const isAddMode = !id;

    const disponibilite = ["Immédiate", "1 mois", "2 mois", "3 mois", "4 mois"];
    const [entreprises, setEntreprises] = useState(null);

    const { register, handleSubmit, reset, setValue, formState, control } = useForm({
        defaultValues: {
            competences: isAddMode ? [] : [""],
            experiences: isAddMode ? [] : [{ titre: "", entreprise: "", description: "", duree: 0 }],
            parcours: isAddMode ? [] : [{ titre: "", etablissement: "", description: "", duree: 0 }],
        },
    });
    
    const { fields: competenceFields, append: appendCompetence, remove: removeCompetence } = useFieldArray({
        control,
        name: "competences",
    });
    
    const { fields: experienceFields, append: appendExperience, remove: removeExperience } = useFieldArray({
        control,
        name: "experiences",
    });

    const { fields: parcoursFields, append: appendParcours, remove: removeParcours } = useFieldArray({
        control,
        name: "parcours",
    });

    function onSubmit(data) {
        return isAddMode
            ? createConsultant(data)
            : updateConsultant(id, data);
    }

    function createConsultant(data) {
        return consultantService.create(data).then(() => {
            navigate("..");
        }).catch(console.error);
    }

    function updateConsultant(id, data) {
        return consultantService.update(id, data).then(() => {
            navigate("..");
        }).catch(console.error);
    }

    useEffect(() => {
        if (!isAddMode) {
            consultantService.getById(id).then((consultant) => {
                const fields = ["metier", "secteur", "disponibilite", "perimetre", "competences", "level", "salaire", "experiences", "parcours", "entrepriseId", "userId"];
                fields.forEach((field) => setValue(field, consultant[field]));
            });
        }

        entrepriseService.getAll().then((entreprises) => {
            setEntreprises(entreprises);
        });
    }, []);

    return (
        <form onSubmit={handleSubmit(onSubmit)} className="mt-20 px-8 py-6">
            {/* {JSON.stringify(formState)}   */}
            <h2 className="text-center text-3xl leading-9 font-extrabold text-gray-900">{isAddMode ? "Ajouter un consultant" : "Modifier un consultant"}</h2>
            <div>
                <div className="mb-4">
                    <label className="block text-gray-700 text-sm font-bold mb-2">Métier</label>
                    <input 
                        {...register("metier")} 
                        type="text" 
                        className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" 
                    />
                </div>
                <div className="mb-4">
                    <label className="block text-gray-700 text-sm font-bold mb-2">Secteur</label>
                    <input 
                        {...register("secteur")} 
                        type="text" 
                        className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                    />
                </div>
                <div className="mb-4">
                    <label className="block text-gray-700 text-sm font-bold mb-2">Disponibilité</label>
                    <select 
                        {...register("disponibilite")} 
                        className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                    >
                        {disponibilite.map((dispo) => (
                            <option key={dispo} value={dispo}>
                                {dispo}
                            </option>
                        ))}
                    </select>
                </div>
                <div className="mb-4">
                    <label className="block text-gray-700 text-sm font-bold mb-2">Périmètre</label>
                    <input 
                        {...register("perimetre")} 
                        type="text" 
                        className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                    />
                </div>
                <div className="mb-4">
                    <label className="block text-gray-700 text-sm font-bold mb-2">Compétences</label>
                    {competenceFields.map((field, index) => (
                        <div key={field.id}>
                        <input
                            {...register(`competences.${index}`)}
                            type="text"
                            defaultValue={field.value}
                            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                        />
                        {index >= 0 && (
                            <button 
                                className="bg-[#FF0000] text-xs text-white font-bold py-1 px-2 my-2 rounded-full focus:outline-none focus:shadow-outline"
                                type="button" 
                                onClick={() => removeCompetence(index)}>
                                Supprimer
                            </button>
                        )}
                        </div>
                    ))}
                    <button
                        className="bg-[#282B2A] text-sm text-white font-bold py-2 px-4 mr-1 rounded-full focus:outline-none focus:shadow-outline" 
                        type="button" 
                        onClick={() => appendCompetence("")}>
                        Ajouter une compétence
                    </button>
                </div>
                <div className="mb-4">
                    <label className="block text-gray-700 text-sm font-bold mb-2">Niveau</label>
                    <input 
                        {...register("level")} 
                        type="text"
                        className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                    />
                </div>
                <div className="mb-4">
                    <label className="block text-gray-700 text-sm font-bold mb-2">Salaire</label>
                    <input 
                        {...register("salaire")} 
                        type="text"
                        className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" 
                    />
                </div>
                <div className="mb-6">
                    <label className="block text-gray-700 text-sm font-bold mb-2">Mes expériences</label>
                    {experienceFields.map((field, index) => (
                        <div key={field.id}>
                            <h4 className="font-bold mb-4">Expérience {index + 1}</h4>
                            <div className="mb-4">
                                <label className="block text-gray-700 text-sm font-bold mb-2">
                                    Titre
                                </label>
                                <input
                                    {...register(`experiences.${index}.titre`)}
                                    type="text"
                                    defaultValue={field.titre}
                                    className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                                />
                            </div>
                            <div className="mb-4">
                                <label className="block text-gray-700 text-sm font-bold mb-2">
                                    Entreprise
                                </label>
                                <input
                                    {...register(`experiences.${index}.entreprise`)}
                                    type="text"
                                    defaultValue={field.entreprise}
                                    className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                                />
                            </div>
                            <div className="mb-4">
                                <label className="block text-gray-700 text-sm font-bold mb-2">
                                    Description
                                </label>
                                <input
                                    {...register(`experiences.${index}.description`)}
                                    type="text"
                                    defaultValue={field.description}
                                    className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                                />
                            </div>
                            <div className="mb-4">
                                <label className="block text-gray-700 text-sm font-bold mb-2">
                                    Durée
                                </label>
                                <input
                                    {...register(`experiences.${index}.duree`)}
                                    type="number"
                                    defaultValue={field.duree}
                                    className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                                />
                            </div>
                            {index >= 0 && (
                                <button
                                    className="bg-[#FF0000] text-xs text-white font-bold py-1 px-2 my-2 rounded-full focus:outline-none focus:shadow-outline" 
                                    type="button" 
                                    onClick={() => removeExperience(index)}
                                >
                                    Supprimer
                                </button>
                            )}
                        </div>
                    ))}
                    <button
                        className="bg-[#282B2A] text-sm text-white font-bold py-2 px-4 mr-1 rounded-full focus:outline-none focus:shadow-outline" 
                        type="button" 
                        onClick={() => appendExperience({ titre: "", entreprise: "", description: "", duree: 0 })}
                    >
                        Ajouter une expérience
                    </button>
                </div>
                <div className="mb-6">
                    <label className="block text-gray-700 text-sm font-bold mb-2">Mes parcours</label>
                    {parcoursFields.map((field, index) => (
                        <div key={field.id}>
                        <h3 className="font-bold mb-2">Parcours {index + 1}</h3>
                            <div className="mb-4">
                                <label className="block text-gray-700 text-sm font-bold mb-2">Titre</label>
                                <input
                                    {...register(`parcours.${index}.titre`)}
                                    type="text"
                                    defaultValue={field.titre}
                                    className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                                />
                            </div>
                            <div className="mb-4">
                                <label className="block text-gray-700 text-sm font-bold mb-2">Etablissement</label>
                                <input
                                    {...register(`parcours.${index}.etablissement`)}
                                    type="text"
                                    defaultValue={field.etablissement}
                                    className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                                />
                            </div>
                            <div className="mb-4">
                                <label className="block text-gray-700 text-sm font-bold mb-2">Description</label>
                                <textarea
                                    {...register(`parcours.${index}.description`)}
                                    defaultValue={field.description}
                                    className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                                />
                            </div>
                            <div className="mb-4">
                                <label className="block text-gray-700 text-sm font-bold mb-2">Durée</label>
                                <input
                                    {...register(`parcours.${index}.duree`)}
                                    type="number"
                                    defaultValue={field.duree}
                                    className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                                />
                            </div>
                        {index >= 0 && (
                        <button
                            className="bg-[#FF0000] text-xs text-white font-bold py-1 px-2 my-2 rounded-full focus:outline-none focus:shadow-outline" 
                            type="button" 
                            onClick={() => removeParcours(index)}
                        >
                            Supprimer
                        </button>
                        )}
                    </div>
                ))}
                <button
                    className="bg-[#282B2A] text-sm text-white font-bold py-2 px-4 mr-1 rounded-full focus:outline-none focus:shadow-outline" 
                    type="button" 
                    onClick={() => appendParcours({ titre: "", etablissement: "", description: "", duree: 0 })}
                >
                    Ajouter un parcours
                </button>
                </div>
                <div className="mb-4">
                    <label className="block text-gray-700 text-sm font-bold mb-2">Entreprise</label>
                    <select 
                        {...register("entrepriseId", { valueAsNumber: true })} 
                        className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                    >
                        <option value=""></option>
                        {entreprises && entreprises.map(entreprise =>
                            <option key={entreprise.id} value={parseInt(entreprise.id)}>{entreprise.nom}</option>
                        )}
                    </select>
                </div>
            </div>
            <div className="my-8">
                <button 
                    type="submit" 
                    disabled={formState.isSubmitting} 
                    className="bg-[#00BB7E] text-white font-bold py-2 px-4 mr-1 rounded-full focus:outline-none focus:shadow-outline"
                >
                    {formState.isSubmitting && <span className="spinner-border spinner-border-sm mr-1"></span>}
                    Enregistrer
                </button>
                <Link to=".." className="font-bold py-2 px-4 mr-4 rounded-full focus:outline-none focus:shadow-outline">Annuler</Link>
            </div>
        </form>
    );
}

export { AddEditConsultant };