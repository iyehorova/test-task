type Args =
  | string[]
  | number[]
  | [string, number]
  | [string, null]
  | [string, string | null];
type FunctionDecorator = (...args: Args) => void;

// eslint-disable-next-line @typescript-eslint/no-unsafe-function-type
export function debounce(callback: Function, delay: number): FunctionDecorator {
  let timer = 0;

  return (...args: Args) => {
    window.clearTimeout(timer);

    timer = window.setTimeout(() => callback(...args), delay);
  };
}
