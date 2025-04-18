export type DeepPartial<T> = {
  [P in keyof T]?: T[P] extends object ? DeepPartial<T[P]> : T[P];
};

declare global {
  interface JSON {
    parse(
      text: string,
      reviver?: (this: any, key: string, value: any) => any
    ): unknown;
  }
}
