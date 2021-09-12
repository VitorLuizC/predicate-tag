import Interpolation from './Interpolation';

export type Token = string | Interpolation;

type Options = {
  strings: TemplateStringsArray;
  interpolations: unknown[];
};

function tokenize(options: Options): Token[] {
  const { strings, interpolations } = options;

  return strings.raw.reduce<Token[]>((tokens, string, index) => {
    string.split(' ').forEach((token) => {
      if (token !== '') tokens.push(token);
    });

    // index is lower than interpolations' length when there's an interpolation
    if (index < interpolations.length) {
      tokens.push(new Interpolation(interpolations[index]));
    }

    return tokens;
  }, []);
}

export default tokenize;
