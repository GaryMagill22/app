import React, { useState } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';



const UserForm = () => {
    // setting state for each input
    const [firstName, setFirstname] = useState("");
    const [lastName, setLastname] = useState("");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [confirmPassword, setConfirmPassword] = useState("");
    // ===========================================================
    const [nameError, setnameError] = useState("");
    const [emailError, setemailError] = useState("");
    const [passwordError, setPasswordError] = useState("");
    const [confirmPasswordError, setConfirmPasswordError] = useState("");


    // const createUser = (e) => {
    //     e.preventDefault();

    //     const newUser = { firstName, lastName, email, password };
    //     setFirstname("");
    //     setLastname("");
    //     setEmail("");
    //     setPassword("");


    // };

    // first Name validations // 
    const handleFirstName = (e) => {
        setFirstname(e.target.value);
        if (e.target.value.length < 2) {
            setnameError("The field must be at least 2 characters");
        } else {
            setnameError("");
        }
    };

    // Last Name validations // 

    const handleLastName = (e) => {
        setLastname(e.target.value);
        if (e.target.value.length < 2) {
            setnameError("The field must be at least 2 characters long");
        } else {
            setnameError("");
        }
    };


    // Email Validations// 
    const handleEmail = (e) => {
        setEmail(e.target.value);
        if (e.target.value.length < 5) {
            setemailError("The field must be at least 5 characters long");
        } else {
            setemailError("");
        }
    };


    // Password Validations //
    const handlePassword = (e) => {
        setPassword(e.target.value);
        if (e.target.value.length < 8) {
            setPasswordError("Passwords must be atleast 8 characters long");
        }
        else {
            setPasswordError("");
        }
    };

    // Confirm Password Validations

    const handleConfirmPassword = (e) => {
        setConfirmPassword(e.target.value);
        if (e.target.value !== password) {
            setConfirmPasswordError("Passwords must match")
        }
        else {
            setConfirmPasswordError("");
        }
    };

    return (
        <>
            <h1>Please Fill Out Form</h1>

            <div className="card" style={{ maxWidth: '700px', margin: '0 auto' }}>
                <div className="card-body">
                    <form>
                        <div className="mb-3">
                            <label htmlFor="firstName" className="form-label">First Name:</label>
                            <input type="text" className="form-control" id="firstName" value={firstName} onChange={handleFirstName} />
                            {<p className="text-danger">{nameError}</p>}
                        </div>
                        <div className="mb-3">
                            <label htmlFor="lastName" className="form-label">Last Name:</label>
                            <input type="text" className="form-control" id="lastName" value={lastName} onChange={handleLastName} />
                            {<p className="text-danger">{nameError}</p>}
                        </div>
                        <div className="mb-3">
                            <label htmlFor="email" className="form-label">Email:</label>
                            <input type="email" className="form-control" id="email" value={email} onChange={handleEmail} />
                            {<p className="text-danger">{emailError}</p>}
                        </div>
                        <div className="mb-3">
                            <label htmlFor="password" className="form-label">Password:</label>
                            <input type="password" className="form-control" id="password" onChange={handlePassword} />
                            {<p className="text-danger">{passwordError}</p>}
                        </div>
                        <div className="mb-3">
                            <label htmlFor="confirmPassword" className="form-label">Confirm Password:</label>
                            <input type="password" className="form-control" id="confirmPassword" onChange={handleConfirmPassword} />
                            {<p className="text-danger">{confirmPasswordError}</p>}
                        </div>
                    </form>
                </div>
            </div>
            <div>
                <p>First Name: {firstName}</p>
                <p>Last Name: {lastName}</p>
                <p>Email: {email}</p>
                <p>Password: {password}</p>
            </div>

        </>
    );

};

export default UserForm;
