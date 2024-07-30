import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  email: "",
  password: "",
  firstName: "",
  lastName: "",
  userName: "",
};

export const userSlice = createSlice({
  name: "user",
  initialState,
  reducers: {
    login: (state, action) => {
      fetch("http://localhost:3001/api/v1/user/login", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(action.payload),
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
          localStorage.setItem("token", token);
          window.location.href = "/user";
        })
        .catch((error) => {
          console.error("Erreur lors de la tentative de connexion :", error);
          alert("Une erreur s'est produite lors de la tentative de connexion.");
        });
    },
  },
});

export const { login } = userSlice.actions;

export default userSlice.reducer;
