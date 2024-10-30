import Image from "next/image";
import React from "react";
import imgalery1 from "assets/imgalery1.png";
import imgalery2 from "assets/imgalery2.png";
import imgalery3 from "assets/imgalery3.png";
import imgalery4 from "assets/imgalery4.png";
import imgalery5 from "assets/imgalery5.png";
import imgalery6 from "assets/imgalery6.png";
import imgalery7 from "assets/imgalery7.png";
import imgalery8 from "assets/imgalery9.png";
import imgalery9 from "assets/imgalery8.png";

const Galerypics = () => {
    return (
        <section style={{
            backgroundColor: "#D2B474", 
            padding: "20px",
            display: "flex",
            justifyContent: "center", 
        }}>
            <div style={{ maxWidth: "1000px", width: "100%" }}>
                <div style={{
                    display: "flex",
                    justifyContent: "center",
                    marginBottom: "20px"
                }}>
                    <h1 style={{
                        fontFamily: "'Poltawski Nowy', serif", 
                        fontSize: "40px",
                        fontWeight: 700,
                        color: "black",
                        textAlign: "center"
                    }}>
                        GALERIA DE FOTOS
                    </h1>
                </div>

                <div style={{
                    display: "grid",
                    gridTemplateColumns: "repeat(2, 1fr)", 
                    gap: "10px",
                    justifyItems: "center", 
                }}>
                    <Image src={imgalery1} alt="imgalery1" style={{ width: "100%", height: "auto", objectFit: "cover" }} />
                    <Image src={imgalery2} alt="Foto 2" style={{ width: "100%", height: "auto", objectFit: "cover" }} />
                </div>

                <div style={{
                    display: "grid",
                    gridTemplateColumns: "repeat(3, 1fr)", 
                    gap: "10px",
                    justifyItems: "center",
                    marginBottom: "10px"
                }}>
                    <Image src={imgalery3} alt="Foto 3" style={{ width: "100%", height: "auto", objectFit: "cover" }} />
                    <Image src={imgalery4} alt="Foto 4" style={{ width: "100%", height: "auto", objectFit: "cover" }} />
                    <Image src={imgalery5} alt="Foto 5" style={{ width: "100%", height: "auto", objectFit: "cover" }} />
                </div>

                <div style={{
                    display: "grid",
                    gridTemplateColumns: "repeat(3, 1fr)",
                    gap: "10px",
                    justifyItems: "center", 
                    marginBottom: "10px"
                }}>
                     <Image src={imgalery6} alt="Foto 6" style={{ width: "100%", height: "auto", objectFit: "cover" }} />
                    <Image src={imgalery7} alt="Foto 7" style={{ width: "100%", height: "auto", objectFit: "cover" }} />
                    <Image src={imgalery8} alt="Foto 8" style={{ width: "100%", height: "auto", objectFit: "cover" }} />
                </div>

                <div style={{
                    display: "grid",
                    gridTemplateColumns: "repeat(1, 1fr)",
                    gap: "10px",
                    justifyItems: "center", 
                    marginBottom: "10px"
                }}>
                    <Image src={imgalery9} alt="Foto 9" style={{ width: "100%", height: "auto", objectFit: "cover" }} />
                </div>
            </div>
        </section>
    );
};

export default Galerypics;
