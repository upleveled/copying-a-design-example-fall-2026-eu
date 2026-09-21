import styles from './Section1Hero.module.scss';

export default function Section1Hero() {
  return (
    <section className={styles.section}>
      <a href="#a">
        <img src="/images/g2.svg" alt="G2" /> Rated 4.9 out of 5
      </a>

      <h1>Personalised outreach, powered by signals</h1>

      <p>
        Turn intent into automated sequences across email, LinkedIn, and
        WhatsApp - with video that plays natively.
      </p>

      <a href="#a">
        <img src="/images/inline-elements/1475982494.svg" alt="" />
        Try free
      </a>
      <a href="#a">
        <img src="/images/inline-elements/1475982494.svg" alt="" />
        See pricing
      </a>
      <div>
        <span>No card required</span>
      </div>

      <div>
        <img src="/images/vimeo.svg" alt="Vimeo" />
        <img src="/images/deazy.svg" alt="Deazy" />
        <img src="/images/financial-times.svg" alt="Financial Times" />
        <img src="/images/mux.svg" alt="Mux" />
        <img src="/images/myday.svg" alt="MyDay" />
        <img src="/images/speak.svg" alt="Speak" />
      </div>
    </section>
  );
}
