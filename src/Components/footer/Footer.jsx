import s from '../footer/footer.module.scss'
import logoFacebook from '../../assets/logoFacebook.png'
import logoTwitter from '../../assets/logoTwitter.png'
import logoYoutube from '../../assets/logoYoutube.png'
import logoLinkedin from '../../assets/logoLinkedin.png'
import logoInstagram from '../../assets/logoInstagram.png'

export default function Footer() {
    return (
        <footer className={s.footer}>
            <section className={s.contatosFooter}>
                <p>40028922</p>
                <nav>
                    <a href=""><img src={logoFacebook} alt="Logo do Facebook na cor branca" /></a>
                    <a href=""><img src={logoTwitter} alt="Logo do Twitter na cor branca" /></a>
                    <a href=""><img src={logoYoutube} alt="Logo do YouTube na cor branca" /></a>
                    <a href=""><img src={logoLinkedin} alt="Logo do Linkedin na cor branca" /></a>
                    <a href=""><img src={logoInstagram} alt="Logo do Instagram na cor branca" /></a>
                </nav>
            </section>
            <section className={s.copyright}>
                <p>Layout desenvolvido pela Vai Na Web para fins educativos - 2024  </p>
            </section>
        </footer >
    )
}
