import React from 'react';

import { FaRegCopy } from 'react-icons/fa';

interface Props {
  currentPassword: string;
  loadingPassword: boolean;
  copyToClipboard: (text: string) => Promise<void>;
}

const PasswordOutput = ({ currentPassword, loadingPassword, copyToClipboard }: Props) => {
  return (
    <>
      <div className='flex items-center justify-between p-5 bg-[#24232b] max-w-screen-sm w-full mt-6'>
        <span className='text-gray-500 text-2xl'>
          {currentPassword !== '' ? loadingPassword ? 'Generating...' : currentPassword : 'P4$5W0rD!'}
        </span>
        <button
          onClick={() => copyToClipboard(currentPassword)}
          className='text-[#00ff00] hover:text-[#00ff00ba]'
        >
          <FaRegCopy className='w-[25px] h-[25px] ' />
        </button>
      </div>
    </>
  );
};

export default PasswordOutput;
