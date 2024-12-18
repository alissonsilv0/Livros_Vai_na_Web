import LivroProtagonista from '../../assets/livroProtagonista.png'
import s from './livrosDoados.module.scss'

export default function LivrosDoados() {
    return (
        <section className={s.livrosDoadosSection}>
            <h2>Livros Doados</h2>
            <section className={s.sectionCards}>
                <section>
                    <img src={LivroProtagonista} alt="Capa do livro Protagonista na cor vermelha com nome escrito na diagonal na cor branca" />
                    <div>
                        <h3>O protagonista</h3>
                        <p>Susanne Andrade</p>
                        <p>Ficção</p>
                    </div>
                </section>
            </section>
        </section>
    )
}