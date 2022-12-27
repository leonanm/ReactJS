// JSX = Javascript + XML (HTML)

import {Header} from './components/Header';
import {Post} from './components/Post';
import { Sidebar } from './components/Sidebar';

import styles from './App.module.css'
import './global.css';





export function App() {

  return (
    <div>
      <Header/>
      <div className={styles.wrapper}>
        <Sidebar />
          <main>
            <Post 
                author="Leonan Moreira" 
                content="Lorem ipsum dolor, sit amet consectetur adipisicing elit. Cupiditate aspernatur corrupti ipsum optio reiciendis quae nesciunt veniam vitae adipisci? Accusantium tenetur rem sint error, ullam quaerat odit optio earum dicta!"
            />

            <Post
              author="Roberto Douglas"
              content="Um post muito legal"
            />
          </main>
      </div>
    </div>
  )
}
 