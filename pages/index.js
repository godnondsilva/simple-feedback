import Head from 'next/head'
import styles from '../styles/Form.module.css'
import Rating from '../components/rating/Rating'

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
              <label htmlFor="name">Name</label>
              <input type="text" id="name" name="name" placeholder="Enter your name" />
            </div>

            <div className={styles.formGroup}>
              <label htmlFor="email">Email</label>
              <input type="email" id="email" name="email" placeholder="Enter your email" />
            </div>

            <div className={styles.formGroup}>
              <Rating />
            </div>

            <div className={styles.formGroup}>
              <label htmlFor="message">Message</label>
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
