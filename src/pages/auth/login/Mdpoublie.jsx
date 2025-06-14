import React, { useState, useEffect } from "react";
import { useLocation } from "react-router-dom";
import CodeValidation from "./CodeValidation";
import ResetPassword from "./ResetPassword";

const Mdpoublie = () => {
  const location = useLocation();
  const [step, setStep] = useState(1);
  const [email, setEmail] = useState("");
  const [code, setCode] = useState("");
  const [role, setRole] = useState("admin"); // par defaut raha tsis role exact azo 

  useEffect(() => {
    const passedEmail = location.state?.email;
    const passedRole = location.state?.role;
    if (passedEmail) setEmail(passedEmail);
    if (passedRole) setRole(passedRole);
  }, [location.state]);

  const handleCodeValidated = (validatedEmail, validatedCode) => {
    setEmail(validatedEmail);
    setCode(validatedCode);
    setStep(2);
  };

  return (
    <div className="bg-gradient-to-r from-blue-50 to-gray-100 h-screen flex justify-center items-center">
      <div className="bg-white shadow-md p-8 rounded-lg w-full max-w-md">
        {step === 1 ? (
          <CodeValidation email={email} onSuccess={handleCodeValidated}  role={role} />
        ) : (
          <ResetPassword email={email} code={code} role={role} />
        )}
      </div>
    </div>
  );
};

export default Mdpoublie;
