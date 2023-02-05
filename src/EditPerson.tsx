import React, { useState } from 'react';
import { IPerson } from './types';
import { v4 as uuidv4 } from 'uuid';

export const EditPerson = (props: {
  person: IPerson, index: number,
  handleSaveRow: (index: number) => void,
  handleUpdateRow: (index: number, fName: string, lName: string, age: number) => void
}) => {
  const { person, index, handleSaveRow, handleUpdateRow } = props;
  return (
    <>
      <td>
        <input
          type="text"
          value={person.fName}
          onChange={(e) => handleUpdateRow(index, e.target.value, person.lName, person.age)}
        />
      </td>
      <td>
        <input
          type="text"
          value={person.lName}
          onChange={(e) => handleUpdateRow(index, person.fName, e.target.value, person.age)}
        />
      </td>
      <td>
        <input
          type="number"
          value={person.age}
          onChange={(e) => handleUpdateRow(index, person.fName, person.lName, Number(e.target.value))}
        />
      </td>
      <td>
        <button onClick={() => handleSaveRow(index)}>Save</button>
      </td>
    </>
  );
};