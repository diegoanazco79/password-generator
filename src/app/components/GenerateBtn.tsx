import React from 'react';

interface Props {
  loadingPassword: boolean;
  hasError: boolean;
  errorMessage: string;
  onGeneratePassword: () => void;
}

const GenerateBtn = ({
  loadingPassword, hasError, errorMessage,
  onGeneratePassword
}: Props) => {
  return (
    <>
      <button
        className='mt-6 disabled:opacity-50 disabled:cursor-not-allowed bg-[#00ff00] transition ease-in-out duration-300 w-full px-6 py-4 font-semibold text-2xl hover:bg-transparent hover:border-[#00ff00] hover:border border border-transparent hover:text-[#00ff00]'
        onClick={onGeneratePassword}
        disabled={loadingPassword}
      >
        {loadingPassword ? 'GENERATING...' : 'GENERATE'}
      </button>
      {hasError &&
        <span className='text-red-500 text-lg mt-4 text-center'>
          {errorMessage}
        </span>}
    </>
  );
};

export default GenerateBtn;
