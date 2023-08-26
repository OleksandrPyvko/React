import styles from './CityItem.module.css';

function CityItem({ city }) {
  console.log(city);

  return (
    <li className={styles.cityItem}>
      <span className={styles.emoji}>{}</span>
    </li>
  );
}

export default CityItem;
