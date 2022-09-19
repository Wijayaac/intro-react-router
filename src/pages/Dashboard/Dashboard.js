import React from "react";
import PropTypes from "prop-types";

import { EmployeeCard } from "../../components/Cards";

import style from "./dashboard.module.css";

const Dashboard = (props) => {
  const { employee } = props;

  return (
    <div>
      <h1>Employee Dashboard</h1>
      <div className={style.wrapper}>
        {employee.map((person, index) => (
          <EmployeeCard key={index} person={person} />
        ))}
      </div>
    </div>
  );
};

Dashboard.propTypes = {
  employee: PropTypes.array,
};

export default Dashboard;
