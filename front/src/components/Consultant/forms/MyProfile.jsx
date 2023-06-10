import React, { useState, useEffect } from 'react';
import useForm from '../../../hooks/useForm';

function MyProfile({ initialValues, onSubmit }) {
    const { values, handleChange, handleSubmit } = useForm(initialValues, onSubmit);
    const [data, setData] = useState([]);

    useEffect(() => {
        const fetchData = async () => {
            const response = await fetch(`http://localhost:3000/entreprises`);
            const data = await response.json();
            setData(data);
        };
        fetchData();
    }, []);

    return (
        <div>
            {JSON.stringify(values)}
            <h2 className="text-center text-3xl leading-9 font-extrabold text-gray-900">
                Mon dossier candidat
            </h2>
            <form onSubmit={handleSubmit} className="px-8 py-6">
                    <div className="mb-4">
                        <label className="block text-gray-700 text-sm font-bold mb-2">
                            Métier
                        </label>
                        <input 
                            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" 
                            id="metier"
                            type="text"
                            name="metier"
                            value={values.metier}
                            onChange={handleChange}
                        />
                    </div>
                    <div className="mb-4">
                        <label className="block text-gray-700 text-sm font-bold mb-2">
                            Secteur
                        </label>
                        <input
                            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                            id="secteur"
                            type="text"
                            name="secteur"
                            value={values.secteur}
                            onChange={handleChange}
                        />
                    </div>
                    <div className="mb-4">
                        <label className="block text-gray-700 text-sm font-bold mb-2">
                            Disponibilité
                        </label>
                        <select
                            id="disponibilite"
                            name="disponibilite"
                            value={values.disponibilite}
                            onChange={handleChange} 
                            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                        >
                            <option value="Immédiate">Immédiate</option>
                            <option value="1 mois">1 mois</option>
                            <option value="2 mois">2 mois</option>
                            <option value="3 mois">3 mois</option>
                        </select>
                    </div>
                    <div className="mb-4">
                        <label className="block text-gray-700 text-sm font-bold mb-2">
                            Périmètre
                        </label>
                        <input
                            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                            id="perimetre"
                            type="text"
                            name="perimetre"
                            value={values.perimetre}
                            onChange={handleChange}
                        />
                    </div>
                    <div className="mb-4">
                        <label className="block text-gray-700 text-sm font-bold mb-2">
                            Entreprise
                        </label>
                        <select 
                            id="entreprise"
                            name="entrepriseId"
                            value={values.entreprise}
                            onChange={handleChange} 
                            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                        >
                            {data.map((entreprise) => (
                                <option key={entreprise.id} value={entreprise.id}>{entreprise.nom}</option>
                            ))}
                        </select>
                    </div>
                    <div className="mb-4">
                        <label className="block text-gray-700 text-sm font-bold mb-2">
                            Mes compétences
                        </label>
                        {values.competences.map((competence, index) => (
                            <div key={index}>
                                <div className="mb-4">
                                    <label className="block text-gray-700 text-sm font-bold mb-2">
                                        Compétence {index + 1}
                                    </label>
                                    <input
                                        className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                                        id={`competence-${index}`}
                                        type="text"
                                        name={`competences[${index}]`}
                                        value={competence}
                                        onChange={handleChange}
                                    />
                                </div>
                            </div>
                        ))}
                        <button
                            className="bg-[#282B2A] text-sm text-white font-bold py-2 px-4 mr-1 rounded-full focus:outline-none focus:shadow-outline"
                            type="button"
                            onClick={() =>
                                handleChange({
                                target: {
                                    name: 'competences',
                                    value: [...values.competences, ''],
                                },
                                })
                            }
                        >
                            Ajouter une compétence
                        </button>
                        {values.competences.length > 0 && (
                        <button
                            className="bg-[#FF0000] text-sm text-white font-bold py-2 px-4 rounded-full focus:outline-none focus:shadow-outline"
                            type="button"
                            onClick={() =>
                            handleChange({
                                target: {
                                name: 'competences',
                                value: values.competences.slice(0, -1),
                                },
                            })
                            }
                        >
                            Supprimer
                        </button>
                        )}

                    </div>
                    <div className="mb-4">
                        <label className="block text-gray-700 text-sm font-bold mb-2">
                            Niveau
                        </label>
                        <input
                            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                            id="level"
                            type="text"
                            name="level"
                            value={values.level}
                            onChange={handleChange}
                        />
                    </div>
                    <div className="mb-4">
                        <label className="block text-gray-700 text-sm font-bold mb-2">
                            Salaire 
                        </label>
                        <input
                            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                            id="salaire"
                            type="text"
                            name="salaire"
                            value={values.salaire}
                            onChange={handleChange}
                        />
                    </div>
                    <div className="mb-6">
                        <label className="block text-gray-700 text-sm font-bold mb-2">
                            Mes expériences
                        </label>
                        {values.experiences.map((experience, index) => (
                            <div key={index}>
                                <h4 className="font-bold mb-4">Expérience {index + 1}</h4>
                                <div className="mb-4">
                                    <label className="block text-gray-700 text-sm font-bold mb-2">
                                        Titre
                                    </label>
                                    <input
                                        className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                                        id={`titre-${index}`}
                                        type="text"
                                        name={`experiences[${index}].titre`}
                                        value={experience.titre}
                                        onChange={handleChange}
                                    />
                                </div>
                                <div className="mb-4">
                                    <label className="block text-gray-700 text-sm font-bold mb-2">
                                        Entreprise
                                    </label>
                                    <input
                                        className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                                        id={`entreprise-${index}`}
                                        type="text"
                                        name={`experiences[${index}].entreprise`}
                                        value={experience.entreprise}
                                        onChange={handleChange}
                                    />
                                </div>
                                <div className="mb-4">
                                    <label className="block text-gray-700 text-sm font-bold mb-2">
                                        Description
                                    </label>
                                    <input
                                        className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                                        id={`description-${index}`}
                                        type="text"
                                        name={`experiences[${index}].description`}
                                        value={experience.description}
                                        onChange={handleChange}
                                    />
                                </div>
                                <div className="mb-4">
                                    <label className="block text-gray-700 text-sm font-bold mb-2">
                                        Durée
                                    </label>
                                    <input
                                        className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                                        id={`duree-${index}`}
                                        type="number"
                                        name={`experiences[${index}].duree`}
                                        value={experience.duree}
                                        onChange={handleChange}
                                    />
                                </div>
                            </div>
                            ))}
                            <button
                                className="bg-[#282B2A] text-sm text-white font-bold py-2 px-4 mr-1 rounded-full focus:outline-none focus:shadow-outline"
                                type="button"
                                onClick={() =>
                                    handleChange({
                                    target: {
                                        name: 'experiences',
                                        value: [
                                        ...values.experiences,
                                        {
                                            titre: '',
                                            entreprise: '',
                                            description: '',
                                            duree: 0,
                                        },
                                        ],
                                    },
                                    })
                                }
                            >
                                Ajouter une expérience
                            </button>
                            {values.experiences.length > 0 && (
                                <button
                                    className="bg-[#FF0000] text-sm text-white font-bold py-2 px-4 rounded-full focus:outline-none focus:shadow-outline"
                                    type="button"
                                    onClick={() =>
                                    handleChange({
                                        target: {
                                        name: 'experiences',
                                        value: values.experiences.slice(0, -1),
                                        },
                                    })
                                    }
                                >
                                    Supprimer
                                </button>
                            )}
                    </div>
                    <div className="mb-6">
                        <label className="block text-gray-700 text-sm font-bold mb-2">
                            Mes parcours
                        </label>
                        {values.parcours.map((parcours, index) => (
                            <div key={index}>
                                <h3 className="font-bold mb-2">Parcours {index + 1}</h3>
                                <div className="mb-4">
                                    <label className="block text-gray-700 text-sm font-bold mb-2">
                                        Titre
                                    </label>
                                    <input
                                        className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                                        id={`titre-${index}`}
                                        type="text"
                                        name={`titre-${index}`}
                                        value={parcours.titre}
                                        onChange={handleChange}
                                    />
                                </div>
                                <div className="mb-4">
                                    <label className="block text-gray-700 text-sm font-bold mb-2">
                                        Etablissement
                                    </label>
                                    <input
                                        className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                                        id={`etablissement-${index}`}
                                        type="text"
                                        name={`etablissement-${index}`}
                                        value={parcours.etablissement}
                                        onChange={handleChange}
                                    />
                                </div>
                                <div className="mb-4">
                                    <label className="block text-gray-700 text-sm font-bold mb-2">
                                        Description
                                    </label>
                                    <textarea
                                        className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                                        id={`description-${index}`}
                                        type="text"
                                        name={`description-${index}`}
                                        value={parcours.description}
                                        onChange={handleChange}
                                    />
                                </div>
                                <div className="mb-4">
                                    <label className="block text-gray-700 text-sm font-bold mb-2">
                                        Durée
                                    </label>
                                    <input
                                        className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                                        id={`duree-${index}`}
                                        type="number"
                                        name={`duree-${index}`}
                                        value={parcours.duree}
                                        onChange={handleChange}
                                    />
                                </div>
                            </div>
                        ))}
                        <button
                            className="bg-[#282B2A] text-sm text-white font-bold py-2 px-4 mr-1 rounded-full focus:outline-none focus:shadow-outline"
                            type="button"
                            onClick={() =>
                            handleChange({
                                target: {
                                name: 'parcours',
                                value: [
                                    ...values.parcours,
                                    {
                                    titre: '',
                                    etablissement: '',
                                    description: '',
                                    duree: 0,
                                    },
                                ],
                                },
                            })
                            }
                        >
                            Ajouter un parcours
                        </button>
                        {values.parcours.length > 0 && (
                            <button
                                className="bg-[#FF0000] text-sm text-white font-bold py-2 px-4 rounded-full focus:outline-none focus:shadow-outline"
                                type="button"
                                onClick={() =>
                                    handleChange({
                                        target: {
                                            name: 'parcours',
                                            value: values.parcours.slice(0, -1),
                                        },
                                    })
                                }
                            >
                                Supprimer
                            </button>
                        )}
                    </div>
                    <div className="flex items-center justify-between">
                        <button 
                            className="bg-[#00BB7E] text-white font-bold py-2 px-4 rounded-full focus:outline-none focus:shadow-outline" 
                            type="submit"
                        >
                            Envoyer
                        </button>
                    </div>
                </form>
        </div>
    )
}

export default MyProfile