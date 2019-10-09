import React, { useState } from "react";

const Team = props => {
  const handleClick = e => {
    e.preventDefault();
    props.toEditFn();
  };
  return (
    <div className="team-list">
      {props.teamList.map(team => {
        return (
          <div classname="team-member" key={team.id}>
            <i class="fa fa-edit" onClick={handleClick} />
            <h1>{team.name}</h1>
            <p> {team.email}</p>
            <p>{team.emailErr}</p>
            <p> {team.role}</p>
          </div>
        );
      })}
    </div>
  );
};

export default Team;
