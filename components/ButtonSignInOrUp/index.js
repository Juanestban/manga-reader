import ButtonSesion from '../Buttons/buttonSesion';
import ArrowDown from '../Icon/ArrowDown';
import UserIcon from '../Icon/userIcon';


const ButtonsSignInOrUp = ({ user, handleModalSesion }) => {
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
            {user === undefined &&
                <>
                    <ButtonSesion
                        className="img-profile">
                        <UserIcon width={22} height={22} />
                        <ArrowDown style={{marginLeft: 5}} width="12" height="12" />
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

            <style jsx>{`
                .spinner {
                    width: 24px;
                    height: 24px;
                }
            `}</style>
        </>
    )
}

export default ButtonsSignInOrUp;