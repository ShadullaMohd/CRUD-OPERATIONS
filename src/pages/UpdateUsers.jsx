import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import "./style.css";

const UpdateUsers = () => {
    let [values, setValues] = useState({ name: "", email: "" }); 
    let navigate = useNavigate();
    let { id } = useParams();

    let change = (e) => {
        setValues({ ...values, [e.target.name]: e.target.value });
    };

    useEffect(() => {
        axios.get("http://localhost:2024/data/" + id)
            .then(x => setValues(x.data))
            .catch(err => {
                console.error("Error fetching user data:", err);
            });
    }, [id]);

    function update(e) {
        e.preventDefault();
        axios.put("http://localhost:2024/data/" + id, values)
            .then(() => {
                navigate("/");
            })
            .catch(err => {
                console.error("Error updating user data:", err);
            });
    }

    return (
        <>
            <div className='add-div'>
                <h1>You can make some Changes</h1>
                 <p style={{ color: 'red' }}></p> 
                <form>
                    <label>Enter Name</label>
                    <input type='text' name='name' value={values.name} onChange={change}></input>
                    <br></br><br></br>
                    <label>Enter email</label>
                    <input type='email' name='email' value={values.email} onChange={change}></input>
                    <br></br><br></br>
                    <button onClick={update}>UPDATE User</button>
                </form>
            </div>
        </>
    );
}

export default UpdateUsers;
