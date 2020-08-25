import ButtonSesion from '../Buttons/buttonSesion';

const ButtonsSignInOrUp = ({user, handleModalSesion}) => {
    return (
        <>
            {
                user === null &&
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
                    {user.firstName}
                </ButtonSesion>
            }
        </>
    )
}

export default ButtonsSignInOrUp;