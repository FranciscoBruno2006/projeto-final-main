import { useNavigate } from "react-router-dom";
import Navbarfeed from "./Navbarfeed";
import { useState, useEffect } from "react";

export default function Config() {
    const navigate = useNavigate();
    const [user, setUser] = useState({ id: null, username: "", email: "", senha:"", role: "" });

    useEffect(() => {
        const dadosSalvos = localStorage.getItem("usuarioLogado");
        if (dadosSalvos) {
            setUser(JSON.parse(dadosSalvos));
        }
    }, []);

    const sair = () => {
        localStorage.removeItem("usuarioLogado");
        navigate("/");
    };

    const apagarConta = async () => {
        const response = await fetch(`/api/usuarios/${user.id}`, {
            method: "DELETE"
        });

        const data = await response.json();

        if (data.success) {
            localStorage.removeItem("usuarioLogado");
            navigate("/");
        }
    };

    return(
        <>
        <Navbarfeed />
        <h3><strong>Dados</strong></h3>
        <h4>Email: {user.email}</h4>
        <h4>Senha: {user.senha}</h4>
        
        <button type="button" className="btn-outline theme-danger" onClick={sair}>Sair da conta</button>
        <button type="button" className="btn-solid theme-danger" onClick={apagarConta}>Apagar conta</button>
        </>
    )
}