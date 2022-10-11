import { useSelector } from 'react-redux';

import styles from './ThankYou.module.scss';

const ThankYou = () => {
  const { firstName, lastName } = useSelector((state) => state);
  return (
    <div className={styles.thank_you_page}>
      <h2 data-testid='h2-data'>
        {firstName} {lastName} Thank You for Successful Registration
      </h2>
    </div>
  );
};

export default ThankYou;
