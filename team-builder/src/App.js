import React, { useState } from "react";
import Form from "./components/Form";
import Team from "./components/Team";
import "./App.css";

function App() {
  const [team, setTeam] = useState([
    {
      name: "",
      email: "",
      role: ""
    }
  ]);

  const memberToEdit = mem => {};

  const addTeam = member => {
    const newMember = {
      name: member.name,
      email: member.email,
      role: member.role
    };
    setTeam([...team, newMember]);
  };
  return (
    <div className="App">
      <Form addMemberFn={addTeam} />
      <h1>Team Members:</h1>
      <Team teamList={team} toEditFn={memberToEdit} />
    </div>
  );
}

export default App;
