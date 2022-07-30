import styles from "./Form.module.css";

export function Form() {
    return (
      <div>
        <form className={styles.form} id="form">
        <input className={styles.input__search} 
          id="input__search"
          type="search"
          placeholder="Name or Number"
          required
        />
      </form>
      </div>
    
    );
    };

    export default Form;