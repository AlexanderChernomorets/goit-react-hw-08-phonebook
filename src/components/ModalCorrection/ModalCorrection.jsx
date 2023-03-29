import { useModalCorrection } from 'hook/useModalCorrection';
import { createPortal } from 'react-dom';

export const ModalCorrection = ({ ...dataProps }) => {
  const { clickOverlay, onSubmit, register, handleSubmit } =
    useModalCorrection(dataProps);

  return createPortal(
    <div onClick={clickOverlay}>
      <div>
        <div>
          <form autoComplete="on" onSubmit={handleSubmit(onSubmit)}>
            <label htmlFor="">
              Name
              <input
                {...register('name')}
                type={'text'}
                name="name"
                pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
                title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
                placeholder="Name"
                required
              />
            </label>
            <label htmlFor="">
              <input
                {...register('number')}
                type={'tel'}
                name="number"
                pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
                title="Phone number must be digits and can contain spaces, dashes, parentheses and can start with +"
                placeholder="+38(099)999-99-99"
                required
              />
            </label>
            <button type="submit" value={'add contact'}></button>
          </form>
        </div>
      </div>
    </div>,
    document.querySelector('#modal-root')
  );
};
