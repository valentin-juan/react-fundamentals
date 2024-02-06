import { Post } from './Post';
import { Header } from './components/Header';

import './global.css';

export function App() {
  return (
    <>
    <Header />
      <Post 
        author="Juan Valentin"
        content="Test"/>
      <Post 
        author="Rafaele Valentin"
        content="Um novo post muito legal"/>
    </>
  )
}
