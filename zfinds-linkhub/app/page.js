export default function Home() {
  const links = [
    {
      title: "Vitrine Shopee",
      desc: "Todos os achados selecionados da ZFinds em um só lugar.",
      url: "https://collshp.com/zpicks.find810?view=storefront",
      cta: "ACESSAR VITRINE",
      glow: "yellow"
    },
    {
      title: "Instagram ZFinds",
      desc: "Veja os produtos, reels e ofertas que saem todos os dias.",
      url: "https://ig.me/j/AbZZo0_X7Z0AL72v/",
      cta: "IR PARA O INSTAGRAM",
      glow: "pink"
    },
    {
      title: "Grupo Telegram",
      desc: "Entre no grupo VIP e receba as promoções antes de todo mundo.",
      url: "https://t.me/+tqQwgn69URsxNzQ5",
      cta: "ENTRAR NO GRUPO",
      glow: "blue"
    }
  ];

  return (
    <main className="page">
      <div className="background-glow top" />
      <div className="background-glow bottom" />

      <section className="container">
        <div className="badge">Hub Oficial</div>

        <h1 className="logo">
          <span className="logo-white">Z</span>
          <span className="logo-yellow">Finds</span>
        </h1>

        <p className="subtitle">
          Promoções esportivas, achados insanos e produtos que realmente valem a pena.
        </p>

        <div className="links">
          {links.map((link, index) => (
            <a
              key={index}
              href={link.url}
              target="_blank"
              rel="noopener noreferrer"
              className={`card ${link.glow}`}
            >
              <div className="card-content">
                <div>
                  <h2>{link.title}</h2>
                  <p>{link.desc}</p>
                </div>
                <span className="arrow">→</span>
              </div>

              <div className="cta">{link.cta}</div>
            </a>
          ))}
        </div>

        <div className="footer-box">
          <p className="footer-mini">ZFinds</p>
          <p className="footer-main">Ofertas atualizadas diariamente</p>
        </div>
      </section>
    </main>
  );
}