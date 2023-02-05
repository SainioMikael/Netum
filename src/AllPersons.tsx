import React, { useState } from 'react';
import { IPerson } from './types';
import { v4 as uuidv4 } from 'uuid';

export const AllPersons = (props: {
    person: IPerson, index: number, handleEditRow: (id: number) => void,
    handleDeleteButton: (id: string) => void
}) => {
    const { person, index, handleDeleteButton, handleEditRow } = props;

    return (<>
        <td>{person.fName}</td>
        <td>{person.lName}</td>
        <td>{person.age}</td>
        <td>
            <button onClick={() => handleEditRow(index)}>Edit</button>
            <button className="delete-button" onClick={() => handleDeleteButton(person.id)}>Delete</button>
        </td>
    </>

    )
}
