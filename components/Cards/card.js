export default function Card({ dataGetter }) {
    const {id, name, imgCard, category} = dataGetter;

    return (
        <>
            <div className="card">
                <div className="text">
                    <h4>{name}</h4>
                </div>
                <img
                    src={imgCard}
                    alt="Oregairu"
                    draggable="false" />
                <div className={'text text-category ' + category}>
                    <h4>{category}</h4>
                </div>
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

                .Novel {
                    background-color: rgba(34, 136, 170, 0.9);
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