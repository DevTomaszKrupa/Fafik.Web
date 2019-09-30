const adminPaths = {
  mainAdminPage: '/admin',
  chooseTheme: '/admin/wybierz-motyw',
  pages: '/admin/pages',
  config: (clientName: string) => '/admin/konfiguruj/:clientName'.replace(':clientName', clientName),
  guestList: (clientName: string) => '/admin/lista-gosci/:clientName'.replace(':clientName', clientName),
  playlist: (clientName: string) => '/admin/playlista/:clientName'.replace(':clientName', clientName),
  blog: (clientName: string) => '/admin/blog/:clientName'.replace(':clientName', clientName),
  blogNewPost: (clientName: string) => '/admin/blog/:clientName/nowy-post'.replace(':clientName', clientName),
  stats: (clientName: string) => '/admin/statystyki/:clientName'.replace(':clientName', clientName),
  subscription: (clientName: string) => '/admin/abonament/:clientName'.replace(':clientName', clientName),
  gallery: (clientName: string) => '/admin/galeria/:clientName'.replace(':clientName', clientName),
};

export { adminPaths };
