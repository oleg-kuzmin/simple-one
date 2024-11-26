import { useRef, useState } from 'react';
import { ChangeInput, ClickMouse } from '../types';

export function useInputSearch(): [string, ChangeInput, ClickMouse, typeof inputElement] {
  const [value, setValue] = useState('');
  const inputElement = useRef<HTMLInputElement | null>(null);

  const handleChange: ChangeInput = evt => {
    setValue(evt.target.value);
  };

  const handleClickReset: ClickMouse = evt => {
    evt.preventDefault();
    setValue('');
    inputElement.current?.focus();
  };

  return [value, handleChange, handleClickReset, inputElement];
}
