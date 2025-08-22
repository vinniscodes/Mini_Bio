import Profile from './components/Profiles/Profile';
import styles from './page.module.css';
import profileStyles from './components/Profiles/Profile.module.css'; // ou .scss se estiver usando Sass



export default function Home() {
  return (
   
    <main className={styles.main}>
      <Profile />
    </main>
  );
}