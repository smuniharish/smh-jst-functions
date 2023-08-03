interface LocaleInterface {
  id: number;
  language?: string | null;
  location?: string | null;
  tag: string;
}
interface LocaleKeyInterface {
  [c: string]: LocaleInterface;
}
export { LocaleInterface, LocaleKeyInterface };
