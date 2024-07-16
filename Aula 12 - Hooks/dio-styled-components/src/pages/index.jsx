import { useState, useEffect, useMemo, useCallback } from 'react'

const Teste = () => {

    const [name, setName ] = useState('Lucas');
    const [age, setAge] = useState(27);
    
    const handleChangeName = useCallback(() => {
        setName(prev => prev === 'Lucas' ? 'Tampinha' : 'Lucas')
    },[])
    
    const handleChangeAge = useCallback(() => {
        const newAge = 10 * age;
        console.log('age atual: ', age, newAge)
        setAge(prev => prev === 27 ? 32 : 27);
    },[age])
    

    /*
    useMemo = referência em variáveis (const, var, let)
    useCallback = referência de função 
*/
    useEffect(() => {
        //handleChangeName()
        alert('renderizei')
    }, [name]);
    
    // useMemo = guarda valores que não precisam ser alterados na reenderização
    

    const calculo = useMemo(() => {
        console.log('calculou')
        return 10 * 26589
    }, [])

    console.log('renderizou', calculo)

    return (
        <div>
            <p>
                Idade: {age}
            </p>
            <br/>
            <p>
                Nome: {name}
            </p>
            <button onClick={handleChangeName}>Alterar Nome</button>
            <br/>
            <button onClick={handleChangeAge}>Alterar Idade</button>
        </div>
    )
}

export { Teste }