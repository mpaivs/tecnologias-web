export default Icone;
function Icone() {
    return (
        <img src={props.imagem} alt={props.texto} />
    );
}