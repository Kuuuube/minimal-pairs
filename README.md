# Minimal Pairs

A backup of the コツ minimal pairs test. The original minimal pairs test and コツ ([kotu.io](https://kotu.io/)) were created by [k3zi](https://github.com/k3zi).

## Differences from コツ Minimal Pairs

- Fully rewritten backend to support static hosting.

- No login required.

- Added strict vs lazy pair finding option when sorting for pattern types.

- Optimized asset sizes for faster loading, perfect score on Google's Lighthouse audit.

## Options

### Patterns

- `Heiban / Odaka`: Allows for selecting or deselecting Heiban and Odaka pitch patterns.

- `Atamadaka`: Allows for selecting or deselecting Atamadaka pitch patterns.

- `Nakadaka`: Allows for selecting or deselecting three different Nakadaka pitch patterns.

### Other

- `Only Devoiced Words`: Only shows words containing devoicing.

- `Strict Pair Finding`: Only shows pairs where both words in the pair belong to a selected pattern. The default behavior shows any pair containing at least one of the selected patterns.

## Online Usage

1. Visit [Minimal Pairs](https://kuuuube.github.io/minimal-pairs).

## Local Server Usage

1. Install Python 3: [Download link](https://www.python.org/downloads/)

2. Open a terminal in the repo's root directory and run:

```
python -m http.server --bind localhost
```

3. Open a browser and visit the link in the command output.
