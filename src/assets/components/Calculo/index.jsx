import React, { useState } from "react";
import styles from './Calculo.module.css';

const Calculo = () => {
    const [peso, setPeso] = useState('');
    const [altura, setAltura] = useState('');
    const [resultado, setResultado] = useState('');
    const [categoria, setCategoria] = useState();

    const calculaImc = () => {
        const imc = (peso / (altura * altura)).toFixed(2)
        setResultado(imc);

        let categoria
                        
        if (imc < 25) {
            categoria = "Peso normal";
        } else if (imc <= 30) {
            categoria = "Sobrepeso";
        } else 
            categoria = "Obesidade";

        setCategoria(categoria)
    }

    
    
    return (
            <><header>
                <h1 className={styles.h1}>Calculadora IMC</h1>
            </header>            
            <form className={styles.form}>
            <input className={styles.input} type="number" placeholder="Seu peso" value={peso} onChange={evento => setPeso(evento.target.value)} />
            <input className={styles.input} type="number" placeholder="Sua altura" value={altura} onChange={evento => setAltura(evento.target.value)} />
            <button className={styles.button} type="button" onClick={calculaImc}>Calcular</button>
        </form><p className={styles.p}>Seu IMC é de: {resultado}</p>
            <p className={styles.p}>Categoria: {categoria}</p></>
    )
}



export default Calculo;
