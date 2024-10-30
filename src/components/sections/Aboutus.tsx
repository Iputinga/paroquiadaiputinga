import Image from "next/image";
import React from "react";
import popefrancis from "assets/popefrancis.svg";

const Aboutus = () => {
    return (

        <section  style={{
            backgroundColor: "white",
            display: "flex",
            alignItems: "center",
            position : "relative"
        
        }}>
          
        

            {/* Conteúdo principal (imagem do Papa e textos) */}
            <div
                    style={{
                        display: "flex",
                        position: "relative",
                        justifyContent: "center",
                        width: "100%",
                        padding: "20px",
                        paddingLeft:"200px",
                        alignItems: "center",
                }}
            >

                {/* Imagem do Papa Francisco */}
                <div>
                    <Image src={popefrancis} alt="Pope Francis"  />
                </div>


                {/* Texto ao lado da imagem */}
                <div style={{ flex: "1", marginLeft: "200px" }}>
                    
                    <h1 style={{ fontWeight: 700, color: "#4D7DCC", fontFamily: "'Poltawski Nowy', sans-serif", fontSize:"40px" }}>Nossa Missão</h1>
                    
                    <p style={{ color: "#000", lineHeight: "1.8" , fontFamily: "'Poltawski Nowy', sans-serif",}}>
                        <b>Nossa missão é levar a mensagem do Evangelho</b> a todas as <br />
                        pessoas, <b>criando um ambiente onde cada membro e <br />
                        visitante possa experimentar o amor de Cristo</b>. Procuramos <br />
                        ser uma igreja viva, presente na vida das famílias e na <br />
                        transformação da sociedade por meio da fé e do serviço <br />
                        comunitário.
                    
                    </p>



                    <h2 style={{ fontWeight: 700, color: "#4D7DCC", fontFamily: "'Poltawski Nowy', sans-serif", fontSize:"40px" }}>Nossa História</h2>

                    <p style={{ color: "#000", lineHeight: "1.8", fontFamily: "'Poltawski Nowy', sans-serif", }}>
                  
                        <b>Fundada em 1952</b>, nossa paróquia tem sido um ponto de <br />
                        encontro espiritual e de apoio para inúmeras famílias ao <br />
                        longo dos anos. <b>Com raízes fortes e uma visão clara</b>, <br />
                        seguimos crescendo em amor, serviço e compromisso com <br />
                        a Palavra de Deus.
                  
                    </p>

                    <h2 style={{ fontWeight: 700, color: "#4D7DCC", fontFamily: "'Poltawski Nowy', sans-serif",fontSize:"40px" }}>
                        Nossos Valores</h2>

                    <p style={{ color: "#000", lineHeight: "1.8", fontFamily: "'Poltawski Nowy', sans-serif", }}>
                        <b>Fé e Oração:</b> Acreditamos no poder da oração e na força da <br />
                        fé para guiar nossas vidas. <br />
                        <b>Comunhão:</b> Valorizamos a unidade e o espírito de <br />
                        comunidade, onde cada pessoa encontra apoio e <br />
                        fraternidade. <br />
                        <b>Serviço ao Próximo:</b> Ajudar quem mais precisa é parte <br />
                        central do nosso trabalho. Participamos de ações sociais, <br />
                        oferecendo ajuda a famílias carentes, doentes e <br />
                        marginalizados.

                    </p>

                </div>

            </div>

    </section>
        
    );
};

export default Aboutus;
