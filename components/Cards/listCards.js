import Card from "./card";

const styleContentMarco = {
    display: 'flex',
    justifyContent: 'space-between',
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