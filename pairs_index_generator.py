import os
import json

pairs_index = json.loads('{"pitch0":[],"pitch1":[],"pitch2":[],"pitch3":[],"pitch4":[]}')

folder = "data"
for dir_item in os.listdir(folder):
    json_file = json.loads(open(folder + "/" + dir_item, "r", encoding = "UTF8").read())
    for pair in json_file["pairs"]:
        json_pitch = pair["pitchAccent"]

        #only one pitch 5 value exists and appears to also fit the pitch4 category
        if json_pitch == 5:
            json_pitch = 4

        pairs_index["pitch" + str(json_pitch)].append(dir_item)

with open("js/pairs_index.js", "w", encoding = "UTF8") as pairs_index_file:
    pairs_index_file.write("const pairs_index = ")
    pairs_index_file.write(json.dumps(pairs_index))
        
