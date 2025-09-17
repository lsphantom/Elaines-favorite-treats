import './footer.css'

export default function Footer() {
  return (
    <footer className="site-footer">
      <div className="container footer-inner">
        <div>© {new Date().getFullYear()} Elaine's Favorite Treats</div>
        <div className="socials">contact@elaines.treats</div>
      </div>
    </footer>
  )
}
