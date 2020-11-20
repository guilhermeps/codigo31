import Head from 'next/head'
import styles from '../styles/Home.module.css'

export default function Home() {
  return (
    <div className={styles.container}>
      <Head>
        <title>Create Next App</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className={styles.main}>
        <h1 className={styles.title}>
          Seja bem Vindo à <span className={styles.codigo31}>Código31</span>
        </h1>

        <p className={styles.description}>
          Nosso site está em construção. Em breve terá <span className={styles.destaque}>novidade</span>  na área.
        </p>
      </main>

      <footer className={styles.footer}>
        <p>Desenvolvido por <span className={styles.codigo31}>Código31</span></p>
      </footer>
    </div>
  )
}
