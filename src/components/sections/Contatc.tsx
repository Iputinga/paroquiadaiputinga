import React from "react";
import { deflate } from "zlib";

const Contatc = () => {

    return (
        <section style={{
            backgroundColor: "#D2B474",
            padding: "20px",}}>
            
            <div style={{
                display: "flex",
                justifyContent: "center",
                marginBottom: "10px",
                fontFamily: "'Poltawski Nowy', serif",
                fontSize: "30px",
                fontWeight: 700,
                color: "black",
                textAlign: "center"
            }}>
                <h1>CONTATO</h1>
                </div>
                <div className="container" style={{
                display: 'flex',
                justifyContent: 'space-between',
                alignItems: 'flex-start',
                maxWidth: '1000px',
                margin: '0 auto',
                padding: '10px', }}>
                
                <div style={{ flex: 1, paddingRight: '20px' }}>
                    <h2 style={{ fontSize: "24px", fontWeight: 700, color: "black" }}>Fale conosco</h2>
                    <p style={{ fontSize: "20px"}}>Fone: (81) 3034-7204
                      <br />
                      Email: emaildaparoquia@gmail.com
                    </p>

                    <h2 style={{ fontSize: "24px", fontWeight: 700, color: "black" }}>Endereço</h2>
                    <p style={{ fontSize: "20px"}}> R. Dr. Virgínio Marquês, 84 - Iputinga
                      <br />
                      Recife - PE/CEP: 50731-330
                    </p>
                    <h2 style={{ fontSize: "24px", fontWeight: 700, color: "black" }}>Horário de Funcionamento</h2>
                    <p style={{ fontSize: "20px"}}> R. Dr. Virgínio Marquês, 84 - Iputinga
                      <br />
                      Recife - PE/CEP: 50731-330
                    </p>
                    <h2 style={{ fontSize: "24px", fontWeight: 700, color: "black" }}>Horário de Funcionamento</h2> 
<p style={{ fontSize: "20px"}}>
<strong>Domingo</strong> (07:00h – 12:00h), (14:00h –20:00h) <br/>
<strong>Segunda-feira</strong> (Fechado)<br/>
<strong>Terça-feira</strong>(07:00h - 12:00h), (14:00h – 20:00h)<br/>
<strong>Quarta-feira</strong>(07:00h - (12:00h), (14:00h - 20:00h)<br/>
<strong>Quinta-feira</strong> (07:00h – 12:00h), (14:00h –20:00h) <br/>
<strong>Sexta-feira</strong> (07:00h – 12:00h), (14:00h –20:00h) <br/>
<strong>Sábado</strong> (07:00h – 12:00h), (14:00h –20:00h) <br/>

                    </p>
                    
                    </div>

                    <div style={{ flex: 1, paddingLeft: '20px' }}>
                    <h2 style={{ fontSize: "24px", fontWeight: 700, color: "black" }}>Envie uma mensagem</h2>
                    <h2 style={{ fontSize: "20px", fontWeight: 700, color: "black" }}>Nome:</h2>
                    <input
  style={{
    backgroundColor: "white",
    border: "1px solid #ccc",
    padding: "10px",
    fontSize: "26px", // Corrigido 'font-size' para 'fontSize'
    borderRadius: "10px", // Corrigido 'border-radius' para 'borderRadius'
    width: "100%",
    boxSizing: "border-box", // Corrigido 'box-sizing' para 'boxSizing'
  }}
 
/>

<h2 style={{ fontSize: "20px", fontWeight: 700, color: "black" }}>Email:</h2>
                    <input
  style={{
    backgroundColor: "white",
    border: "1px solid #ccc",
    padding: "10px",
    fontSize: "26px", // Corrigido 'font-size' para 'fontSize'
    borderRadius: "10px", // Corrigido 'border-radius' para 'borderRadius'
    width: "100%",
    boxSizing: "border-box", // Corrigido 'box-sizing' para 'boxSizing'
  }}
 
/>
<h2 style={{ fontSize: "20px", fontWeight: 700, color: "black" }}>Mensagem:</h2>
                    <input
  style={{
    backgroundColor: "white",
    border: "1px solid #ccc",
    padding: "10px",
    fontSize: "26px", // Corrigido 'font-size' para 'fontSize'
    borderRadius: "10px", // Corrigido 'border-radius' para 'borderRadius'
    width: "100%",
    height: "200px",
    boxSizing: "border-box", // Corrigido 'box-sizing' para 'boxSizing'
  }}
 
/>
                </div>
                    
                    </div>
        </section>
    )
}
export default Contatc;