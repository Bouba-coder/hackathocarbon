import { useEffect } from "react";
import MyProfile from "../components/Consultant/forms/MyProfile";
import useAuth from "../hooks/useAuth";
import useFetch from "../hooks/useFetch";

const Home = () => {
  const user = useAuth();
  const formValues = {
    metier: "",
    secteur: "",
    disponibilite: "",
    perimetre: "",
    competences: "",
    level: "",
    salaire: "",
    experiences: [],
    parcours: [],
    entreprise: "",
    userId: user
  };

  useEffect(() => {
    const { data } = useFetch(`http://localhost:3000/consultant/${user.id}`);
    console.log(data);
  }, []);

  const handleSubmit = (values) => {
    const { data } = useFetch(`http://localhost:3000/consultant/${user.id}`, {
      method: "PUT",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(values),
    });
    console.log(data);    
  };

  return <div className="min-h-screen mt-24">
    <h1>Home</h1>
  <MyProfile
    initialValues={formValues}
    onSubmit={handleSubmit}
  /></div>;
};

export default Home;
