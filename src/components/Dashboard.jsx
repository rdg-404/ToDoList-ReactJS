import styles from './Dashboard.module.css'
import Clipboard from '../assets/Clipboard.png'
import { Plus } from 'phosphor-react'


export function Dashboard (){
    return(
        <>
            <div className={styles.wrapper}>
                <div className={styles.input}>
                    <input className={styles.inputMsg} type="text" placeholder='Adicione uma nova tarefa'/>
                    <button className={styles.inputButton}>Criar <Plus/></button>
                </div>
                <span className={styles.clipboard}>
                    <img src={Clipboard} alt="Clipboard" />
                </span>
                <div className={styles.msg}>
                    <h2 className={styles.msg01}>
                        Você ainda não tem tarefas cadastradas
                    </h2>
                    <h2 className={styles.msg02}>
                        Crie tarefas e organize seus itens a fazer
                    </h2>
            </div>
           
        </div>
         


        </>
     
    )
}