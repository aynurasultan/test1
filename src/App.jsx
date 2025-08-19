import { useState } from "react";
import yemekler from "./yemekler.json";

function App() {
  const [kategori, setKategori] = useState("");
  const [yemek, setYemek] = useState(null);

  const yemekSec = () => {
    if (!kategori) return;
    const filtrelenmis = yemekler.filter((y) => y.kategori === kategori);
    const rastgele = Math.floor(Math.random() * filtrelenmis.length);
    setYemek(filtrelenmis[rastgele]);
  };

  return (
    <div
      style={{
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "center",
        minHeight: "100vh",
        width: "100vw",
        fontFamily: "'Segoe UI', Tahoma, Geneva, Verdana, sans-serif",
        background: "linear-gradient(180deg, #34483dff 0%, #69796dff 100%)",
        padding: "20px",
        boxSizing: "border-box",
        color: "white",
      }}
    >
      <h1
        style={{
          fontSize: "36px",
          marginBottom: "30px",
          textShadow: "2px 2px #b35c00",
        }}
      >
        🍽 Bugün ne yemek yapsam?
      </h1>

      {/* Dropdown ve Buton aynı satır */}
      <div
        style={{
          display: "flex",
          alignItems: "center",
          gap: "10px",
          margin: "20px",
        }}
      >
        <label style={{ fontSize: "18px" }}>Öğün seç:</label>
        <select
          value={kategori}
          onChange={(e) => setKategori(e.target.value)}
          style={{
            padding: "10px 15px",
            fontSize: "16px",
            borderRadius: "8px",
            border: "1px solid #2a3834ff",
            outline: "none",
          }}
        >
          <option value="">-- Seç --</option>
          <option value="Kahvaltı">Kahvaltı</option>
          <option value="Öğle">Öğle</option>
          <option value="Akşam">Akşam</option>
          <option value="Tatlı">Tatlı</option>
        </select>

        <button
          onClick={yemekSec}
          style={{
            padding: "12px 25px",
            fontSize: "18px",
            cursor: "pointer",
            borderRadius: "12px",
            backgroundColor: "#506660ff",
            color: "#e1f4e7ff",
            border: "none",
            boxShadow: "2px 2px 5px #5f9986ff",
            transition: "0.3s",
          }}
          onMouseOver={(e) => {
            e.currentTarget.style.backgroundColor = "#548f82ff";
          }}
          onMouseOut={(e) => {
            e.currentTarget.style.backgroundColor = "#456a57ff";
          }}
        >
          Ne yesem?
        </button>
      </div>

      {/* Seçilen yemek */}
      {yemek && (
        <div
          style={{
            marginTop: "40px",
            fontSize: "28px",
            fontWeight: "bold",
            transition: "0.5s",
            backgroundColor: "rgba(28, 59, 57, 0.2)",
            padding: "20px",
            borderRadius: "15px",
            display: "inline-block",
            boxShadow: "3px 3px 10px rgba(0,0,0,0.3)",
          }}
        >
          {yemek.isim} ({yemek.kategori})
        </div>
      )}
    </div>
  );
}

export default App;
