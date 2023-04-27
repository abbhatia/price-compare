export function getMessage() {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve("hello world");
    }, 300);
  });
}
