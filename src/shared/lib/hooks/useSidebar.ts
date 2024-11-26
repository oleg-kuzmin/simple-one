import { useState } from 'react';

export function useSidebar(): [boolean, boolean, VoidFunction, VoidFunction] {
  const [activeSidebar, setActiveSidebar] = useState(true);
  const [pinSidebar, setPinSidebar] = useState(true);

  const toggleActiveSidebar = () => {
    setActiveSidebar(!activeSidebar);
    setPinSidebar(false);
  };

  const onClickButtonBorderPin = () => {
    setPinSidebar(!pinSidebar);
  };

  return [activeSidebar, pinSidebar, toggleActiveSidebar, onClickButtonBorderPin];
}
