import React, { useState } from 'react';

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
            <form>
                <div>
                    <label>First Name: </label>
                    <input type="text" value={firstName} onChange={handleFirstName} />
                    {<p style={{ color: "red" }} >{nameError && nameError}</p>}
                </div>
                <div>
                    <label>Last Name: </label>
                    <input type="text" value={lastName} onChange={handleLastName} />
                    {<p style={{ color: "red" }} >{nameError && nameError}</p>}

                </div>
                <div>
                    <label>Email: </label>
                    <input type="text" value={email} onChange={handleEmail} />
                    {<p style={{ color: "red" }} >{emailError && emailError}</p>}
                </div>
                <div>
                    <label>Password: </label>
                    <input type="text" onChange={handlePassword} />
                    {<p style={{ color: "red" }} >{passwordError && passwordError}</p>}

                </div>
                <div>
                    <label>Confirm Password: </label>
                    <input type="text" onChange={handleConfirmPassword} />
                    {<p style={{ color: "red" }} >{confirmPasswordError && confirmPasswordError}</p>}

                </div>



            </form>
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
