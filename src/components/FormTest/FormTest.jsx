import React from 'react';
import {reduxForm, Field} from "redux-form";
import classes from "../Customers/Customers.module.css";

const LoginForm = (props) => {
    return (
        <div className={classes.users}>
            <form>
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
    return (
        <div className={classes.users}>
            <h1>Login</h1>
            <LoginReduxForm/>
        </div>
    )
}

export default FormTest;