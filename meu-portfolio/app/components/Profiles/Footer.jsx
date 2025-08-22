import styles from './Footer.module.css';

const Footer = () => {
  const currentYear = new Date().getFullYear(); 
  return (
    <footer className={styles.footer}>
      <p>
        © {currentYear} | Desenvolvido por{' Vinicius Anderson :) '}
        <a
          href="https://github.com/vinniscodes"
          target="_blank"
          rel="noopener noreferrer"
          className={styles.link}
        >
          vinniscodes
        </a>
      </p>
    </footer>
  );
};

export default Footer;