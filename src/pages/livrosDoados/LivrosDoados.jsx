// import LivroProtagonista from '../../assets/livroProtagonista.png'
import s from './livrosDoados.module.scss'
import { useState, useEffect } from 'react'
import axios from 'axios'

export default function LivrosDoados() {

    const [livros, setLivros] = useState([])

    const puxarLivros = async () => {
        const resposta = await axios.get("https://api-livros-vai-na-web-7af5.onrender.com/livros")
        setLivros(resposta.data)
    } 

    useEffect(() => {
        puxarLivros()
    }, [])

    return (
        <section className={s.livrosDoadosSection}>
            <h2>Livros Doados</h2>
            <section className={s.sectionCards}>
                {
                    livros.map((item) => (
                        <section className={s.cards}>
                            <img src={item.image_url} alt={`Capa do livro ${item.titulo}`} />
                            <div>
                                <h3>{item.titulo}</h3>
                                <p>{item.autor}</p>
                                <p>{item.categoria}</p>
                            </div>
                        </section>
                    ))
                }
                
            </section>
        </section>
    )
}