import Head from 'next/head'
import { useState } from 'react'
import styles from '../styles/Form.module.css'
import Rating from '../components/rating/Rating'
import { validateName, validateEmail, validateRating, validateMessage } from '../utils/validation'
import { toast, Toaster } from 'react-hot-toast'

export default function Home() {
  const [name, setName] = useState('')
  const [email, setEmail] = useState('')
  const [rating, setRating] = useState(0);
  const [message, setMessage] = useState('')

  const submit = (e) => {
    e.preventDefault();
    console.log(message.length)
    if (!validateName(name)) return toast.error('Please enter a name between 2 and 30 characters');
    if (!validateEmail(email)) return toast.error('Please enter a valid email address')
    if (!validateRating(rating)) return toast.error('Please enter a rating')
    if (!validateMessage(message)) return toast.error('Please enter a message between 2 and 80 characters')
  }

  const handleMessageChange = (e) => {
    if (e.target.value.length > 80) return;
    setMessage(e.target.value)
  }

  return (
    <>
      <Head>
        <title>Simple Feedback</title>
        <meta name="description" content="Simple Feedback Form to demonstrate the use of Google Sheets API" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Toaster />
      <div className={styles.container}>
        <div className={styles.formContainer}>
          <h1>Simple Feedback Form</h1>
          <p>Fill this form and tell us how you liked this application!</p>

          <form className={styles.form} onSubmit={submit} noValidate>
            <div className={styles.formGroup}>
              <label htmlFor="name">Name</label>
              <input type="text" value={name} onChange={(e) => setName(e.target.value)} name="name" placeholder="Enter your name" />
            </div>

            <div className={styles.formGroup}>
              <label htmlFor="email">Email</label>
              <input type="email" value={email} onChange={(e) => setEmail(e.target.value)} name="email" placeholder="Enter your email" />
            </div>

            <div className={styles.formGroup}>
              <Rating rating={rating} setRating={setRating} />
            </div>

            <div className={styles.formGroup}>
              <label htmlFor="message">Message</label>
              <textarea value={message} onChange={handleMessageChange} name="message" className={styles.message} placeholder="Enter your feedback message"></textarea>
              <span className={styles.messageLength}>{message.length}/80</span>
            </div>

            <div className={styles.submitButtonContainer}>
              <button className={styles.submitButton} type="submit">Submit</button>
            </div>
          </form>
        </div>
      </div>
    </>
  )
}
