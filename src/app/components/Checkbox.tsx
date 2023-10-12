import React from 'react';

interface Props {
  className?: string;
  label: string;
  checked: boolean;
  setChecked: (value: boolean) => void;
}

const Checkbox = ({ className = '', label, checked, setChecked }: Props) => {
  return (
    <label className={`${className} w-fit square-checkbox-container text-gray-100 text-base`}>
      <span className='relative bottom-[3px]'>{label}</span>
      <input
        type='checkbox'
        checked={checked}
        onChange={(e) => setChecked(e.target.checked)}
      />
      <span className='checkmark' />
    </label>
  );
};

export default Checkbox;
