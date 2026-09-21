import styles from './App.module.scss';
import Header from './Header';
import Section1Hero from './Section1Hero';
import Section2Screenshot from './Section2Screenshot';
import Section3AskAi from './Section3AskAi';
import Section4Outbound from './Section4Outbound';
import Section5Stats from './Section5Stats';
import Section6Workflow from './Section6Workflow';
import Section7Unibox from './Section7Unibox';

export default function App() {
  return (
    <>
      <Header />
      <main className={styles.main}>
        <Section1Hero />
        <Section2Screenshot />
        <Section3AskAi />
        <Section4Outbound />
        <Section5Stats />
        <Section6Workflow />
        <Section7Unibox />
      </main>
    </>
  );
}
