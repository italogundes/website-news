import { useState } from 'react';
import styles from './css/Layout.module.css';
import Header from './Header';

const Layout = ({ children }) => {
  const [dataClass, setDataClass] = useState(null);

  const handleDataClass = (data) => {
    setDataClass(data);
  };

  return (
    <div className={`container ${styles.divGeral}`}>
      <div>
        {/* className={`${dataClass && styles.upMenu}`} classe da div acima*/}
        <Header activeClassMobile={handleDataClass} />
        {children}
      </div>
    </div>
  );
};

export default Layout;
