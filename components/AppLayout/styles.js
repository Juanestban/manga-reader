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
            margin: 0 5px;
        }

        header ul li a {
            padding: 8px;
            color: #000;
        }

        header ul li a:hover, button:hover {
            color: #09f;
        }

        .img-profile-avatar {
            width: 24px;
            height: 24px;
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

.form-input input[type="text"]:active, 
.form-input input[type="text"]:focus,
.form-input input[type="password"]:active,
.form-input input[type="password"]:focus {
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

/* Formulario de upload Mangas */

.contentForm {
    padding: 20px 100px;
}

.contentForm form {
    padding: 40px;
    border: 1px solid #484f5b;
    box-shadow: 0 0.46875rem 2.1875rem rgba(90,97,105,0.1), 
        0 0.9375rem 1.40625rem rgba(90,97,105,0.1), 
        0 0.25rem 0.53125rem rgba(90,97,105,0.12), 
        0 0.125rem 0.1875rem rgba(90,97,105,0.1);
    border-radius: 1rem;
}

.contentForm form .form-group label {
    font-size: 15px;
}

.contentForm form .form-input input, 
.contentForm form .form-input textarea {
    width: 100%;
    padding: 10px 8px;
    height: inherit;
    border: 1px solid #ced4da;
    border-radius: 0.25rem;
}
/* 
.contentForm form .form-input textarea {
    height: 500px;
} */

.contentForm form .form-input input:hover,
.contentForm form .form-input textarea:hover
select:hover {
    color: #212529;
}

.contentForm form .form-input input:active, 
.contentForm form .form-input input:focus, 
.contentForm form .form-input textarea:active,
.contentForm form .form-input textarea:focus,
select:focus, select:active {
    border-color: #6777ef;
}

.divButtonUpload {
    position: relative;
    width: 150px;
    padding: 10px;
    text-align: center;
    background-color: #24292E;
    border-radius: 0.25rem;
    overflow: hidden;
    cursor: pointer;
}

.divButtonUpload label {
    color: #fff;
    cursor: pointer;
}

.buttonFileUpload {
    position: absolute;
    width: 100%;
    height: 100%;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    opacity: 0;
    cursor: pointer;
}

.buttonSubmitFormUploader {
    background-color: #24292E;
    border-radius: 0.25rem;
    color: #fff;
    padding-top: 8px;
}

.buttonSubmitFormUploader:hover,
.divButtonUpload:hover {
    background-color: #293139;
    color: #fff;
}

select {
    width: 100%;
    padding: 10px;
    border: 1px solid #ced4da;
    border-radius: 0.25rem;
}
`