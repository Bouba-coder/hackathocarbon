import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";

import { userService } from "../../services"; 

function ViewUser() {
    const userId = localStorage.getItem("currentUser");
    const [user, setUser] = useState(null);

    useEffect(() => {
        userService.getById(userId).then((x) => setUser(x));
    }, []);

    return (
        <div className="mt-20 px-6 py-4">
            <div className="px-4 sm:px-0 text-center">
                <h2 className="text-3xl leading-9 font-extrabold text-gray-900">
                    Mon profil
                </h2>
                <p className="mt-1 text-sm leading-6 text-gray-500">
                    Informations relatives à mon compte
                </p>
            </div>
            <Link to="add" className="bg-[#00BB7E] text-white font-bold py-2 px-4 rounded-full focus:outline-none focus:shadow-outline">
                Modifier mon profil
            </Link>
            <div className="mt-6 border-t border-gray-100">
                <dl className="divide-y divide-gray-100">
                    <div className="px-4 py-6 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-0">
                        <dt className="text-sm font-medium leading-6 text-gray-900 capitalize">Nom</dt>
                        <dd className="mt-1 text-sm leading-6 text-gray-700 sm:col-span-2 sm:mt-0 capitalize">
                            {user?.lastName}
                        </dd>
                    </div>
                    <div className="px-4 py-6 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-0">
                        <dt className="text-sm font-medium leading-6 text-gray-900 capitalize">Prénom</dt>
                        <dd className="mt-1 text-sm leading-6 text-gray-700 sm:col-span-2 sm:mt-0 capitalize">
                            {user?.firstName}
                        </dd>
                    </div>
                    <div className="px-4 py-6 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-0">
                        <dt className="text-sm font-medium leading-6 text-gray-900">
                            Adresse email
                        </dt>
                        <dd className="mt-1 text-sm leading-6 text-gray-700 sm:col-span-2 sm:mt-0">
                            {user?.email}
                        </dd>
                    </div>
                    <div className="px-4 py-6 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-0">
                        <dt className="text-sm font-medium leading-6 text-gray-900">Rôle</dt>
                        <dd className="mt-1 text-sm leading-6 text-gray-700 sm:col-span-2 sm:mt-0">
                            <span className="px-2 inline-flex text-xs leading-5 font-semibold rounded-full bg-green-100 text-green-800">
                                {user?.role}
                            </span>
                        </dd>
                    </div>
                    <div className="px-4 py-6 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-0">
                        <dt className="text-sm font-medium leading-6 text-gray-900">Date de création</dt>
                        <dd className="mt-1 text-sm leading-6 text-gray-700 sm:col-span-2 sm:mt-0">
                            {Date(user?.createdAt).toString().substring(0, 24)}
                        </dd>
                    </div>
                    <div className="px-4 py-6 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-0">
                        <dt className="text-sm font-medium leading-6 text-gray-900">Derière date de modification</dt>
                        <dd className="mt-1 text-sm leading-6 text-gray-700 sm:col-span-2 sm:mt-0">
                            {Date(user?.updatedAt).toString().substring(0, 24)}
                        </dd>
                    </div>
                </dl>
            </div>
        </div>
    )
}

export { ViewUser };