import Image from "next/image";
import React from "react";
import qrcode from "assets/qrcode.png"
import nossasenhora from "assets/nossasenhora.png"

const Donates = () => {
  return (
    <section>
      <div className="h1">
        <h1
          style={{
            display: "flex",
            justifyItems: "center",
            justifyContent: "center",
            alignItems: "center",
            position: "relative",
            fontFamily: "'Poltawski Nowy', serif", 
                        fontSize: "40px",
                        fontWeight: 700,
                        color: "black",
                        textAlign: "center"
          }}
        >
          DOAÇÃO
        </h1>
      </div>
      <div
        className="p"
        style={{
          display: "flex",
          justifyItems: "center",
          justifyContent: "center",
          alignItems: "center",
          position: "relative",
          fontSize: "23px",
        }}
      >
        <p>
          Sua doação nos ajuda a continuar com nossas obras sociais e a levar a
          palavra de Cristo a mais pessoas. <strong> Com o seu apoio, <br />
          podemos expandir </strong>nossos projetos de acolhimento, oferecer
          assistência às famílias carentes e fortalecer nossa missão <br />
          evangelizadora. Cada contribuição faz uma grande diferença na vida
          daqueles que mais precisam. Juntos, podemos espalhar <br />
          <strong>
            o amor de Deus e transformar nossa comunidade. Contribua e seja
            parte dessa missão de fé e solidariedade!{" "}
          </strong>
        </p>
      </div>
     
      {/* Seção de Doação Presencial */}
      <div className="container" style={{
        display: 'flex',
        alignItems: 'flex-start',
        justifyContent: 'space-between',
        backgroundColor: 'white',
        padding: '20px',
        borderRadius: '8px',
        boxShadow: '0 4px 8px rgba(0, 0, 0, 0.1)',
        maxWidth: '1000px',
        margin: '20px auto',
      }}>
        <div className="donation-info" style={{ maxWidth: '50%' }}>
          <div className="title" style={{
            backgroundColor: '#4a90e2',
            color: 'white',
            marginBottom: '10px',
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
          }}>Doação Presencial</div>
          <p style={{ fontSize: '1.1em', marginBottom: '10px' }}>
            Você também pode contribuir em nossa paróquia. <strong>Venha nos visitar</strong> ou deposite diretamente em nossa conta bancária:
          </p>
          <ul style={{ listStyle: 'none', marginBottom: '20px' }}>
            <li><strong>Banco:</strong> Nome do Banco</li>
            <li><strong>Agência:</strong> 12341</li>
            <li><strong>Conta:</strong> 12345-0</li>
            <li><strong>Chave Pix:</strong> pix@paroquia.com</li>
          </ul>
          <Image src={qrcode} alt="qrcode" style={{ width: '250px', height: 'auto', marginTop: '10px' }} />
        </div>
        <div className="image-section" style={{ display: 'flex', alignItems: 'center' }}>
          <Image src={nossasenhora} alt="Nossa Senhora" style={{
            width: '400px',
            height: 'auto',
            borderRadius: '8px',
            boxShadow: '2px 4px 6px rgba(0, 0, 0, 0.1)',
          }} />
        </div>
      </div>
    </section>
  );
};

export default Donates;
