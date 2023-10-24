import { useState } from 'react'

function Contador() {
    //Variavel de estado => Componente
    const [valor, setValor] = useState(0);

    function addMaisUm(){
        setValor(valor + 1);
    }

    return (
    <>
    <button onClick={addMaisUm}>Adicione mais +</button>
    <div>{valor}</div>
    </>
  )
}

export default Contador