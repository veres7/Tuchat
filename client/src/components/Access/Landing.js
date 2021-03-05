import React, { useState } from "react";
import Login from "./Login";
import Register from "./Register";

export default function Landing() {
  const [visible, setVisibility] = useState(false);
  
  const handleRegisterVisibility = () => setVisibility(true);
  const handleLoginVisibility = () => setVisibility(false);

  return (
    <div>
      {visible ? (
        <Register handleLoginVisibility={handleLoginVisibility} />
      ) : (
        <Login handleRegisterVisibility={handleRegisterVisibility} />
      )}
    </div>
  );
}
