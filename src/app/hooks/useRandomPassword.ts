import { useState } from 'react';

const useRandomPassword = () => {
  const [passwordLength, setPasswordLength] = useState(6);

  const [useLowerCase, setUseLowerCase] = useState(false);
  const [useNumbers, setUseNumbers] = useState(false);
  const [useSymbols, setUseSymbols] = useState(false);

  const [currentPassword, setCurrentPassword] = useState('');
  const [loadingPassword, setLoadingPassword] = useState(false);
  const [hasError, setHasError] = useState(false);
  const [errorMessage, setErrorMessage] = useState('');

  /**
   * Generate a random password using the API
   */
  const onGeneratePassword = async () => {
    try {
      setLoadingPassword(true);
      const response = await fetch(`https://www.psswrd.net/api/v1/password/?length=${passwordLength}&lower=${useLowerCase ? 1 : 0}&upper=1&int=${useNumbers ? 1 : 0}&special=${useSymbols ? 1 : 0}`);
      const data = await response.json();
      if (data.detail.includes('Request was throttled.')) {
        setErrorMessage(data.detail);
        throw new Error('Request was throttled.');
      }
      setCurrentPassword(data.password);
    } catch (error) {
      setHasError(true);
      setCurrentPassword('');
      console.error(error);
    } finally {
      setLoadingPassword(false);
    }
  };

  return {
    /* States */
    passwordLength,
    useLowerCase,
    useNumbers,
    useSymbols,
    currentPassword,
    loadingPassword,
    hasError,
    errorMessage,

    /* States Functions */
    setPasswordLength,
    setUseLowerCase,
    setUseNumbers,
    setUseSymbols,

    /* Functions */
    onGeneratePassword
  };
};

export default useRandomPassword;
