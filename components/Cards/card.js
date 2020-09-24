import Link from 'next/link';

export default function Card({ dataGetter, idLink }) {
    const { name, imgCard, category, type } = dataGetter;
    let color, hover;

    if (type === 'Manga') {
        color = 'rgb(34, 136, 170)';
        hover = '#28a1ca';
    } else {
        color = 'rgb(4, 64, 95)';
        hover = '#05537c';
    }

    return (
        <>
            <div className="card">
                <Link href={`/detailsManga/[id]`} as={`/detailsManga/${idLink}`}>
                    <a>
                        <div className="text">
                            <h4>{name}</h4>
                        </div>
                        <button className="type-read">{type.toUpperCase()}</button>
                        <img
                            src={imgCard}
                            alt={name}
                            draggable="false" />
                        <div className={'text text-category ' + category}>
                            <h4>{category}</h4>
                        </div>
                    </a>
                </Link>
            </div>
            <style jsx>{`
                .card {
                    width: 15%;
                    height: 270px;
                    margin: 10px 10px;
                    overflow: hidden;
                    box-sizing: border-box;
                    position: sticky;
                }

                .text {
                    width: 100%;
                    position: absolute;
                    padding-left: 8px;
                    background-color: rgba(60, 65, 66, 0.6);
                    color: #fff;
                    z-index: 1;
                }

                .text h4 {
                    overflow: hidden;
                    text-overflow: ellipsis;
                    white-space: nowrap;
                    font-size: .96rem;
                }

                .type-read {
                    position: absolute;
                    font-size: .85rem;
                    padding: 0 8px;
                    top: 30px;
                    left: .5rem;
                    background-color: ${color};
                    color: #fff;
                    border: none;
                    box-shadow: transparent;

                    z-index: 1;
                }

                .type-read:hover {
                    background-color: ${hover};
                }

                .text-category {
                    text-align: center;
                    bottom: 15px;
                }

                /*Categorias de mangas*/

                .Seinen {
                    background-color: rgba(220, 53, 69, 0.9);
                }

                .Shonen {
                    background-color: rgba(253, 126, 20, 0.9);
                }

                .Shoujo {
                    background-color: rgba(232, 62, 140, 0.9);
                }

                img {
                    width: 100%;
                    height: 100%;
                }

                h4 {    
                    margin: 0;
                }
            `}</style>
        </>
    );
}