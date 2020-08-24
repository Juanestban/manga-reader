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

        p {
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
`

export default css`
    /*Inicio de la secciones Children*/

    main {
        padding: 20px 40px;
    }
`