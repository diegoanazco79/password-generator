'use client';

import GenerateBtn from './components/GenerateBtn';
import PasswordOptions from './components/PasswordOptions';
import PasswordOutput from './components/PasswordOutput';

import useRandomPassword from './hooks/useRandomPassword';

export default function Home () {
  const {
    passwordLength, useLowerCase, hasError, errorMessage,
    useNumbers, useSymbols, currentPassword, loadingPassword,
    setPasswordLength, setUseLowerCase,
    setUseNumbers, setUseSymbols,
    onGeneratePassword
  } = useRandomPassword();

  /* Component's Props */
  const passwordOutputProps = { currentPassword, loadingPassword };
  const passwordOptionsProps = {
    passwordLength, useLowerCase, useNumbers, useSymbols,
    setPasswordLength, setUseLowerCase, setUseNumbers, setUseSymbols
  };
  const generateBtnProps = {
    loadingPassword, hasError, errorMessage,
    onGeneratePassword
  };

  return (
    <main className='flex-col min-h-screen bg-[#0f0e14] flex items-center justify-center px-10'>
      <h1 className='text-gray-300 text-2xl'>Password Generator</h1>
      <PasswordOutput {...passwordOutputProps} />
      <div className='p-5 bg-[#24232b] max-w-screen-sm w-full mt-6'>
        <PasswordOptions {...passwordOptionsProps} />
        <GenerateBtn {...generateBtnProps} />
      </div>
    </main>
  );
}
