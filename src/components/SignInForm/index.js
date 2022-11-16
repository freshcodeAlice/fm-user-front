import React from 'react';
import * as API from '../../api';

const SignInForm = () => {

const sendData = () => {
    /*
    {email: 'johndoe@mail.com',
    password: 'qwerty
    }
    */
    API.singIn();
}



    return (
        <div>
            SignInForm
            <input type="text" />
        </div>
    );
}

export default SignInForm;
