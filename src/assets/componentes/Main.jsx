export default function Main() {
  return (
    <>
      <main>
        <div className="sucesso">
          <div className="sucesso container">
            <blockquote>
              <h2>
                O sucesso é a soma de pequenos esforços repetidos dia após dia.
              </h2>
              <cite>-- Rovert Collier</cite>
            </blockquote>
          </div>
        </div>
        <section class="cards-section">
          <div class="container">
            <div class="cards-grid">
              <article class="card">
                <img
                  src="https://picsum.photos/400/200?random=1"
                  alt="Desenvolvimento Frontend"
                  class="card-image"
                  loading="lazy"
                />
                <h3>Desenvolvimento Frontend</h3>
                <p>
                  Criação de interfaces modernas e responsivas utilizando as
                  mais recentes tecnologias web.
                </p>
              </article>

              <article class="card">
                <img
                  src="https://picsum.photos/400/200?random=2"
                  alt="Design Responsivo"
                  class="card-image"
                  loading="lazy"
                />
                <h3>Design Responsivo</h3>
                <p>
                  Layouts que se adaptam perfeitamente a qualquer dispositivo,
                  desde smartphones até desktops.
                </p>
              </article>

              <article class="card">
                <img
                  src="https://picsum.photos/400/200?random=3"
                  alt="Performance e SEO"
                  class="card-image"
                  loading="lazy"
                />
                <h3>Performance e SEO</h3>
                <p>
                  Otimização avançada para garantir carregamento rápido e melhor
                  posicionamento nos buscadores.
                </p>
              </article>

              <article class="card">
                <img
                  src="https://picsum.photos/400/200?random=4"
                  alt="Acessibilidade Web"
                  class="card-image"
                  loading="lazy"
                />
                <h3>Acessibilidade Web</h3>
                <p>
                  Desenvolvimento inclusivo seguindo as diretrizes WCAG para
                  atender todos os usuários.
                </p>
              </article>

              <div class="featured-card">
                <h2>Transforme Sua Presença Digital</h2>
                <p>
                  Junte-se a centenas de empresas que já transformaram seus
                  negócios com nossas soluções web inovadoras e estratégias
                  digitais eficazes.
                </p>
              </div>
            </div>
          </div>
        </section>
      </main>
    </>
  );
}
