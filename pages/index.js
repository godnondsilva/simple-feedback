import Head from 'next/head'
import { useState } from 'react'
import { Toaster } from 'react-hot-toast'
import Failed from '../components/failed/Failed'

import Form from '../components/form/Form'
import Loading from '../components/loading/Loading'
import Success from '../components/success/Success'

import styles from '../styles/Form.module.css'

export default function Home() {
  const [currentView, setCurrentView] = useState(1);
  const [loading, setLoading] = useState(false);

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
          {currentView === 1 ? (
            <Form currentView={currentView} setCurrentView={setCurrentView} setLoading={setLoading} />
          ) : currentView === 2 ? (
            !loading ? (
              <Success text='Thank you for your feedback!' />
            ) : (
              <Loading text='Submitting your information, please wait' />
            )
          ) : (
            <Failed text="Your response didn't go through!" />
          )}
        </div>
      </div>
    </>
  )
}
