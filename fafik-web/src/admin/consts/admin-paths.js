const adminPaths = {
  mainAdminPage: '/admin',
  chooseTheme: '/admin/wybierz-motyw',
  pages: '/admin',
  config: siteName => '/admin/konfiguruj/:siteName'.replace(':siteName', siteName),
  guestList: siteName => '/admin/lista-gosci/:siteName'.replace(':siteName', siteName),
  playlist: siteName => '/admin/playlista/:siteName'.replace(':siteName', siteName),
  blog: siteName => '/admin/blog/:siteName'.replace(':siteName', siteName),
  blogNewPost: siteName => '/admin/blog/:siteName/nowy-post'.replace(':siteName', siteName),
  stats: siteName => '/admin/statystyki/:siteName'.replace(':siteName', siteName),
  subscription: siteName => '/admin/abonament/:siteName'.replace(':siteName', siteName),
  gallery: siteName => '/admin/galeria/:siteName'.replace(':siteName', siteName),
  QRcode: siteName => '/admin/kod-QR/:siteName'.replace(':siteName', siteName),
};

export { adminPaths };
