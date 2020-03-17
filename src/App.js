import React, { useState } from "react";
import Enrollment from "./Enrollment";
import DriverList from "./DriverList";
import UserHeader from "./UserHeader";
import { Row, Container } from "reactstrap";

const initialDrivers = [
  {
    name: "Lukas Ferreira Machado",
    phone: "61998649461",
    birthdate: "10/08/1994",
    cnh: "13153135750",
    cnhtipo: "C",
    cpf: "04729180100",
  },
  {
    name: "Lukas Ferreira Machado",
    phone: "61998649461",
    birthdate: "10/08/1994",
    cnh: "13153135750",
    cnhtipo: "C",
    cpf: "04729180100",
  },
  {
    name: "Lukas Ferreira Machado",
    phone: "61998649461",
    birthdate: "10/08/1994",
    cnh: "13153135750",
    cnhtipo: "C",
    cpf: "04729180100",
  },
  {
    name: "Lukas Ferreira Machado",
    phone: "61998649461",
    birthdate: "10/08/1994",
    cnh: "13153135750",
    cnhtipo: "C",
    cpf: "04729180100",
  },
  {
    name: "Lukas Ferreira Machado",
    phone: "61998649461",
    birthdate: "10/08/1994",
    cnh: "13153135750",
    cnhtipo: "C",
    cpf: "04729180100",
  },
  {
    name: "Lukas Ferreira Rogiski Machado",
    phone: "61998649461",
    birthdate: "10/08/1994",
    cnh: "13153135750",
    cnhtipo: "C",
    cpf: "04729180100",
  },
];

function App() {
  const [drivers, setDrivers] = useState(initialDrivers);

  const [driverUpdateValue, setDriverUpdateValue] = useState(null);

  const [driverUpdateValueIndex, setDriverUpdateValueIndex] = useState(0);


  function setUpdatedDrivers(updatedValue, index) {
    let newArr = [...drivers]; // copying the old datas array

    newArr[index] = updatedValue; // replace e.target.value with whatever you want to change it to

    setDrivers(newArr);
  }

  function handleSetDrivers(newDrivers) {
    setDrivers([
      ...drivers,
      {
        ...newDrivers
      }
    ]);
  }

  function removeElementAtIndex(index) {
    setDrivers(drivers.filter((item, id) => id !== index));
  }

  function handleSetDriverUpdateValue(updateDriver) {
    setDriverUpdateValue(updateDriver);
  }

  return (
    <div style={{overflowX: 'hidden'}}>
      <UserHeader />

      <Container className="mt--7" fluid>
        <Enrollment
          drivers={drivers}
          handleSetDrivers={handleSetDrivers}
          driverUpdateValue={driverUpdateValue}
          handleSetDriverUpdateValue={handleSetDriverUpdateValue}
          driverUpdateValueIndex={driverUpdateValueIndex}
          setUpdatedDrivers={setUpdatedDrivers}
        />
      </Container>

      <Row className="my-5">
        <div className="col">
          <DriverList
            drivers={drivers}
            removeElementAtIndex={removeElementAtIndex}
            handleSetDriverUpdateValue={handleSetDriverUpdateValue}
            setDriverUpdateValueIndex={setDriverUpdateValueIndex}
          />
        </div>
      </Row>
    </div>
  );
}

export default App;
