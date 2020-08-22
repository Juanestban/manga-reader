const thumbImg = {
    BerserkGluttony: '/img/imgCards/BerserkOfGluttony.jpg',
    Konosuba: '/img/imgCards/Konosuba.png',
    Masamune: '/img/imgCards/Masamune-Kun.jpg',
    Oregairu: '/img/imgCards/Oregairu.jpg',
    OtomeGame: '/img/imgCards/OtomeGame.png',
    TateNoYuusha: '/img/imgCards/TateNoYuusha.jpg',
    OregairuNovels: '/img/imgCards/thumbOregairu.png',
    TokyoRavens: '/img/imgCards/TokyoRavens.png',
    Toradora: '/img/imgCards/Toradora.jpg'
}

const imgPortada = Object.keys(thumbImg);


// Ajustes de estilos casi finalizados
// Falta que el contenido conforme el genero que sea el background cambie para mas denamismo al sitio web
// ¡Hacer del componenete estatico a Dinamico!
export default function Card() {
    return (
        <>
            {imgPortada.map((imgPortada) => {
                return (
                    <div
                        className="card"
                        key={imgPortada}>
                        <div className="text">
                            <h4>Berserk of Gluttony</h4>
                        </div>
                        <img
                            src={thumbImg[imgPortada]}
                            alt="Oregairu" />
                        <div className="text text-bottom">
                            <h4>Shonen</h4>
                        </div>
                    </div>
                );
            })}
            <style jsx>{`
                .card {
                    width: 15%;
                    height: 270px;
                    margin: 10px 0;
                    over-flow: hidden;
                    box-sizing: border-box;
                    position: sticky;
                }

                .text {
                    width: 100%;
                    position: absolute;
                    text-align: center;
                    background-color: rgba(60, 65, 66, 0.6);
                    color: #fff;
                    z-index: 1;
                }

                img {
                    width: 100%;
                    height: 100%;
                }

                h4 {    
                    margin: 0;
                }

                .text-bottom {
                    background-color: rgba(253, 126, 20, 0.9);
                    bottom: 15px;
                }
            `}</style>
        </>
    );
}