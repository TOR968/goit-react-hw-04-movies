import styles from './PageHeading.module.css';

export default function PageHeading({ cls, text }) {
  return <h1 className={styles[cls]}>{text}</h1>;
}
