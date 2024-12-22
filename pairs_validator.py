import os
import json
import base64
import sys

def is_base64(s):
    try:
        base64.b64decode(s, validate = True)
        return True
    except Exception:
        return False

pair_raw_pronunciation_mismatches = []
pair_mora_count_mismatches = []
pair_silenced_moras_mismatches = []
pair_bad_sound_encoding = []

dir_path = "data"
for filename in os.listdir(dir_path):
    json_data = json.load(open(dir_path + "/" + filename))

    raw_pronunciation = []
    mora_count = []
    silenced_moras = []
    for pair in json_data["pairs"]:
        raw_pronunciation.append(pair["rawPronunciation"])
        mora_count.append(pair["moraCount"])
        silenced_moras.append(pair["silencedMoras"])

        if not is_base64(pair["soundData"]):
            pair_bad_sound_encoding.append(filename)

    if len(set(raw_pronunciation)) > 1:
        pair_raw_pronunciation_mismatches.append(filename + " [" + ", ".join(raw_pronunciation) + "]")

    if len(set(mora_count)) > 1:
        pair_mora_count_mismatches.append(filename + " [" + ", ".join(map(str, mora_count)) + "]")

    if len(set(map(str, sorted(silenced_moras)))) > 1:
        pair_silenced_moras_mismatches.append(filename + " [" + ", ".join(map(str, silenced_moras)) + "]")

if len(pair_raw_pronunciation_mismatches) > 0:
    sys.stdout.write("\x1b[1;31m") #bold red
    print("Pair rawPronunciation mismatches:")
    print(", ".join(pair_raw_pronunciation_mismatches))
else:
    sys.stdout.write("\x1b[1;32m") #bold green
    print("Pair rawPronunciation test passed")
sys.stdout.write("\x1b[1;0m") #reset

if len(pair_mora_count_mismatches) > 0:
    sys.stdout.write("\x1b[1;31m") #bold red
    print("Pair moraCount mismatches:")
    print(", ".join(pair_mora_count_mismatches))
else:
    sys.stdout.write("\x1b[1;32m") #bold green
    print("Pair moraCount test passed")
sys.stdout.write("\x1b[1;0m") #reset

if len(pair_silenced_moras_mismatches) > 0:
    sys.stdout.write("\x1b[1;31m") #bold red
    print("Pair silencedMoras mismatches:")
    print(", ".join(pair_silenced_moras_mismatches))
else:
    sys.stdout.write("\x1b[1;32m") #bold green
    print("Pair silencedMoras test passed")
sys.stdout.write("\x1b[1;0m") #reset

if len(pair_bad_sound_encoding) > 0:
    sys.stdout.write("\x1b[1;31m") #bold red
    print("Pair soundData bad base64 encoding:")
    print(", ".join(pair_bad_sound_encoding))
else:
    sys.stdout.write("\x1b[1;32m") #bold green
    print("Pair soundData encoding test passed")
sys.stdout.write("\x1b[1;0m") #reset
