import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";

import { userService } from "../../services"; 

function ListUser() {
    const [users, setUsers] = useState(null);

    useEffect(() => {
        userService.getAll().then((x) => setUsers(x));
    }, []);

    function deleteUser(id) {
        setUsers(
            users.map((x) => {
                if (x.id === id) {
                    x.isDeleting = true;
                }
                return x;
            })
        );
        userService.remove(id).then(() => {
            setUsers((users) =>
                users.filter((x) => x.id !== id)
            );
        });
    }

    return (
        <div className="mt-20 px-6 py-4">
            <h1 className="text-center text-3xl leading-9 font-extrabold text-gray-900">
                Liste des utilisateurs
            </h1>
            <Link to="add" className="bg-[#00BB7E] text-white font-bold py-2 px-4 rounded-full focus:outline-none focus:shadow-outline">
                Ajouter un utilisateur
            </Link>
            <table className="w-full text-sm text-left my-6">
                <thead>
                    <tr>
                        <th scope="col" className="px-6 py-3">Email</th>
                        <th scope="col" className="px-6 py-3">Nom</th>
                        <th scope="col" className="px-6 py-3">Prénom</th>
                        <th scope="col" className="px-6 py-3">Rôle</th>
                        <th scope="col" className="px-6 py-3"></th>
                    </tr>
                </thead>
                <tbody>
                    {users && users.map((user) => (
                        <tr key={user.id}>
                            <td className="px-6 py-4">{user.email}</td>
                            <td className="px-6 py-4">{user.firstName}</td>
                            <td className="px-6 py-4">{user.lastName}</td>
                            <td className="px-6 py-4">{user.role}</td>
                            <td className="px-6 py-4 text-right space-x-2">
                                <Link to={`edit/${user.id}`} className="font-medium text-blue-600">Modifier</Link>
                                <button onClick={() => deleteUser(user.id)} className="font-medium text-red-600" disabled={user.isDeleting}>
                                    {user.isDeleting ? (
                                        <span>Loading...</span>
                                    ) : (
                                        <span>Supprimer</span>
                                    )}
                                </button>
                            </td>
                        </tr>
                    ))}
                    {!users &&
                        <tr>    
                            <td colSpan="4" className="text-center">
                                <div className="flex align-center">
                                    <svg aria-hidden="true" className="w-8 h-8 mr-2 text-gray-200 animate-spin dark:text-gray-600 fill-blue-600" viewBox="0 0 100 101" fill="none" xmlns="http://www.w3.org/2000/svg">
                                        <path d="M100 50.5908C100 78.2051 77.6142 100.591 50 100.591C22.3858 100.591 0 78.2051 0 50.5908C0 22.9766 22.3858 0.59082 50 0.59082C77.6142 0.59082 100 22.9766 100 50.5908ZM9.08144 50.5908C9.08144 73.1895 27.4013 91.5094 50 91.5094C72.5987 91.5094 90.9186 73.1895 90.9186 50.5908C90.9186 27.9921 72.5987 9.67226 50 9.67226C27.4013 9.67226 9.08144 27.9921 9.08144 50.5908Z" fill="currentColor"/>
                                        <path d="M93.9676 39.0409C96.393 38.4038 97.8624 35.9116 97.0079 33.5539C95.2932 28.8227 92.871 24.3692 89.8167 20.348C85.8452 15.1192 80.8826 10.7238 75.2124 7.41289C69.5422 4.10194 63.2754 1.94025 56.7698 1.05124C51.7666 0.367541 46.6976 0.446843 41.7345 1.27873C39.2613 1.69328 37.813 4.19778 38.4501 6.62326C39.0873 9.04874 41.5694 10.4717 44.0505 10.1071C47.8511 9.54855 51.7191 9.52689 55.5402 10.0491C60.8642 10.7766 65.9928 12.5457 70.6331 15.2552C75.2735 17.9648 79.3347 21.5619 82.5849 25.841C84.9175 28.9121 86.7997 32.2913 88.1811 35.8758C89.083 38.2158 91.5421 39.6781 93.9676 39.0409Z" fill="currentFill"/>
                                    </svg>
                                </div>
                            </td>
                        </tr>   
                    }
                    {users && !users.length &&
                        <tr>
                            <td colSpan="4" className="text-center">
                                <div className="p-2">Aucun utilisateur à afficher</div>
                            </td>
                        </tr>
                    }
                </tbody>
            </table>
        </div>
    );
}

export { ListUser };