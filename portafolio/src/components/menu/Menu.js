import './menu.scss'
import ListaMenu from './ListaMenu'

export default function Menu({menuOpen, setMenuOpen}) {
  return (
    <div className={'menu ' + (menuOpen && 'active')}>
        <ul>
            <ListaMenu setMenuOpen={setMenuOpen} content='Home' id='#intro' />
            <ListaMenu setMenuOpen={setMenuOpen} content='Portafolio' id='#portafolio' />
            <ListaMenu setMenuOpen={setMenuOpen} content='Works' id='#works' />
            <ListaMenu setMenuOpen={setMenuOpen} content='Testimonials' id='#testimonials' />
            <ListaMenu setMenuOpen={setMenuOpen} content='Contact' id='#contact' />
        </ul>
      
    </div>
  )
}
