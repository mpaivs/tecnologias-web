import Secao from "./Secao"

function Secao() {
    return (
        <section>
            <h2>{props.texto}</h2>
            {props.children}
        </section>
    );
}
export default Secao;