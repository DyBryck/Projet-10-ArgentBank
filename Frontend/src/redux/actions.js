import { login } from "./userSlice";

export const loginUser = (body, checked, navigate, dispatch) => {
  fetch("http://localhost:3001/api/v1/user/login", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(body),
  })
    .then((res) => {
      if (!res.ok) {
        throw new Error("Erreur lors de la connexion : " + res.statusText);
      }
      return res.json();
    })
    .then((data) => {
      const token = data.body.token;
      if (!token) {
        throw new Error("Token manquant dans la réponse");
      }
      getUser(token, checked, navigate, dispatch);
    })
    .catch((error) => {
      console.error("Erreur lors de la tentative de connexion :", error);
      alert("Une erreur s'est produite lors de la tentative de connexion.");
    });
};

export const getUser = (token, checked, navigate, dispatch) => {
  fetch("http://localhost:3001/api/v1/user/profile", {
    method: "GET",
    headers: {
      "Content-Type": "application/json",
      Authorization: "Bearer " + token,
    },
    body: null,
  })
    .then((res) => {
      if (!res.ok) {
        throw new Error("Erreur lors de la connexion : " + res.statusText);
      }
      return res.json();
    })
    .then((data) => {
      if (!data) {
        throw new Error("Erreur dans la récupération des données");
      }
      dispatch(login({ ...data.body, token }));
      checked && localStorage.setItem("token", token);
      navigate("/user");
    })
    .catch((error) => {
      console.error("Erreur lors de la tentative de connexion :", error);
      alert("Une erreur s'est produite lors de la tentative de connexion.");
    });
};
