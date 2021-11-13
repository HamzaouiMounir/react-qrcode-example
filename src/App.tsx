import React, { useState } from "react";
import logo from "./logo.svg";
import "./App.css";
import QRCode from "./QRCode";

function App() {
  const [text, setText] = useState("");
  const [qrCodeData, setQrCodeData] = useState("");
  let debounceTimeoutId: NodeJS.Timeout;
  const handleOnChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setText(e.target.value);
    setQrCodeData("");
    clearTimeout(debounceTimeoutId);
    debounceTimeoutId = setTimeout(() => {
      setQrCodeData(e.target.value);
    }, 2000);
  };
  return (
    <div className="qrcode">
      <h1>Your QRcode is</h1>
      <input
        type="text"
        placeholder="Enter your data here"
        value={text}
        onChange={handleOnChange}
      />
      <br />
      <br />
      {qrCodeData.length ? (
        <QRCode
          data={qrCodeData}
          size={qrCodeData.length * 25}
          errorCorrectionLevel="low"
        />
      ) : (
        <p>Please wait</p>
      )}
    </div>
  );
}

export default App;
