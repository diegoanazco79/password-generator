'use client';

import InputRange from './components/InputRange';
import Checkbox from './components/Checkbox';

import useRandomPassword from './hooks/useRandomPassword';
import { getPasswordStrength } from './utils/functions';

import { FaRegCopy } from 'react-icons/fa';

export default function Home () {
  const {
    passwordLength, useLowerCase, useUpperCase, useNumbers, useSymbols,
    setPasswordLength, setUseLowerCase, setUseUpperCase, setUseNumbers, setUseSymbols
  } = useRandomPassword();

  const passwordStrength = getPasswordStrength({
    passwordLength, useLowerCase, useUpperCase, useNumbers, useSymbols
  });

  return (
    <main className='flex-col min-h-screen bg-[#0f0e14] flex items-center justify-center px-10'>
      <h1 className='text-gray-300 text-2xl'>Password Generator</h1>
      <div className='flex items-center justify-between p-5 bg-[#24232b] max-w-screen-sm w-full mt-6'>
        <span className='text-gray-500 text-2xl'> P4$5W0rD!</span>
        <FaRegCopy className='w-[25px] h-[25px] text-[#00ff00] cursor-pointer hover:text-[#00ff00ba]' />
      </div>
      <div className='p-5 bg-[#24232b] max-w-screen-sm w-full mt-6'>
        <div className='flex items-center justify-between'>
          <span className='text-gray-100 text-xl'>Character Length</span>
          <span className='text-3xl text-[#00ff00]'>{passwordLength}</span>
        </div>
        <InputRange
          value={passwordLength}
          setValue={setPasswordLength}
          minValue={1}
          maxValue={16}
        />
        <div className='mt-6'>
          <Checkbox className='mt-1' label='Include Uppercase Letters' checked={useUpperCase} setChecked={setUseUpperCase} />
          <Checkbox className='mt-1' label='Include Lowercase Letters' checked={useLowerCase} setChecked={setUseLowerCase} />
          <Checkbox className='mt-1' label='Include Numbers' checked={useNumbers} setChecked={setUseNumbers} />
          <Checkbox className='mt-1' label='Include Symbols' checked={useSymbols} setChecked={setUseSymbols} />
        </div>

        <div className='bg-[#0f0e14] p-4 mt-6 flex justify-between'>
          <span className='text-gray-500 text-lg'>STRENGTH</span>
          <div className='flex'>
            <div className={`border-2 px-1 mr-2 ${passwordStrength >= 1 ? 'bg-[#f8ce61] border-[#f8ce61]' : 'border-gray-100'} `} />
            <div className={`border-2 px-1 mr-2 ${passwordStrength >= 2 ? 'bg-[#f8ce61] border-[#f8ce61]' : 'border-gray-100'} `} />
            <div className={`border-2 px-1 mr-2 ${passwordStrength >= 3 ? 'bg-[#f8ce61] border-[#f8ce61]' : 'border-gray-100'} `} />
            <div className={`border-2 px-1 mr-2 ${passwordStrength >= 4 ? 'bg-[#f8ce61] border-[#f8ce61]' : 'border-gray-100'} `} />
            <div className={`border-2 px-1 mr-2 ${passwordStrength >= 5 ? 'bg-[#f8ce61] border-[#f8ce61]' : 'border-gray-100'} `} />
          </div>
        </div>

        <button className='mt-6 bg-[#00ff00] transition ease-in-out duration-300 w-full px-6 py-4 font-semibold text-2xl hover:bg-transparent hover:border-[#00ff00] hover:border border border-transparent hover:text-[#00ff00]'>
          GENERATE
        </button>
      </div>
    </main>
  );
}
