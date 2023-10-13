import React from 'react';

import { FaRegCopy } from 'react-icons/fa';

interface Props {
  currentPassword: string;
  loadingPassword: boolean;
}

const PasswordOutput = ({ currentPassword, loadingPassword }: Props) => {
  return (
    <div className='flex items-center justify-between p-5 bg-[#24232b] max-w-screen-sm w-full mt-6'>
      <span className='text-gray-500 text-2xl'>
        {currentPassword !== '' ? loadingPassword ? 'Generating...' : currentPassword : 'P4$5W0rD!'}
      </span>
      <FaRegCopy className='w-[25px] h-[25px] text-[#00ff00] cursor-pointer hover:text-[#00ff00ba]' />
    </div>
  );
};

export default PasswordOutput;
