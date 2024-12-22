import os
import json
import base64
import sys
import re

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

def write_results(result, text):
    if len(result) > 0:
        sys.stdout.write("\x1b[1;31m") #bold red
        print("Pair " + text + " mismatches:")
        print(", ".join(result))
    else:
        sys.stdout.write("\x1b[1;32m") #bold green
        print("Pair " + text + " test passed")
    sys.stdout.write("\x1b[1;0m") #reset

def remove_expected_fails(results, expected_fails):
    for expected_fail in expected_fails:
        new_results = []
        for result in results:
            if not re.search("^" + expected_fail + " ", result):
                new_results.append(result)
        results = new_results

    return results

write_results(pair_raw_pronunciation_mismatches, "rawPronunciation")

write_results(pair_mora_count_mismatches, "moraCount")

silenced_moras_expected_fails = ["y2", "xv", "q", "c2", "pp"]
write_results(remove_expected_fails(pair_silenced_moras_mismatches, silenced_moras_expected_fails), "silencedMoras")

write_results(pair_bad_sound_encoding, "soundData base64 encoding")
