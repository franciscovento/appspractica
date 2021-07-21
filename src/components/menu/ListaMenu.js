
export default function ListaMenu({setMenuOpen, content, id}) {
  return (
    <div>
      <li onClick={() => setMenuOpen(false)} >
                <a href={id}>{content}</a>
            </li>
    </div>
  )
}
