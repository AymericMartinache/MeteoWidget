//* --- STATE
import { useEffect, useState } from 'react';

//* --- HOOKS
import { useAppDispatch } from '../../hooks/hooks';

//* --- THUNK
import fecthDataFromAPI from '../../middlewares/fetchDataFromApi';

//* --- SCSS
import './Form.scss';

export default function Form() {
  //* USE DISPATCH
  const dispatch = useAppDispatch();

  //* STATE LOCAL
  // Input
  const [inputValue, setInputValue] = useState<string>('');

  // error message
  const [error, setError] = useState('');

  // Validation de l'input
  const validateInput = (value: string) => {
    const regex = /^[A-Za-z\s]*$/;
    if (!regex.test(value)) {
      setError('Seules les lettres sont autorisés');
      return false;
    }
    if (value.length > 50) {
      setError('Le nom de la ville ne doit pas dépasser 50 caractères');
      return false;
    }
    return true;
  };

  //* USE EFFECT
  // error message timer

  useEffect(() => {
    if (error) {
      const timer = setTimeout(() => {
        setError('');
      }, 4000);
      return () => clearTimeout(timer);
    }
    return () => {};
  }, [error]);

  return (
    <>
      <form
        className="form"
        onSubmit={(e) => {
          e.preventDefault();
          // console.log(inputValue);
          if (inputValue.trim() !== '') {
            //* DISPATCH
            dispatch(fecthDataFromAPI(String(inputValue).trim()));

            // On vide l'inputValue
            setInputValue('');
          }
        }}
      >
        <input
          value={inputValue}
          type="text"
          className="form-input"
          placeholder="Rechercher une ville"
          maxLength={50}
          onChange={(e) => {
            const { value } = e.target;
            if (validateInput(value)) {
              setInputValue(value);
            }
          }}
        />
      </form>
      {error && <p className="error-message">{error}</p>}
    </>
  );
}
