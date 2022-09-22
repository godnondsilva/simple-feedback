import Head from 'next/head'
import styles from '../styles/Form.module.css'

export default function Home() {
  return (
    <>
      <Head>
        <title>Simple Feedback</title>
        <meta name="description" content="Simple Feedback Form to demonstrate the use of Google Sheets API" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <div className={styles.container}>
        <div className={styles.formContainer}>
          <h1>Simple Feedback Form</h1>
          <p>Fill this form and tell us how you liked this application!</p>

          <form className={styles.form}>
            <div className={styles.formGroup}>
              <label for="name">Name</label>
              <input type="text" id="name" name="name" placeholder="Enter your name" />
            </div>

            <div className={styles.formGroup}>
              <label for="email">Email</label>
              <input type="email" id="email" name="email" placeholder="Enter your email" />
            </div>

            <div className={styles.formGroup}>
              <label for="rating">Rating</label>
              <div className={styles.checkboxContainer}>
                <div className={styles.checkboxGroup}>
                  <input type="radio" />
                  <span className={styles.rating}>1</span>
                </div>
                <div className={styles.checkboxGroup}>
                  <input type="radio" />
                  <span className={styles.rating}>2</span>
                </div>
                <div className={styles.checkboxGroup}>
                  <input type="radio" />
                  <span className={styles.rating}>3</span>
                </div>
                <div className={styles.checkboxGroup}>
                  <input type="radio" />
                  <span className={styles.rating}>4</span>
                </div>
                <div className={styles.checkboxGroup}>
                  <input type="radio" />
                  <span className={styles.rating}>5</span>
                </div>
                <div className={styles.checkboxGroup}>
                  <input type="radio" />
                  <span className={styles.rating}>6</span>
                </div>
                <div className={styles.checkboxGroup}>
                  <input type="radio" />
                  <span className={styles.rating}>7</span>
                </div>
                <div className={styles.checkboxGroup}>
                  <input type="radio" />
                  <span className={styles.rating}>8</span>
                </div>
                <div className={styles.checkboxGroup}>
                  <input type="radio" />
                  <span className={styles.rating}>9</span>
                </div>
                <div className={styles.checkboxGroup}>
                  <input type="radio" />
                  <span className={styles.rating}>10</span>
                </div>
              </div>
            </div>

            <div className={styles.formGroup}>
              <label for="message">Message</label>
              <textarea id="message" name="message" className={styles.message} placeholder="Enter your feedback message"></textarea>
            </div>

            <div className={styles.submitButtonContainer}>
              <button className={styles.submitButton}>Submit</button>
            </div>
          </form>
        </div>
      </div>
    </>
  )
}
