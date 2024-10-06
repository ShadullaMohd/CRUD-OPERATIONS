import axios from 'axios';
import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import "./style.css";

const AddUsers = () => {
    let [values, setValues] = useState({ name: "", email: "", username: "" });
    let navigate = useNavigate();

    let change = (e) => {
        setValues({ ...values, [e.target.name]: e.target.value });
    };

    function addUsers(e) {
        e.preventDefault();
        axios.post("http://localhost:2024/data", values)
            .then(() => {
                navigate("/");
            })
            .catch((err) => {
                console.error("Error adding user:", err);
            });
    }

    return (
        <div className='add-div'>
            <h1>Add User Details</h1>
             <p style={{ color: 'red' }}></p>
            <form>
                <label>Enter Name </label> &nbsp; &nbsp; &nbsp; &nbsp;
                <input type='text' name='name' value={values.name} onChange={change}></input>
                <br></br><br></br>
                <label>Enter UserName</label>
                <input type='text' name='username' value={values.username} onChange={change}></input>
                <br></br><br></br>
                <label>Enter email</label>&nbsp; &nbsp; &nbsp; &nbsp;&nbsp;&nbsp;
                <input type='email' name='email' value={values.email} onChange={change}></input>
                <br></br><br></br>

                <button onClick={addUsers}>ADD Users</button>
            </form>
        </div>
    );
}

export default AddUsers;
