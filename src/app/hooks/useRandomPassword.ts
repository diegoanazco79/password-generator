import { useState } from 'react';

const useRandomPassword = () => {
  const [passwordLength, setPasswordLength] = useState(1);

  const [useLowerCase, setUseLowerCase] = useState(false);
  const [useUpperCase, setUseUpperCase] = useState(false);
  const [useNumbers, setUseNumbers] = useState(false);
  const [useSymbols, setUseSymbols] = useState(false);

  return {
    /* States */
    passwordLength,
    useLowerCase,
    useUpperCase,
    useNumbers,
    useSymbols,

    /* States Functions */
    setPasswordLength,
    setUseLowerCase,
    setUseUpperCase,
    setUseNumbers,
    setUseSymbols

    /* Functions */
  };
};

export default useRandomPassword;
