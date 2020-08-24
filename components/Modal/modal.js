import ReactDOM from 'react-dom';

export default function Modal({ children, onClose }) {

    return (
        <>
            <div className="modal">
                <div className="modal-content">
                    <section>
                        {children}
                    </section>
                    <button onClick={onClose}>Close</button>
                </div>
                <div className="modal-close" onClick={onClose}></div>
            </div>

            <style jsx>{`
                .modal {
                    background-color: rgba(32, 35, 42, .8);
                    position: fixed;
                    bottom: 0;
                    top: 0;
                    left: 0;
                    right: 0;

                    z-index: 997;
                }

                .modal-content {
                    background-color: #f0f0f0;
                    width: 500px;
                    padding: 10px 20px 25px 20px;
                    /*height: 50vh; */
                    margin: 10vh auto;
                    position: relative;
                    border-radius: 10px;
                    
                    z-index: 999;
                }

                .modal-close {
                    position: absolute;
                    top: 0;
                    bottom: 0;
                    left: 0;
                    right: 0;

                    z-index: 998;
                }
            `}</style>
        </>
    );
}