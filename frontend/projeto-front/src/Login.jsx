import { useState } from "react";
import { useNavigate } from "react-router-dom";
import Navbar from "./Navbar";

function Login(){
    const [username, setUsername] = useState("");
    const [senha, setSenha] = useState("");
    const navigate = useNavigate();

    const handleLogin = async (e) => {
        e.preventDefault();

        try {
            const response = await fetch('/api/login', { method: 'POST', headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({ username, senha })
            });

            const data = await response.json();

            if (data.success) {
                alert(data.message);
                localStorage.setItem("usuarioLogado", JSON.stringify(data.user));
                navigate("/feed"); 
            } else {
                alert(data.message); 
            }
        } catch (error) {
            alert("Erro ao conectar com o servidor.");
        }
    };

    return(
    <>
    <Navbar></Navbar>
        <div className="d-flex">
<div className="h-25 w-25">
    <img className="rounded-circle mt-12" src="https://gstatic.com" alt="" />
</div>
<div className="menu show position-static" style={{"--bs-menu-min-width": "300px","--bs-menu-max-height": "400px", "marginLeft": '400px', "marginTop": '100px'}}>
  <form className="d-flex flex-column gap-3 p-3" onSubmit={handleLogin}>
    <div>
    <label htmlFor="exampleMenuFormUsername" className="form-label">Nome de usuário ou Email</label>
    <input type="text" className="form-control" id="exampleMenuFormUsername" placeholder="Seu nome de usuário ou email" value={username} onChange={(e) => setUsername(e.target.value)} required />
    </div>
    <div>
      <label htmlFor="exampleMenuFormPassword1" className="form-label">Senha</label>
      <input type="password" className="form-control" id="exampleMenuFormPassword1" placeholder="Password" value={senha} onChange={(e) => setSenha(e.target.value)} required />
    </div>
    <div className="form-field">
      <input type="checkbox" id="checkLabel" className="check" />
      <label htmlFor="checkLabel">Example new checkbox</label>
    </div>
    <div className="vstack gap-2">
      <button type="submit" className="btn-solid theme-primary">Sign in</button>
      <a className="theme-secondary" href="#">New around here? Sign up</a>
      <a className="theme-secondary" href="#">Forgot password?</a>
    </div>
  </form>
</div>
</div>
    </>
    )
}
export default Login;
