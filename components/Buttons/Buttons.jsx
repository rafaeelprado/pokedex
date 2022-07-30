import styles from "./Buttons.module.css";

export function Buttons() {
  return (
    
      <div className={styles.buttons} type="button">
        <button className={styles.button} id="btn-prev">Prev &lt;</button>
        <button className={styles.button} id="btn-next">Next &gt;</button>
      </div>
    

  );
};

export default Buttons;