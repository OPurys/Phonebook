import css from './ModalDeleteInner.module.css';
import { RiChatDeleteFill } from 'react-icons/ri';

interface ModalDeleteInnerProps {
  onClose: () => void;
  onDelete: () => void;
}

const ModalDeleteInner = ({ onClose, onDelete }: ModalDeleteInnerProps) => {
  return (
    <div className={css.wrapper}>
      <h2 className={css.title}>
        <RiChatDeleteFill />
        Delete confirmation
      </h2>
      <p className={css.text}>
        This contact will be permanently deleted. Do you agree?
      </p>
      <div className={css.wrapperButtons}>
        <button className={css.btn} type="button" onClick={onDelete}>
          Agree
        </button>
        <button className={css.btn} type="button" onClick={onClose}>
          Disagree
        </button>
      </div>
    </div>
  );
};

export default ModalDeleteInner;
