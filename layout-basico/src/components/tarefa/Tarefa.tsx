import { useState, useEffect } from 'react'

//Tarefa é o componente
function Tarefa() {
    //isCompletado é a variável
    const [isCompletado, setIsCompletado] = useState(false)
    //tarefa é a variável
    const [tarefa, setTarefa] = useState('') //let tarefa = ""
    
    // o useEffect vai ficar observando as variaveis tarefa e isCompletado
    useEffect(() => {
        if (isCompletado === true) {
            setTarefa('Parabéns! Você concluiu a tarefa!')
        }
    }, [isCompletado])

    return (
        <div>
            <h1>Tarefa</h1>
            <h3>{tarefa}</h3>
            <p>Conclua a tarefa</p>
            <button onClick={() => setIsCompletado(true)}>Concluir Tarefa</button>
        </div>
    )
}

export default Tarefa