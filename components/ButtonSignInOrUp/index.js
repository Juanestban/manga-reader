import ButtonSesion from '../Buttons/buttonSesion';
import ArrowDown from '../Icon/ArrowDown';


const ButtonsSignInOrUp = ({user, handleModalSesion}) => {
    return (
        <>
            {
                user === null || user === undefined &&
                <>
                    <ButtonSesion
                        modalState={() => handleModalSesion(true)}>
                        Sign in
                        </ButtonSesion>
                    <ButtonSesion
                        modalState={() => handleModalSesion(false)}>
                        Sign up
                    </ButtonSesion>
                </>
            }
            {
                user && user.avatar &&
                <ButtonSesion
                    className="img-profile"
                    modalState={() => console.log('You are Logged')}>
                    <img
                        className="img-profile-avatar"
                        src={user.avatar}
                        alt={user.firstName} />
                    <ArrowDown width="12" height="12" />
                </ButtonSesion>
            }
        </>
    )
}

export default ButtonsSignInOrUp;