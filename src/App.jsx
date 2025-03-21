import styles from './App.module.scss'

function App() {

  return (
    <>
      <main className={styles.main}>
        <header className={styles.main__header}>
          <div className={styles.container}>
            <div className={styles.header__top}>
              <h1 className={styles.title}>Note your tasks</h1>
              <p className={styles.date}>Date</p>
            </div>
            <div className={styles.header__bottom}>
              <input type="text" placeholder='Task name' />
              <button>+</button>
            </div>
          </div>
        </header>
        <section>
          
        </section>
      </main>
    </>
  )
}

export default App
