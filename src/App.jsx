import { Post } from './Post';
import { Header } from './components/Header';
import { Sidebar } from './components/Sidebar';

import styles from './App.module.css';

import './global.css';

export function App() {
  return (
    <>
      <Header />
      <div className={styles.wrapper}>
        <Sidebar />
        <main>
          <Post 
            author="Juan Valentin"
            content="Test"/>
          <Post 
            author="Rafaele Valentin"
            content="Um novo post muito legal"/>
        </main>
      </div>
    </>
  )
}
