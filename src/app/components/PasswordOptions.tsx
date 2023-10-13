import React from 'react';

import Checkbox from './Checkbox';
import InputRange from './InputRange';

import { getPasswordStrength } from '../utils/functions';

interface Props {
  passwordLength: number;
  useLowerCase: boolean;
  useNumbers: boolean;
  useSymbols: boolean;
  setPasswordLength: (value: number) => void;
  setUseLowerCase: (value: boolean) => void;
  setUseNumbers: (value: boolean) => void;
  setUseSymbols: (value: boolean) => void;
}

const PasswordOptions = ({
  passwordLength, useLowerCase, useNumbers, useSymbols,
  setPasswordLength, setUseLowerCase, setUseNumbers, setUseSymbols
}: Props) => {
  const passwordStrength = getPasswordStrength({
    passwordLength, useLowerCase, useNumbers, useSymbols
  });

  return (
    <>
      <div className='flex items-center justify-between'>
        <span className='text-gray-100 text-xl'>Character Length</span>
        <span className='text-3xl text-[#00ff00]'>{passwordLength}</span>
      </div>
      <InputRange
        value={passwordLength}
        setValue={setPasswordLength}
        minValue={6}
        maxValue={22}
      />
      <div className='mt-6'>
        <Checkbox
          className='mt-3'
          label='Include Lowercase Letters'
          checked={useLowerCase}
          setChecked={setUseLowerCase}
        />
        <Checkbox
          className='mt-3'
          label='Include Numbers'
          checked={useNumbers}
          setChecked={setUseNumbers}
        />
        <Checkbox
          className='mt-3'
          label='Include Symbols'
          checked={useSymbols}
          setChecked={setUseSymbols}
        />
      </div>

      <div className='bg-[#0f0e14] p-4 mt-6 flex justify-between'>
        <span className='text-gray-500 text-lg'>STRENGTH</span>
        <div className='flex'>
          <div className={`border-2 px-1 mr-2 ${passwordStrength >= 1 ? 'bg-[#f8ce61] border-[#f8ce61]' : 'border-gray-100'} `} />
          <div className={`border-2 px-1 mr-2 ${passwordStrength >= 2 ? 'bg-[#f8ce61] border-[#f8ce61]' : 'border-gray-100'} `} />
          <div className={`border-2 px-1 mr-2 ${passwordStrength >= 3 ? 'bg-[#f8ce61] border-[#f8ce61]' : 'border-gray-100'} `} />
          <div className={`border-2 px-1 mr-2 ${passwordStrength >= 4 ? 'bg-[#f8ce61] border-[#f8ce61]' : 'border-gray-100'} `} />
        </div>
      </div>
    </>
  );
};

export default PasswordOptions;
