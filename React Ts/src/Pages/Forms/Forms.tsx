import React, { useState } from "react";
import "./style.scss";

type CredType = {
  username: string;
  password: string;
};
const initialState: CredType = { username: "", password: "" };
const Forms = () => {
  const [cred, setcred] = useState<CredType>(initialState);

  const handleForm = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const formData = new FormData(e.target as HTMLFormElement);
    const data = Object.fromEntries(formData);
    console.log("uncontrolled data", data);
  };
  return (
    <section className="forms-concept">
      <div className="controll-form">
        <div className="box">
          <h1>Controll Form</h1>
          <label htmlFor="username">username</label>
          <input
            type="text"
            name="username"
            id="username"
            required
            value={cred.username}
            onChange={(e) => setcred({ ...cred, username: e.target.value })}
          />

          <label htmlFor="password">password</label>
          <input
            type="password"
            name="password"
            id="password"
            required
            value={cred.password}
            onChange={(e) => setcred({ ...cred, password: e.target.value })}
          />
          <button onClick={() => console.log("controlled Data", cred)}>
            Login
          </button>
        </div>
      </div>
      <div className="uncontroll-form">
        <h1>UnControll Form</h1>
        <form onSubmit={handleForm} className="box">
          <label htmlFor="username">username</label>
          <input type="text" required name="username" id="username" />
          <label htmlFor="password">password</label>
          <input type="password" required name="password" id="password" />
          <button type="submit">Login</button>
        </form>
      </div>
    </section>
  );
};

export default Forms;
