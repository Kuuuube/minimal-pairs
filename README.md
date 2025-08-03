# Minimal Pairs

A backup of the コツ minimal pairs test. The original [minimal pairs test](https://kotu.io/tests/pitchAccent/perception/minimalPairs) and コツ ([kotu.io](https://kotu.io/)) were created by [k3zi](https://github.com/k3zi).

## Differences from コツ Minimal Pairs

- Fully rewritten backend to support static hosting.

- Added strict vs lazy pair finding option when sorting for pattern types.

- Optimized asset sizes for faster loading, perfect score on Google's Lighthouse audit.

- Customizable keyboard shortcuts are available.

## Options

### Patterns

- `Heiban / Odaka`: Allows for selecting or deselecting Heiban and Odaka pitch patterns.

- `Atamadaka`: Allows for selecting or deselecting Atamadaka pitch patterns.

- `Nakadaka`: Allows for selecting or deselecting three different Nakadaka pitch patterns.

### Other

- `Only Devoiced Words`: Only shows words containing devoicing.

- `Strict Pair Finding`: Only shows pairs where both words in the pair belong to a selected pattern. The default behavior shows any pair containing at least one of the selected patterns.

- `Pause After Corrent Answer`: Disables automatically advancing to the next pair after a correct answer is submitted.

## Shortcuts

- `Answer buttons`: The keybind to use to click each answer button.

- `Continue`: The keybind to use to click the continue button.

- `Play Audio`: The keybind to use to replay audio.

## Online Usage

1. Visit [Minimal Pairs](https://kuuuube.github.io/minimal-pairs).

## Local Server Usage

1. Install Python 3: [Download link](https://www.python.org/downloads/)

2. Run the `run.bat` or `run.sh` script.

3. Open a browser and visit the link in the command output.
