export default function Footer() {
  return (
    <>
      <footer class="site-footer" role="contentinfo">
        <div class="container">
          <div class="footer-content">
            <nav class="footer-nav" aria-label="Navegação do rodapé">
              <ul>
                <li>
                  <a href="src/pages/politica-privacidade.html" rel="noopener">
                    Política de Privacidade
                  </a>
                </li>
                <li>
                  <a href="src/pages/termos-uso.html" rel="noopener">
                    Termos de Uso
                  </a>
                </li>
                <li>
                  <a href="src/pages/cookies.html" rel="noopener">
                    Cookies
                  </a>
                </li>
                <li>
                  <a href="src/pages/suporte.html" rel="noopener">
                    Suporte
                  </a>
                </li>
              </ul>
            </nav>
            <p class="copyright">
              © 2025 Minha Página Exemplo. Todos os direitos reservados.
            </p>
          </div>
        </div>
      </footer>
    </>
  );
}
