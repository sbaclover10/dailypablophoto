import React, { useState } from "react";

const PasswordBox = ({ setIsValidated }) => {
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");

  const uwu = "ladydemitrescub";
  const handleTyping = (e) => {
    setPassword(e.target.value);
  };
  const handleClick = () => {
    setError("");
    if (password === uwu) {
      setIsValidated(true);
    } else {
      setError("wrong password");
    }
  };

  return (
    <div className="password-box">
      <p>Wanna upload an image? Type the password</p>
      <input type="password" value={password} onChange={handleTyping} />
      <button className="booba" onClick={handleClick}>
        yeehaw
      </button>
      {error && <p style={{ color: "red" }}>{error}</p>}
    </div>
  );
};

export default PasswordBox;
//validate password here, then if true or false? pass to props through callback to app.js
