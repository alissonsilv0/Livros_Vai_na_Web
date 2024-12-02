import { BrowserRouter, Routes, Route, Link } from 'react-router-dom'
import Inicio from '../../pages/inicio/Inicio.jsx'
import LivrosDoados from '../../pages/livrosDoados/LivrosDoados.jsx'
import QueroDoar from '../../pages/queroDoar/QueroDoar.jsx'
import logoHeader from '../../assets/logoHeader.png'
import lupa from '../../assets/lupa.png'
import s from './header.module.scss'

export default function Header() {
    return (
        <BrowserRouter>
            <header className={s.header}>   
                <section className={s.logoHeader}>
                    <img src={logoHeader} alt="Livros empilhados" />
                    <h1>Livros Vai na Web</h1>
                </section>
                <nav className={s.navHeader}>
                    <ul>
                        <li><Link className={s.link} to='/' >Inicio</Link></li>
                        <li><Link className={s.link} to='/livros-doados'>Livros Doados</Link></li>
                        <li><Link className={s.link} to='/quero-doar'>Quero Doar</Link></li>
                    </ul>
                </nav>
                <section className={s.barraDeBusca}>
                    <input type="search" name="" id="" placeholder='O que você procura?' />
                    <button><img src={lupa} alt="Imagem de lupa branca" /></button>
                </section>
            </header>

            <Routes>
                <Route path='/' element={<Inicio />}/>
                <Route path='/livros-doados'element={<LivrosDoados />}/>
                <Route path='/quero-doar' element={<QueroDoar />}/>
            </Routes>

        </BrowserRouter>


    )
}