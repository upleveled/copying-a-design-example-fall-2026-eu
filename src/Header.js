import LinkButton from './components/LinkButton';
import styles from './Header.module.scss';

export default function Header() {
  return (
    <header className={styles.header}>
      <div className={styles.headerBanner}>
        <div>
          <span>What's New</span>
          Sendr V3.2 —Smarter Sequencing, Sharper Lead Targeting & a Rebuilt
          Unibox
        </div>
      </div>

      <nav className={styles.headerNav}>
        <div>
          <a href="#a">
            <img
              src="/images/sendr-logo.svg"
              alt="Sendr"
              width="119"
              height="28"
            />
          </a>
        </div>
        <div className={styles.headerNavLinks}>
          <a href="#a">Platform</a>
          <a href="#a">Use cases</a>
          <a href="#a">Pricing</a>
          <a href="#a">Book a demo</a>
        </div>
        <div className={styles.headerNavLinkButtons}>
          <LinkButton href="#a">Sign in</LinkButton>
          <LinkButton href="#a" dark={true}>
            Try free
          </LinkButton>
        </div>
      </nav>
    </header>
  );
}
