import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { consultantService } from "../../../services";



function ViewConsultant() {
    const userId = localStorage.getItem("currentUser");
    const [consultant, setConsultant] = useState(null);

    useEffect(() => {
        consultantService.getById(userId).then((x) => setConsultant(x));
    }, []);

    return (
        <div className="mt-20 px-6 py-4">
            <div className="px-4 sm:px-0 text-center">
                <h2 className="text-3xl leading-9 font-extrabold text-gray-900">
                    Mon dossier consultant
                </h2>
                <p className="mt-1 text-sm leading-6 text-gray-500">
                    Informations relatives à mon dossier
                </p>
            </div>
            <Link to={`edit/${userId}`} className="bg-[#00BB7E] text-white font-bold py-2 px-4 rounded-full focus:outline-none focus:shadow-outline">
                Modifier mon dossier
            </Link>
            <div className="mt-6 border-t border-gray-100">
                <dl className="divide-y divide-gray-100">
                    <div className="px-4 py-6 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-0">
                        <dt className="text-sm font-medium leading-6 text-gray-900 capitalize">Nom</dt>
                        <dd className="mt-1 text-sm leading-6 text-gray-700 sm:col-span-2 sm:mt-0 capitalize">
                            {consultant?.user?.lastName}
                        </dd>
                    </div>
                    <div className="px-4 py-6 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-0">
                        <dt className="text-sm font-medium leading-6 text-gray-900 capitalize">Prénom</dt>
                        <dd className="mt-1 text-sm leading-6 text-gray-700 sm:col-span-2 sm:mt-0 capitalize">
                            {consultant?.user?.firstName}
                        </dd>
                    </div>
                    <div className="px-4 py-6 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-0">
                        <dt className="text-sm font-medium leading-6 text-gray-900">
                            Métier
                        </dt>
                        <dd className="mt-1 text-sm leading-6 text-gray-700 sm:col-span-2 sm:mt-0">
                            {consultant?.metier}
                        </dd>
                    </div>
                    <div className="px-4 py-6 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-0">
                        <dt className="text-sm font-medium leading-6 text-gray-900">
                            Secteur d'activité
                        </dt>
                        <dd className="mt-1 text-sm leading-6 text-gray-700 sm:col-span-2 sm:mt-0">
                            <span className="px-2 inline-flex text-xs leading-5 font-semibold rounded-full bg-gray-300 text-gray-800">
                                {consultant?.secteur}
                            </span>
                        </dd>
                    </div>
                    <div className="px-4 py-6 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-0">
                        <dt className="text-sm font-medium leading-6 text-gray-900">
                            Périmètre d'intervention
                        </dt>
                        <dd className="mt-1 text-sm leading-6 text-gray-700 sm:col-span-2 sm:mt-0">
                            {consultant?.perimetre}
                        </dd>
                    </div>
                    <div className="px-4 py-6 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-0">
                        <dt className="text-sm font-medium leading-6 text-gray-900">
                            Salaire annuel brut
                        </dt>
                        <dd className="mt-1 text-sm leading-6 text-gray-700 sm:col-span-2 sm:mt-0">
                            {consultant?.salaire} €
                        </dd>
                    </div>
                    <div className="px-4 py-6 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-0">
                        <dt className="text-sm font-medium leading-6 text-gray-900">
                            Entreprise actuelle
                        </dt>
                        <dd className="mt-1 text-sm leading-6 text-gray-700 sm:col-span-2 sm:mt-0 uppercase">
                            {consultant?.entreprise?.nom}
                        </dd>
                    </div>
                    <div className="px-4 py-6 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-0">
                        <dt className="text-sm font-medium leading-6 text-gray-900">
                            Mes compétences
                        </dt>
                        <dd className="mt-1 text-sm leading-6 text-gray-700 sm:col-span-2 sm:mt-0">
                            {consultant?.competences?.map((competence) => (
                                <span className="px-2 inline-flex text-xs leading-5 font-semibold rounded-full mx-1 bg-gray-300 text-gray-800">
                                    {competence}
                                </span>
                            ))}
                        </dd>
                    </div>
                    <div className="px-4 py-6 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-0">
                        <dt className="text-sm font-medium leading-6 text-gray-900">
                            Mes formations
                        </dt>
                        <dd className="mt-1 text-sm leading-6 text-gray-700 sm:col-span-2 sm:mt-0">
                            {consultant?.parcours?.map((parcours) => (
                                <div className="flex flex-col mb-6">
                                    <div className="flex justify-between w-full">
                                        <div className="flex items-center font-bold capitalize">
                                            {parcours?.titre}
                                        </div>
                                        <div className="flex items-center">
                                            <span className="px-2 inline-flex text-xs leading-5 font-semibold rounded-full mx-1 bg-gray-200 text-gray-600">
                                                Durée : {parcours?.duree} mois
                                            </span>
                                        </div>
                                    </div>
                                    <div className="text-xs leading-6 text-gray-400 sm:col-span-2 sm:mt-0 font-bold">
                                        {parcours?.etablissement}
                                    </div>
                                    <div>
                                        {parcours?.description}
                                    </div>
                                </div>
                            ))}
                        </dd>
                    </div>
                    <div className="px-4 py-6 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-0">
                        <dt className="text-sm font-medium leading-6 text-gray-900">
                            Mes expériences
                        </dt>
                        <dd className="mt-1 text-sm leading-6 text-gray-700 sm:col-span-2 sm:mt-0">
                            {consultant?.experiences?.map((experiences) => (
                                <div className="flex flex-col mb-6">
                                    <div className="flex justify-between w-full">
                                        <div className="flex items-center font-bold capitalize">
                                            {experiences?.titre}
                                        </div>
                                        <div className="flex items-center">
                                            <span className="px-2 inline-flex text-xs leading-5 font-semibold rounded-full mx-1 bg-gray-200 text-gray-600">
                                                Durée : {experiences?.duree} mois
                                            </span>
                                        </div>
                                    </div>
                                    <div className="text-xs leading-6 text-gray-400 sm:col-span-2 sm:mt-0 font-bold">
                                        {experiences?.entreprise}
                                    </div>
                                    <div>
                                        {experiences?.description}
                                    </div>
                                </div>
                            ))}
                        </dd>
                    </div>
                    <div className="px-4 py-6 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-0">
                        <dt className="text-sm font-medium leading-6 text-gray-900">Date de création</dt>
                        <dd className="mt-1 text-sm leading-6 text-gray-700 sm:col-span-2 sm:mt-0">
                            {Date(consultant?.createdAt).toString().substring(0, 24)}
                        </dd>
                    </div>
                    <div className="px-4 py-6 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-0">
                        <dt className="text-sm font-medium leading-6 text-gray-900">Derière date de modification</dt>
                        <dd className="mt-1 text-sm leading-6 text-gray-700 sm:col-span-2 sm:mt-0">
                            {Date(consultant?.updatedAt).toString().substring(0, 24)}
                        </dd>
                    </div>
                </dl>
            </div>
        </div>
    )
}

export { ViewConsultant };