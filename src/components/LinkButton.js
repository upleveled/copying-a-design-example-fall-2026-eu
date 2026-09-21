import styles from './LinkButton.module.scss';

export default function LinkButton(props) {
  return (
    <a
      href={props.href}
      className={`${styles.linkButton} ${props.dark ? styles.linkButtonDark : ''}`}
    >
      {props.children}
    </a>
  );
}
