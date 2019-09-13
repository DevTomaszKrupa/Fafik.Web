const getTheme = (clientPath: string) => ({
  data: {
    clientPath: 'gaja-i-stanislaw',
    header: {
      headerNames: 'Kasia i Daniel',
      sites: [
        { name: 'O NAS', path: 'o-nas' },
        { name: 'GALERIA', path: 'galeria' },
        { name: 'BLOG', path: 'blog' },
        { name: 'RSVP', path: 'rsvp' },
        { name: 'DOJAZD', path: 'dojazd' },
        { name: 'PLAN WYDARZENIA', path: 'plan-wydarzenia' },
        { name: 'PLAYLISTA', path: 'playlista' },
        { name: 'INFO DODATKOWE', path: 'info-dodatkowe' }
      ],
      mainImage: 'gaja-i-stanislaw/main-image.png',
      weddingDate: new Date(2020, 9, 12, 16, 0, 0),
      headerQuote: '"Życie płynie, mydło w płynie"',
    },
    aboutUs: {
      aboutUsPhoto: 'gaja-i-stanislaw/about-us-image.png',
      textWelcome: 'Cześć kochani!',
      aboutUs:
        `Nazywamy się Kasia Dziuba i Daniel Szyper. W roku 2020 zawieramy związek małżeński. Zaręczyliśmy się w sierpniu 2018.
        Jesteśmy bardzo szczęśliwi, iż będziemy mogli gościć Was tego wielkiego dnia, kiedy staniemy się rodziną.`,
    },
    quoteSection: {
      quote: '"Klaudynka jest najlepsza, hybryda foczki i pantery. Kocham jo i szanuje i jest mojo żono."',
      quoteAuthor: 'TOMASZ KRUPA',
    },
    gallery: {
      galleryImage: 'gaja-i-stanislaw/gallery-main.jpg',
      galleryHeader: 'galeria zdjęć',
      galleryDescription: 'Drodzy Goście, zachęcamy do obejrzenia naszej galerii zarówno przed, jak i po uroczystości.',
      cards: [
        { title: 'Przygotowania', image: 'url("http://localhost/Fafik/gaja-i-stanislaw/gallery-prep.png")' },
        { title: 'Ślub i wesele', image: 'url("http://localhost/Fafik/gaja-i-stanislaw/gallery-wedding.png")' },
        { title: 'Sesja narzeczeńska', image: 'url("http://localhost/Fafik/gaja-i-stanislaw/gallery-session.png")' }
      ]
    },
    blog: {
      header: 'Nasz blog',
      subtitle: 'Są tu nasze wpisy kierowane do Was, naszych najdroższych.',
      posts: [
        {
          image: `url("https://images.unsplash.com/photo-1553013983-15241ab69e57?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1050&q=80")`,
          date: new Date(2018, 1, 1, 12, 0, 0),
          header: 'Przygotowujemy zaproszenia, zobaczcie!'
        },
        {
          image: `url("https://images.unsplash.com/photo-1553013983-15241ab69e57?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1050&q=80")`,
          date: new Date(2018, 1, 1, 12, 0, 0),
          header: 'Przygotowujemy zaproszenia, zobaczcie!'
        },
        {
          image: `url("https://images.unsplash.com/photo-1553013983-15241ab69e57?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1050&q=80")`,
          date: new Date(2018, 1, 1, 12, 0, 0),
          header: 'Przygotowujemy zaproszenia, zobaczcie!'
        }
      ],
      showMore: 'zobacz więcej'
    },
    plan: {
      events: [
        {
          tooltip: 'Zapraszamy na uroczystość do Kościoła św. Anny w Kazimierzu Dolnym.',
          time: '16:00',
          name: 'Uroczystość zaślubin'
        },
        {
          tooltip: 'Zapraszamy na uroczystość do Kościoła św. Anny w Kazimierzu Dolnym.',
          time: '18:00',
          name: 'Pierwszy taniec'
        },
        {
          tooltip: 'Zapraszamy na uroczystość do Kościoła św. Anny w Kazimierzu Dolnym.',
          time: '20:00',
          name: 'Tort'
        },
      ]
    }
  }
});

export default {
  getTheme
};
