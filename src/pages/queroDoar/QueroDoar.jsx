import s from './queroDoar.module.scss'
import livro from '../../assets/livro.png'
import { useState } from 'react'
import axios from 'axios'

export default function QueroDoar() {

    const [titulo, setTitulo] = useState("")
    const [categoria, setCategoria] = useState("")
    const [autor, setAutor] = useState("")
    const [image_url, setImage_url] = useState("")

    const capturaTitulo = (e) => {
        setTitulo(e.target.value)
    }
    const capturaCategoria = (e) => {
        setCategoria(e.target.value)
    }
    const capturaAutor = (e) => {
        setAutor(e.target.value)
    }
    const capturaImage_url = (e) => {
        setImage_url(e.target.value)
    }

    
    const envioDados = async() => {
        
        const dadosPEnviar = {
            titulo,
            categoria,
            autor,
            image_url
        }

        await axios.post("https://api-livros-vai-na-web-7af5.onrender.com/doar", dadosPEnviar)
    }


    return(
        <section className={s.queroDoarSection}>
            <p>Por favor, preencha o formulário com suas informações e as informações do Livro</p>
            <form onSubmit={(e)=>e.preventDefault()}>
                <div>
                    <img src={livro} alt="Imagem com ícone de livro com borda azul" />
                    <h2>Informações do Livro</h2>
                </div>
                <input type="text"  placeholder="Título" onChange={capturaTitulo} />
                <input type="text"  placeholder="Categoria" onChange={capturaCategoria} />
                <input type="text"  placeholder="Autor" onChange={capturaAutor} />
                <input type="text"  placeholder="Link da Imagem" onChange={capturaImage_url} />
                <input type="submit" value="Doar" className={s.buttonDoar} onClick={envioDados}/>
            </form>
        </section>
    )
}