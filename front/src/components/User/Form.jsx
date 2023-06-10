import useForm from "../../hooks/useForm";

export default function UserForm({ initialValues, onSubmit }) {
    const { values, handleChange, handleSubmit } = useForm(initialValues, onSubmit);

    return (
        <div>
            {JSON.stringify(values)}
            <h2 className="text-center text-3xl leading-9 font-extrabold text-gray-900">
                Mon profil
            </h2>
            <form onSubmit={handleSubmit} className="px-8 py-6">
                <div className="mb-4">
                    <label className="block text-gray-700 text-sm font-bold mb-2">
                        Email
                    </label>
                    <input
                        className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                        id="email"
                        type="text"
                        name="email"
                        value={values.email}
                        onChange={handleChange}/>
                </div>
                <div className="mb-4">
                    <label className="block text-gray-700 text-sm font-bold mb-2">
                        Prénom
                    </label>
                    <input
                        className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                        id="firstName"
                        type="text"
                        name="firstName"
                        value={values.firstName}
                        onChange={handleChange}/>
                </div>
                <div className="mb-4">
                    <label className="block text-gray-700 text-sm font-bold mb-2">
                        Nom
                    </label>
                    <input
                        className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                        id="lastName"
                        type="text"
                        name="lastName"
                        value={values.lastName}
                        onChange={handleChange}/>
                </div>
            </form>
        </div>
    )
}