// DownloadPDF.js

import styles from '@/styles/Home.module.css';

const DownloadPDF = ({ link, text }) => (
  <div >
    <a href={link} target="_blank" download>
      <p className={styles.text} style={{ color: 'black' }}>
        {text}
      </p>
      <img src="/icons/brand.png" alt="Build your brand as a developer" className={styles.logo} />
    </a>
  </div>
);

export default DownloadPDF;
