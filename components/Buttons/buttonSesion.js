export default function ButtonSesion({ modalState, children, className }) {
    return (
        <>
            <li>
                <button 
                    className={className}
                    onClick={modalState}>
                    {children}
                </button>
            </li>
            <style jsx>{`
                li {
                    list-style: none;
                }
            `}</style>
        </>
    );
}
