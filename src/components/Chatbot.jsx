import { useEffect } from "react";

function Chatbot() {
  useEffect(() => {
    const script = document.createElement("script");
    script.src = "//code.tidio.co/m7qmtrhr3sqzohctk9denskvaxru3cit.js";
    script.async = true;
    document.body.appendChild(script);

    return () => {
      document.body.removeChild(script); // Cleanup the script when the component is unmounted
    };
  }, []);

  return null; // No need to render any UI; the Tidio widget will handle it
}

export default Chatbot;
