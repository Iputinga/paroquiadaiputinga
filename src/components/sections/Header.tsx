import Image from "next/image";
import React from "react";
import logo from 'assets/logo.svg'; 
import imagehome from "assets/imagehome.svg";
import Aboutus from "./Aboutus";
import Galerypics from "./Galerypics";
import Donates from "./Donates";
import Ministries from "./Ministries";
import Schedules from "./Schedules";
import Contatc from "./Contatc";

const Header = () => {
    return (
        <>
        <section></section>
        <div className="header" style={{
             position: "static",
             width: "100%",
             height: "100vh", // Altura total da viewport
             display: "flex",
             justifyContent: "center",
             alignItems: "center",
             
        }}>
            {/* Logo TRATAR LINK EM TODAS AS IMAGENS*/}
            <div className="imagehome" style={{
                position: "absolute",
                top: 0,
                left: 0,
                width: "100%",
                height: "100%",
                zIndex: -1,
            }}>
                <Image src={imagehome} alt='imagem-home' layout="fill" objectFit="cover" />
            </div>
            <div style={{ marginRight: "39px", marginTop: "0px", marginBottom:"580px", }}>
                <Image src={logo} alt='logo-paroquia' />
            </div>

            {/* Nav bar */}
            <nav 
                className="navbar" 
                style={{
                    display: "flex",
                    justifyContent: "center",
                    fontSize: "18px",
                    color: "white",
                    fontFamily: "'Poltawski Nowy', sans-serif",
                    fontWeight: "700"
                    
                }}
            >
                <ul style={{ 
                    display: "flex", 
                    gap: "39px", // Espaçamento entre os itens
                    marginBottom:"600px",
                    listStyleType: "none", // Remove os pontos da lista
                    justifyContent: "center",
                    alignItems: "center",
                    color: "white" 
                }}>
                    <li>HOME</li>
                    <li style={{ padding: "0 39px" }}>SOBRE NÓS</li>
                    <li style={{ padding: "0 39px" }}>GALERIA</li>
                    <li style={{ padding: "0 39px" }}>DOAÇÕES</li>
                    <li style={{ padding: "0 39px" }}>PASTORAIS</li>
                    <li style={{ padding: "0 39px" }}>CONTATO</li>
                    <li style={{ padding: "0 39px" }}>HORÁRIO</li>
                </ul>

            </nav>
        </div>
        {/* Left div - Bem-vindo e descrição */}
        <div style={{
                position: "absolute",
                top: "50%",
                left: "250px", // Alinha o conteúdo à esquerda
                transform: "translateY(-50%)",
                color: "white",
                marginTop: "90px"
            }}>
                <div 
                    className="bemvindo" 
                    style={{
                        fontFamily: "'Poltawski Nowy', sans-serif",
                        fontSize: "25px",
                        marginBottom: "10px"
                    }}
                >
                    <h2>Seja bem-vindo à<br />nossa comunidade!</h2>
                </div>

                <div 
                    className="p-home"
                    style={{
                        fontFamily: "'Poltawski Nowy'",
                        fontSize: "20px",
                    }}
                >
                    <p>Juntos, em fé e amor, caminhamos com Cristo. Nossa <br />
                        igreja é seu lar, onde você encontrará acolhimento,<br /> 
                        esperança e propósito.
                    </p>
                </div>

                <div className="button" style={{ marginTop: "30px" }}>
                    <button 
                        style={{
                            backgroundColor: "#4a90e2", 
                            color: "white", 
                            padding: "15px 40px",
                            border: "none", 
                            borderRadius: "10px", 
                            fontSize: "23px", 
                            fontWeight: "bold", 
                            cursor: "pointer", 
                            textAlign: "center",
                            boxShadow: "0 4px 8px rgba(0, 0, 0, 0.2)", 
                            transition: "background-color 0.3s ease", 
                            fontFamily: "'Roboto'"
                        }}
                    >
                        Clique para doar
                    </button>
                </div>
            </div>
        <Aboutus />
        <Galerypics />
        <Donates />
        <Ministries />
        <Schedules />
        <Contatc />
        </>
    );
}

export default Header;
