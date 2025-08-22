import Image from 'next/image';
import styles from './Profile.module.css';

const Profile = () => {
  return (
    <div className={styles.profileContainer}>
      <div className={styles.profileImageContainer}>
        <Image
          src="/189996350.png" 
          alt="MyFotoHEHEHEHEHE"
          width={150}
          height={150}
          className={styles.profileImage}
          priority
        />
      </div>
      <h1 className={styles.profileName}>Vinicius Anderson </h1>
      <p className={styles.profileBio}>
       Estudante de Ciência da computação na Universidade Católica de Pernambuco & Pai de Pet.
      </p>
    </div>
  );
};

export default Profile;