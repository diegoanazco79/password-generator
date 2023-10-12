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
        <FaRegCopy className='w-[25px] h-[25px] text-[#a6efad] cursor-pointer hover:text-[#83be89]' />
      </div>
      <div className='p-5 bg-[#24232b] max-w-screen-sm w-full mt-6'>
        <div className='flex items-center justify-between'>
          <span className='text-gray-100 text-xl'>Character Length</span>
          <span className='text-3xl text-[#a6efad]'>{passwordLength}</span>
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
            <div className={`border-2 border-gray-100 px-1 mr-2 ${passwordStrength >= 1 ? 'bg-[#f8ce61] border-[#f8ce61]' : ''} `} />
            <div className={`border-2 border-gray-100 px-1 mr-2 ${passwordStrength >= 2 ? 'bg-[#f8ce61] border-[#f8ce61]' : ''} `} />
            <div className={`border-2 border-gray-100 px-1 mr-2 ${passwordStrength >= 3 ? 'bg-[#f8ce61] border-[#f8ce61]' : ''} `} />
            <div className={`border-2 border-gray-100 px-1 mr-2 ${passwordStrength >= 4 ? 'bg-[#f8ce61] border-[#f8ce61]' : ''} `} />
            <div className={`border-2 border-gray-100 px-1 mr-2 ${passwordStrength >= 5 ? 'bg-[#f8ce61] border-[#f8ce61]' : ''} `} />
          </div>
        </div>

        <button className='mt-6 bg-[#a6efad] w-full px-6 py-4 font-semibold text-xl hover:bg-transparent hover:border-[#a6efad] hover:border border border-transparent hover:text-[#a6efad]'>
          GENERATE
        </button>
      </div>
    </main>
  );
}
