import React from "react";
import { Link } from "react-router-dom";

import style from "./employee.module.css";
const EmployeeCard = (props) => {
  const { person } = props;
  return (
    <div className={style.item}>
      <p>{person.name}</p>
      <p>Employee tag: {person.id}</p>
      <a href={`mailto:${person.email}`}>{person.email}</a>
      <p>Role:{person.company.role}</p>
      <p>Bio : {person.company.catchPhrase}</p>

      <div>
        <Link to={`/employee/${person.id}`}>Details</Link>
      </div>
    </div>
  );
};

export default EmployeeCard;
