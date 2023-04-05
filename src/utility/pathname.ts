export const pathName = (localHost: string) => {
  switch (localHost) {
    case '/':
      return 'Home';
      break;
    case '/about':
      return 'About';
      break;
    case '/form':
      return 'Form';
      break;
    default:
      return 'Not Page';
  }
};
