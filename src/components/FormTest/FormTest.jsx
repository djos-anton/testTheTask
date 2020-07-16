import React from 'react';
import {reduxForm, Field} from "redux-form";
import classes from "../Customers/Customers.module.css";

const LoginForm = (props) => {
    //debugger
    //console.log("RERENDER");
    return (
        <div className={classes.users}>
            <form onSubmit={props.handleSubmit}>
                <div>
                    <Field placeholder={"Login"} name={"Login"} component={"input"}/>
                </div>
                <div>
                    <Field placeholder={"Password"} name={"Password"} component={"input"}/>
                </div>
                <div>
                    <Field type={"Checkbox"} name={"rememberMe"} component={"input"}/> remember me
                </div>
                <div>
                    <button>Login</button>
                </div>
            </form>
        </div>
    )
}

const LoginReduxForm = reduxForm({form: 'login'})(LoginForm)

const FormTest = (props) => {
                    //debugger
                    const onSubmit = (formData) => {
                        console.log(formData);
                    }
    return (
        <div className={classes.users}>
            <h1>Login</h1>
            <LoginReduxForm onSubmit={onSubmit}/>
        </div>
    )
}

export default FormTest;