import React, { useState } from "react";
import ImageGrid from "./comps/ImageGrid";
import Title from "./comps/Title";
import UploadForm from "./comps/UploadForm";
import PasswordBox from "./comps/PasswordBox";

function App() {
  const [isValidated, setIsValidated] = useState(false);
  return (
    <div className="App">
      <Title />
      <ImageGrid />
      <hr />
      <PasswordBox setIsValidated={setIsValidated} />
      {isValidated && <UploadForm />}
    </div>
  );
}

export default App;

//only render upload form if password validation is complete
