import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

const EmployeeDetail = () => {
  const { id } = useParams();
  const [user, setUser] = useState({});

  useEffect(() => {
    const getUser = async () => {
      let serialized = await fetch(
        `https://jsonplaceholder.typicode.com/users/${id}`
      );
      let data = await serialized.json();
      setUser(data);
    };
    getUser();
  }, []);

  return (
    <div>
      <p>Selected ID: {id}</p>
      <p>Name : {user.name}</p>
      <p>Email : {user.email}</p>
      <p>Phone : {user.phone} </p>
      {user.address && (
        <dl>
          <dt>Address :</dt>
          <dd>
            {user.address.street || "Street 123"},{" "}
            {user.address.suite || "APT 122"}
          </dd>
          <dd>
            {user.address.city || "Jakarta"}, {user.address.zipcode || "20212"}
          </dd>
        </dl>
      )}
    </div>
  );
};

export default EmployeeDetail;
