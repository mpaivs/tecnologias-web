import "./Home"
import "./Perfil"
import "./Login"

function App() {
  return (
    <>
      {index == 1 && <Login />}
      {index == 2 && <Home />}
      {index == 3 && <Perfil />}
    </>
  );
}
  export default App;