import Link from 'next/link';

const arrayButton = [
    "Inicio",
    "Biblioteca",
    "Novels"
]

const arrayLinks = [
    "/",
    "/library",
    "/"
]

const buttonsArray = Object.keys(arrayButton);

const ButtonLinks = (props) => {
    return (
        <Link href={props.links}>
            <a>{props.nameButton}</a>
        </Link>
    );
}

const SessionButtons = () => buttonsArray.map(nameButtons => {
    return (
        <li key={nameButtons}>
            <ButtonLinks
                links={arrayLinks[nameButtons]}
                nameButton={arrayButton[nameButtons]} 
            />
        </li>
    );
})

export default SessionButtons;