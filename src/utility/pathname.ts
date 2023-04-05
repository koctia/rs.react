export const pathName = (localHost: string) => {
  switch (localHost) {
    case '/':
      return 'Home';
    case '/about':
      return 'About';
    case '/form':
      return 'Form';
    default:
      return 'Not Page';
  }
};
