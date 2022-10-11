import Container from 'components/Container/Container';
import ContactForm from 'components/ContactForm/ContactForm';
import ContactList from 'components/ContactList/ContactList';
import Filter from 'components/Filter/Filter';
import ErrorBoundary from 'utils/ErrorBoundaries';
import s from 'components/App.module.css';

/**
 * TODO use MaterialUI for components design
 */

function App() {
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
          <ContactList />
        </ErrorBoundary>
      </section>
    </Container>
  );
}

export default App;
