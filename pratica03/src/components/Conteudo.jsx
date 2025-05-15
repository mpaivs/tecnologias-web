import Conteudo from "../components/Conteudo.css"

function Conteudo() {
    return (
        <main className={props.estilo}>{props.children}
        </main>
    );
}
export default Conteudo;