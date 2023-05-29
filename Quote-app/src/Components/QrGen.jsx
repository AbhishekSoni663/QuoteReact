import React, { useEffect, useState } from "react";
import QrCode from "react-qr-code";
const QrGen = () => {
  const [text, setText] = useState("");
  const [url, setUrl] = useState("");

  const generateQr = async () => {
    e.preventDefault();
    setText(url);
  };

  return (
    <>
      <div className="form-section">
        <div id="qr" className="img">
          <div className="qr">
            <QrCode value={text} />
          </div>
        </div>
        <div className="form">
          <input
            className="input"
            value={text}
            type="text"
            placeholder="https://google.com"
            onChange={(e) => setText(e.target.value)}
            autoFocus
          />
          <div className="box">
            <div className="btn">
              <button className="button" href="#" onClick={generateQr}>
                Generate
              </button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};
export default QrGen;
