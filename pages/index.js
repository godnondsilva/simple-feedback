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
          <h1 className={styles.title}>Simple Feedback Form</h1>
          {currentView === 1 ? (
            !loading ? (
              <Form currentView={currentView} setCurrentView={setCurrentView} setLoading={setLoading} />
            ) : (
              <Loading text='Submitting your information, please wait' />
            )
          ) : currentView === 2 ? (
            !loading ? (
              <Success text='Thank you for your feedback!' />
            ) : (
              <Loading text='Submitting your information, please wait' />
            )
          ) : (
            !loading ? (
              <Failed text='Something went wrong, please try again' />
            ) : (
              <Loading text='Submitting your information, please wait' />
            )
          )}
        </div>
      </div>
    </>
  )
}
