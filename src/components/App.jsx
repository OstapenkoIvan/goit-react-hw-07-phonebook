import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { fetchContacts } from 'redux/operations';
import { getIsLoading, getError } from 'redux/selectors';
import Container from 'components/Container/Container';
import ContactForm from 'components/ContactForm/ContactForm';
import ContactList from 'components/ContactList/ContactList';
import Filter from 'components/Filter/Filter';
import ErrorBoundary from 'utils/ErrorBoundaries';
import s from 'components/App.module.css';

function App() {
  const dispatch = useDispatch();
  const isLoading = useSelector(getIsLoading);
  const error = useSelector(getError);

  //*первичная загрузка контактов с бэка, диспатчим не экшен, а операцию-генератор.
  useEffect(() => {
    dispatch(fetchContacts());
  }, [dispatch]);

  return (
    <Container>
      <h1 className={s.mainHeader}>Phonebook</h1>
      <ErrorBoundary>
        <ContactForm />
      </ErrorBoundary>

      <section>
        <h2 className={s.addHeader}>Contacts</h2>
        <ErrorBoundary>
          <Filter />
        </ErrorBoundary>
        <ErrorBoundary>
          {isLoading && !error && (
            <p className={s.infoText}>Please wait, loading data...</p>
          )}
          {error && (
            <p className={s.infoText}>ooops, something went wrong! {error}</p>
          )}
          <ContactList />
        </ErrorBoundary>
      </section>
    </Container>
  );
}

export default App;
