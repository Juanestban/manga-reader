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

const styleMarco = {
    width: '15%',
    height: 250,
    margin: '10px 0',
    overFlow: 'hidden'
}

export default function Card() {
    return imgPortada.map((imgPortada) => {
        return (
            <div
                style={styleMarco}
                key={imgPortada}>
                <img
                    style={{
                        width: '100%',
                        height: '100%'
                    }}
                    src={thumbImg[imgPortada]}
                    alt="Oregairu" />
            </div>
        );
    });
}