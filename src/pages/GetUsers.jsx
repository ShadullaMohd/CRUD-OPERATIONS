import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import "./style.css";

const GetUsers = () => {
    let [state, setState] = useState([]);
    let [head, setHead] = useState([]);
    let navigate = useNavigate();

    useEffect(() => {
        axios.get("http://localhost:2024/data")
            .then(res => {
                setState(res.data);
                setHead(Object.keys(res.data[0]).slice(0, 4));
            })
            .catch(err => {
                console.error("Error fetching users:", err);
            });
    }, [state]);  

    function deletes(id) {
        axios.delete("http://localhost:2024/data/" + id)
            .then(() => {
                navigate("/");
            })
            .catch(err => {
                console.error("Error deleting user:", err);
            });
    }

    return (
        <div>
            <h1>CRUD OPERATIONS</h1>
             <p style={{ color: 'red' }}></p> 
            <table border="1" id='table' cellSpacing="9px">
                <caption>
                    CRUD OPERATIONS <button onClick={() => navigate("/add")}>Add+</button>
                </caption>
                <thead>
                    <tr>
                        {head.map((x, i) => <th key={i}>{x}</th>)}
                        <th>Operations</th>
                    </tr>
                </thead>
                <tbody>
                    {state.map((x) => (
                        <tr key={x.id}>
                            <td>{x.id}</td>
                            <td>{x.name}</td>
                            <td>{x.username}</td>
                            <td>{x.email}</td>
                            <td>
                                <button onClick={() => navigate(`/edit/${x.id}`)}>Edit</button>
                                <button onClick={() => deletes(x.id)}>Delete</button>
                            </td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
    );
}

export default GetUsers;
