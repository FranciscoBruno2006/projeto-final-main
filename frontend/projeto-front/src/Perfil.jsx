import { useState, useEffect } from "react";
import "./perfil.css";
import Navbarfeed from "./Navbarfeed";

export default function Perfil() {
    const [user, setUser] = useState({ id: null, username: "Visitante", email: "" });
    const [editando, setEditando] = useState(false);
    const [novoNome, setNovoNome] = useState("");

    useEffect(() => {
        const dadosSalvos = localStorage.getItem("usuarioLogado");
        if (dadosSalvos) {
            const parsed = JSON.parse(dadosSalvos);
            setUser(parsed);
            setNovoNome(parsed.username);
        }
    }, []);

    const salvarNome = async () => {
        const response = await fetch(`/api/usuarios/${user.id}`, {
            method: "PUT",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify({ novoUsername: novoNome })
        });

        const data = await response.json();

        if (data.success) {
            setUser(data.user);
            localStorage.setItem("usuarioLogado", JSON.stringify(data.user));
            setEditando(false);
        }
    };

    return(
        <>
        <Navbarfeed />
        <div id="conteudo">
            <div id="cabecalho">
                <div id="fotodeperfil"> 
                    <img id="perfil" src="https://gstatic.com" alt=""/>
                </div>
                <div id="textodeperfil">
                    {!editando ? (
                        <div>
                            <h2>{user.username}</h2>
                            <button onClick={() => setEditando(true)}>Editar</button>
                        </div>
                    ) : (
                        <div>
                            <input 
                                type="text" 
                                value={novoNome} 
                                onChange={(e) => setNovoNome(e.target.value)} 
                            />
                            <button onClick={salvarNome}>Salvar</button>
                            <button onClick={() => setEditando(false)}>Cancelar</button>
                        </div>
                    )}

                    <strong>64,7 mil</strong> seguidores <strong>3.009 mil</strong> seguindo
                    <br/>
                    <strong> Digital College • Fortaleza/CE _</strong><br/>
                    <a href="https://threads.com" id="threads" target="_blank">@{user.username}</a><br/>
                </div>
            </div>
            {/* resto das divs de destaques e feed */}
        </div>
        </>
    )
}