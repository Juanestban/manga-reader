import Card from "./card";

const styleContentMarco = {
    display: 'flex',
    justifyContent: 'start',
    padding: '10px 20px',
    flexWrap: 'wrap',
    border: '1px solid #eaeaea',
    borderRadius: 10,
    boxSizing: 'border-box'
}


export default function ListCards() {
    return (
        <div style={styleContentMarco}>
            <Card />
        </div>
    );
}