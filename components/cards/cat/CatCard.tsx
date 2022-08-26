import Image from 'next/image';
import styles from './CatCard.module.css';

export interface ICatCard {
  tag: string;
  title: string;
  body: string;
  author: string;
  time: string;
}

const CatCard: React.FC<ICatCard> = ({ author, body, tag, time, title }) => {
  return (
    <div className={styles.container}>
      <div className={styles.card}>
        <div className={styles.card_header}>
          <Image
            src="porsche-car.jpg"
            alt="card_image"
            className={styles.card_image}
            width="600"
            height="400"
          />
        </div>
        <div className={styles.card_body}>
          <span className={`${styles.tag} ${styles['tag-blue']}`}>{tag}</span>
          <h4>{title}</h4>
          <p>{body}</p>
        </div>
        <div className={styles.card_footer}>
          <div className={styles.user}>
            <Image
              src="https://i.pravatar.cc/40?img=3"
              alt="user_image"
              className={styles.user_image}
              width="40"
              height="40"
            />
            <div className={styles.user_info}>
              <h5>{author}</h5>
              <small>{time}</small>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CatCard;
