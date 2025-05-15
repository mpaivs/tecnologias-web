import "./Cabecalho"
import "./Conteudo"
import "./Menu"
import "./Secao"
import "./InputNome"
import "./InputEmail"
import "./InputSenha"
import "./Botao"

function Perfil() {
    return (
    <>
        <Cabecalho></Cabecalho>
        <Conteudo>
        <Menu />
        <Secao texto="Perfil do Aluno">
        <form action="#" method="post">
            <IputNome />
            <InputEmail />
            <InputSenha />
            <Botao texto="Salvar" />
        </form>
        </Secao>
        </Conteudo>
    </>
    );
}
export default Perfil;