import { Header } from 'widgets/Header';
import { Main } from 'widgets/Main';
import { useModal, useSidebar } from 'shared/lib';
import { Modal } from 'shared/ui';

export function HomePage() {
  const [activeSidebar, pinSidebar, toggleActiveSidebar, onClickButtonBorderPin] = useSidebar();
  const [activeModal, openModal, closeModal] = useModal();

  return (
    <>
      <Header activeSidebar={activeSidebar} onClickButtonSidebar={toggleActiveSidebar} />
      <Main
        activeSidebar={activeSidebar}
        pinSidebar={pinSidebar}
        onClickButtonSidebar={toggleActiveSidebar}
        onClickButtonBorderPin={onClickButtonBorderPin}
        openModal={openModal}
      />
      <Modal isActive={activeModal} closeModal={closeModal} />
    </>
  );
}
