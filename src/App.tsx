import React, { useState } from 'react';
import { v4 as uuidv4 } from 'uuid'
import './App.css'
import { EditPerson } from './EditPerson';
import { IPerson } from './types';
import { AllPersons } from './AllPersons';

const App = () => {
  const [persons, setPersons] = useState<IPerson[]>([]);
  const handleAddRow = () => {
    setPersons([...persons,
      {
        id: uuidv4(),
        fName: "",
        lName: "",
        age: 1,
        isEditing: true,
      },
    ]);
  };

  const [sortOrder, setSortOrder] = useState<"asc" | "desc">("asc");
  const handleSortClick = (sortType: "fName" | "lName" | "age") => {setSortOrder(sortOrder === "asc" ? "desc" : "asc");
  persons.sort((a, b) => {if (sortType === "fName" || sortType === "lName") {
  if (sortOrder === "asc") {
    return a[sortType].localeCompare(b[sortType]);
  }
  else {
    return b[sortType].localeCompare(a[sortType]);
  }
  } else {
  if (sortOrder === "asc") {
    return a[sortType] - b[sortType];
  }
  else 
    return b[sortType] - a[sortType];
  }
  });
  };

  const handleDeleteButton = (id: string) => {
    setPersons(persons.filter((person) => person.id !== id))
  }

  const handleEditRow = (index: number) => {
    const newPersons = [...persons];
    newPersons[index].isEditing = true
    setPersons(newPersons)
  }

  const handleSaveRow = (index: number) => {
    const newPersons = [...persons];
    newPersons[index].isEditing = false
    setPersons(newPersons)
  }

  const handleUpdateRow = (index: number, fName: string, lName: string, age: number) => {
    const newPersons = [...persons];
    newPersons[index].fName = fName.charAt(0).toUpperCase() + fName.slice(1);
    newPersons[index].lName = lName.charAt(0).toUpperCase() + lName.slice(1);
    newPersons[index].age = age;
    setPersons(newPersons);
  };

  return (
    <div className="App">
      <table>
          <thead>
            <tr>
              <th onClick={() => handleSortClick("fName")}>First name</th>
              <th onClick={() => handleSortClick("lName")}>Last name</th>
              <th onClick={() => handleSortClick("age")}>Age</th>
              <th>Edit</th>
            </tr>
          </thead>
          <tbody>
            {persons.map((person, index) => (
              <tr key={person.id}>
                {person.isEditing ? (
                  <EditPerson
                    person={person}
                    index={index}
                    handleSaveRow={handleSaveRow}
                    handleUpdateRow={handleUpdateRow}
                  />
                ) : (
                  <AllPersons
                    person={person}
                    index={index}
                    handleEditRow={handleEditRow}
                    handleDeleteButton={handleDeleteButton}
                  />
                )}
              </tr>
            ))}
          </tbody> 
          <button onClick={handleAddRow}>Add Row</button>
        </table>
    </div>
  );
};

export default App;