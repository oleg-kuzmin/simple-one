import { useState } from 'react';

export function useModal(): [boolean, VoidFunction, VoidFunction] {
  const [activeModal, setActiveModal] = useState(false);
  const modal = document.querySelector('#modalNewTask') as HTMLElement;

  const openModal = () => {
    setActiveModal(true);
    const paddingOffset = window.innerWidth - document.body.offsetWidth + 'px';
    document.body.style.overflow = 'hidden';
    document.body.style.paddingRight = paddingOffset;
    if (modal) {
      modal.style.paddingRight = paddingOffset;
    }
  };

  const closeModal = () => {
    setActiveModal(false);
    document.body.removeAttribute('style');
    if (modal) {
      modal.removeAttribute('style');
    }
  };

  return [activeModal, openModal, closeModal];
}
