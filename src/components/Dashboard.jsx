import React from 'react'
import styles from './Dashboard.module.css'
import Clipboard from '../assets/Clipboard.png'
import { Plus, RadioButton, Trash } from 'phosphor-react'
import { useState } from 'react'


export function Dashboard (){

    const [tasks, setTasks] = useState([])

    const [input, setInput] = useState('')

    function handleAddNewTask(){

        event.preventDefault()

        setTasks([...tasks, input])

        setInput('')


    }

    return(
        <div>
            <div className={styles.wrapper}>

                <div className={styles.input}>
                    <input 
                        maxLength="50"
                        onChange={e => setInput(e.target.value)}
                        value={input}
                        className={styles.inputMsg} 
                        type="text" 
                        placeholder='Adicione uma nova tarefa'
                    />

                    <button 
                        onClick={handleAddNewTask}
                        type='submit' 
                        className={styles.inputButton}>
                            Criar <Plus/>
                    </button>
                </div>


                <div className={styles.tasksCount}>
                    <p className={styles.newTasks}>Tarefas criadas</p>
                    <p className={styles.doneTasks}>Concluidas</p>
                </div>

                    {tasks.map(task => {
                        return (
                            
                            <div className={styles.taskList}>
                                <RadioButton 
                                    size={20}
                                    className={styles.checkIcon}
                                />
                                <span className={styles.taskItem}>
                                    {task}
                                </span>
                                <Trash 
                                    className={styles.trashIcon}
                                    size={20}
                                />
                            </div>
                        )
                    
                    })}

                {/* <span className={styles.clipboard}>
                    <img src={Clipboard} alt="Clipboard" />
                </span>
                <div className={styles.msg}>
                    <h2 className={styles.msg01}>
                        Você ainda não tem tarefas cadastradas
                    </h2>
                    <h2 className={styles.msg02}>
                        Crie tarefas e organize seus itens a fazer
                    </h2> */}
                {/* </div> */}
           
            </div>
         


        </div>
     
    )
}