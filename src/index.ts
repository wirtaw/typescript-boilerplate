function greet(name: string): string {
  return `Hello, ${name}!`;
}

const message: string = greet('User');
// eslint-disable-next-line no-undef
console.info(message);
