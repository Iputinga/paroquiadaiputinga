import Image from "next/image";
import React from "react";
import pastorais from "assets/pastorais.png"

const Ministries = () => {

    return (
        <section style={{
            backgroundColor: "#D2B474",
            padding: "20px",
        }}>
            <div style={{
                display: "flex",
                justifyContent: "center",
                marginBottom: "20px",
                fontFamily: "'Poltawski Nowy', serif",
                fontSize: "30px",
                fontWeight: 700,
                color: "black",
                textAlign: "center"
            }}>
                <h1>PASTORAIS</h1>
            </div>
            <div className="container"
                style={{
                    display: 'flex',
                    justifyContent: 'space-between',
                    alignItems: 'flex-start',
                    maxWidth: '1000px',
                    margin: '20px auto',
                }}>
                {/* Seção da imagem */}
                <div style={{ flex: 1, marginRight: '100px', marginLeft: "-200px" }}>
                    <Image src={pastorais} alt="Pastorais" style={{
                        width: '717px',
                        height: '632px',
                        borderRadius: '8px',
                    }} />
                </div>

                {/* Seção dos textos */}
                <div style={{ flex: 1 }}>
                    <ul style={{
                       
                        
                        fontFamily: "'Poltawski Nowy', serif",
                        fontSize: '22px',
                        color: 'black',
                       
                        marginLeft: "10px"
                    }}>
                        <li style={{ marginBottom: '10px' }}>
                            <strong>Batismos</strong>
                            <p>Para realizar as inscrições para o batismo, contactar a secretaria paroquial no número (81) 9999-9999 nos seguintes horários:
                            Terça-feira à Sexta-feira de 8h - 12h / 14h - 18h. <br />Sábado: 8h - 12h.</p>
                        </li>
                        <li style={{ marginBottom: '10px' }}>
                            <strong>Crisma</strong>
                            <p>Para realizar as inscrições para o Crisma, contactar a secretaria paroquial no número (81) 9999-9999 nos seguintes horários:
                            Terça-feira à Sexta-feira de 8h - 12h / 14h - 18h. <br />Sábado: 8h - 12h.</p>
                        </li>
                        <li style={{ marginBottom: '10px' }}>
                            <strong>Catequese</strong>
                            <p>Para realizar as inscrições para a Catequese, contactar a secretaria paroquial no número (81) 9999-9999 nos seguintes horários:
                            Terça-feira à Sexta-feira de 8h - 12h / 14h - 18h. <br />Sábado: 8h - 12h.</p>
                        </li>
                    </ul>
                </div>
            </div>
        </section>
    );
}

export default Ministries;
