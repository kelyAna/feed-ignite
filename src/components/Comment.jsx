import { ThumbsUp, Trash } from 'phosphor-react'

import styles from './Comment.module.css'

export function Comment() {
  return(
    <div className={styles.comment}>
      <img src="https://github.com/kelyAna.png" alt=""/>

      <div className={styles.commentBox}>
        <div className={styles.commentContent}>
          <header>
            <div className={styles.authorAndTime}>
              <strong>Ana Kely</strong>
              <time title="4 de julho, às 22:14" dateTime="2022-07-04 22:14:00">Há cerca de 1h</time>
            </div>

            <button title="Deletar comentário">
              <Trash size={20}/>
            </button>
          </header>
          <p>Muito bom Devon, parabéns!! 👏👏</p>
        </div>
        <footer>
          <button>
            <ThumbsUp />
            Aplaudir <span>20</span>
          </button>
        </footer>
      </div>
    </div>
  )
}