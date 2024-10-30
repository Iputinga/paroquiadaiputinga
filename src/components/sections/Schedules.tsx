import React from "react";

const Schedules = () => {
    return (
        <>
            <div style={{ 
                textAlign: 'center', 
                marginBottom: '20px' 
            }}>
                <h1
                    style={{
                        fontFamily: "'Poltawski Nowy', serif",
                        fontSize: "40px",
                        fontWeight: 700,
                        color: "black",
                        textAlign: "center",
                    }}
                >
                    HORÁRIOS
                </h1>
            </div>

            <section style={{
                display: 'flex',
                justifyContent: 'space-between',
                alignItems: 'flex-start',
                maxWidth: '1000px',
                margin: '0 auto',
                padding: '10px',
            }}>
                <div style={{ flex: 1, paddingRight: '20px' }}>
                    <h2 style={{ fontSize: "34px", fontWeight: 700, color: "black" }}>Horários da Secretaria</h2>
                    <p style={{ fontSize: "20px"}}>Nossa secretaria está à disposição para atender suas necessidades nos seguintes horários:
                        Terça a Sábado:<br />
                        9h00 – 12h00 | 14h00 – 18h40
                    </p>

                    <h2 style={{ fontSize: "34px", fontWeight: 700, color: "black" }}>Confissões</h2>
                    <p style={{ fontSize: "20px"}}>Oferecemos o sacramento da confissão nos dias:
                    Quarta-feira: 9h30 – 11h00<br />
                    Quinta-feira: 9h30 – 11h00
                    </p>
                </div>

                <div style={{ flex: 1, paddingLeft: '20px' }}>
                    <h2 style={{ fontSize: "34px", fontWeight: 700, color: "black" }}>Horário das Missas</h2>
                    <p style={{ fontSize: "20px"}}>Participe conosco das missas, celebradas em diversos dias e horários:
                    Terça a Sábado: 19h00<br />
                        Domingo: 7h00 | 10h00 | 19h00</p>

                    <h2 style={{ fontSize: "34px", fontWeight: 700, color: "black" }}>Batizados</h2>
                    <p style={{ fontSize: "20px"}}>Os batizados são realizados duas vezes ao mês: <br/>
                    2° e 4° Domingo do mês.</p>
                </div>
            </section>
        </>
    );
}

export default Schedules;
