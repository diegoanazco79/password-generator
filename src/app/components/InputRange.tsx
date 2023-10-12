import React from 'react';

interface Props {
  value: number;
  minValue?: number;
  maxValue?: number;
  setValue: (value: number) => void;
}

const InputRange = ({
  value, minValue, maxValue, setValue
}: Props) => {
  return (
    <input
      value={value}
      min={minValue}
      max={maxValue}
      onChange={e => setValue(Number(e.target.value))}
      type='range'
      className='custom-input-range'
    />
  );
};

export default InputRange;
