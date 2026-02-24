export default function Header() {
  return (
    <>
      <header>
        <div className="header start">
          <h1>Minha Página Exemplo</h1>
          <nav className="header start nav">
            <ul>
              <li>
                <a href="#" className="active" id="home">
                  Início
                </a>
              </li>
              <li>
                <a href="#about" id="about">
                  Sobre
                </a>
              </li>
              <li>
                <a href="#contact" id="contact">
                  Contato
                </a>
              </li>
            </ul>
          </nav>
        </div>
        <div className="wellcome">
          <h2>Bem-vindo ao Futuro do Desenvolvimento Web</h2>
          <p>
            Criando experiências digitais excepcionais com texnologia moderna e
            design responsivo.
          </p>
        </div>
      </header>
    </>
  );
}
