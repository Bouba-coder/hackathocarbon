import { useParams, useNavigate, Link } from 'react-router-dom';
import { useForm } from "react-hook-form";
import { useEffect } from "react";
import { userService } from "../../services";

function AddEditUser() {
    const { id } = useParams();
    const navigate = useNavigate();
    const role = ["CONSULTANT", "ADMIN", "RH"];

    const isAddMode = !id;

    const { register, handleSubmit, reset, setValue, formState } = useForm();

    function onSubmit(data) {
        return isAddMode
            ? createUser(data)
            : updateUser(id, data);
    }

    function createUser(data) {
        return userService.create(data).then(() => {
            navigate("/users");
        }).catch(console.error);
    }

    function updateUser(id, data) {
        return userService.update(id, data).then(() => {
            navigate("/users");
        }).catch(console.error);
    }

    useEffect(() => {
        if (!isAddMode) {
            userService.getById(id).then((user) => {
                const fields = ["firstName", "lastName", "email", "password", "role"];
                fields.forEach((field) => setValue(field, user[field]));
            });
        }
    }, []);

    return (
        <form onSubmit={handleSubmit(onSubmit)} className="mt-20 px-8 py-6">
            <h2 className="text-center text-3xl leading-9 font-extrabold text-gray-900">{isAddMode ? "Ajouter un utilisateur" : "Modifier un utilisateur"}</h2>
            <div className="mb-6">
                <div className="mb-4">
                    <label className="block text-gray-700 text-sm font-bold mb-2">Prénom</label>
                    <input 
                        {...register("firstName")} 
                        type="text" 
                        className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                    />
                </div>
                <div className="mb-4">
                    <label className="block text-gray-700 text-sm font-bold mb-2">Nom</label>
                    <input 
                        {...register("lastName")} 
                        type="text" 
                        className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                    />
                </div>
                <div className="mb-4">
                    <label className="block text-gray-700 text-sm font-bold mb-2">Email</label>
                    <input 
                        {...register("email")} 
                        type="text" 
                        className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" 
                    />
                </div>
                <div className="mb-4">
                    <label className="block text-gray-700 text-sm font-bold mb-2">Password</label>
                    <input 
                        {...register("password")} 
                        type="password" 
                        className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" 
                    />
                </div>
                <div className="mb-4">
                    <label className="block text-gray-700 text-sm font-bold mb-2">Role</label>
                    <select 
                        {...register("role")} 
                        className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" 
                    >
                        {role.map((role, index) => (
                            <option key={index} value={role}>{role}</option>
                        ))}
                    </select>
                </div>
            </div>
            <div className="mt-6">
                <button type="submit" disabled={formState.isSubmitting} className="bg-[#00BB7E] text-white font-bold py-2 px-4 rounded-full focus:outline-none focus:shadow-outline">
                    {formState.isSubmitting && <span className="spinner-border spinner-border-sm mr-1"></span>}
                    Enregistrer
                </button>
                <Link to="/users" className="font-bold py-2 px-4 mr-4 rounded-full focus:outline-none focus:shadow-outline">Annuler</Link>
            </div>
        </form>
    );
}

export { AddEditUser };