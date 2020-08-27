import css from 'styled-jsx/css';

export const globalStyles = css.global`
/*styles Globals*/

    /*Selector del navegador (marcador/delineador)*/
    ::selection {
        background-color: #24292E;
        color: rgba(253,126,20,0.9);
    }

    html,
        body {
            padding: 0;
            margin: 0;
            box-sizing: border-box;
        }

        h1, h2, h3 {
            margin: 0;
        }

        a {
            text-decoration: none;
            color: #09f;
        }

        a, button, h1, h2, h3, h4, button {
            font-family: 'Baloo Tamma 2', cursive;
        }

        button {
            background-color: transparent;
            border: none;
            cursor: pointer;
            font-size: 16px;
            display: flex;
            padding: 5px 8px;
            align-items: center;
            line-height: 25px;
            border-radius: 5px;
            margin: 0 auto;
        }

        p, label {
            font-family: 'Noto Sans JP', sans-serif;
        }
                
        header {
            display: flex;
            justify-content: space-between;
            height: 49px;
            position: sticky;
            padding: 0 40px;
            border-bottom: 1px solid #eaeaea;
        }

        header ul {
            display: flex;
            align-items: center;
        }

        header ul li {
            list-style: none;
            margin: 0 8px;
        }

        header ul li a {
            padding: 8px;
            color: #000;
        }

        header ul li a:hover, button:hover {
            color: #09f;
        }

        .img-profile-avatar {
            width: 35px;
            height: 35px;
            border-radius: 50%;
            margin-right: 5px;
        }
`

export default css`
    /*Inicio de la secciones Children*/

    main {
        padding: 20px 40px;
    }
`


export const styleForms = css`
.form-group {
    display: flex;
    margin-bottom: 8px;
}

.password-form {
    justify-content: space-between;
}

label {
    font-size: 13px;
}

.ForgotPassword {
    font-size: 13px;
    color: #6777ef;
    cursor: pointer;
}

.ForgotPassword:hover {
    text-decoration: underline;
}

.form-input {
    display: flex;
    margin-bottom: 20px;
}

input[type="text"], input[type="password"] {
    width: 100%;
    padding: 0px 15px;
    border-radius: 0.25rem;
    font-size: 14px;
    height: 42px;
    border: 1px solid #ced4da;
    text-align: left;
}

input[type="text"]:hover, 
input[type="password"]:hover {
    color: #212529;
}

input[type="text"]:active, 
input[type="text"]:focus,
input[type="password"]:active,
input[type="password"]:focus {
    border-color: #6777ef;
}

.checkbox-control label,
.checkbox-control input  {
    cursor: pointer;
}

li {
    list-style: none;
}

.btnToLogin {
    display: inline-block;
    width: 100%;
    text-align: center;
    line-height: inherit;
    height: 40px;
    margin-top: 20px;
    background-color: #6777ef;
    color: #fff;
}

.btnToLogin:hover {
    background-color: #4f5ece;
    color: #fff;
}

.buttonFileUpload {
    border: 1px solid #09f;
    padding: 5px 8px;
    background-color: transparent;
}
`