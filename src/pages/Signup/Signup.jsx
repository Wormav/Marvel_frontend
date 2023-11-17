import React, { useContext, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import axios from "../../config/axios.config";
import Cookies from "js-cookie";
import { AuthContext } from "../../context/user.context";
import { Container } from "../authPage.syles";

export default function Signup() {
  const [formData, setFormData] = useState({
    email: "",
    username: "",
    password: "",
  });
  const [alert, setAlert] = useState("");

  const { handleSignin } = useContext(AuthContext);

  const navigate = useNavigate();

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevFormData) => ({
      ...prevFormData,
      [name]: value,
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setAlert("");

    if (!formData.email || !formData.password) {
      setAlert("Veuillez remplir tous les champs.");
      return;
    }

    try {
      const response = await axios.post("/api/user/signup", formData);

      const { token } = response.data;

      Cookies.set("token", token, { expires: 7 });

      handleSignin();
      navigate("/");
    } catch (error) {
      console.error("Erreur lors de la requête:", error);

      if (
        error.response &&
        error.response.data &&
        error.response.data.message
      ) {
        setAlert(error.response.data.message);
      } else {
        setAlert(
          "Une erreur s'est produite lors de la connexion. Veuillez réessayer."
        );
      }
    }
  };

  return (
    <Container>
      <h2>S'inscrire</h2>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          placeholder="Pseudo"
          name="username"
          value={formData.username}
          onChange={handleChange}
        />
        <input
          type="email"
          placeholder="Adresse email"
          name="email"
          value={formData.email}
          onChange={handleChange}
        />
        <input
          type="password"
          placeholder="Mot de passe"
          name="password"
          value={formData.password}
          onChange={handleChange}
        />
        <button type="submit">Se connecter</button>
        {alert && <p className="alert">{alert}</p>}
        <Link className="link" to={"/signup"}>
          Tu as déjà un compte ? Connecte-toi !
        </Link>
      </form>
    </Container>
  );
}
