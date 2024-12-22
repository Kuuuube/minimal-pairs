import os
import json

pairs_index = json.loads('{"pitch0":[],"pitch1":[],"pitch2":[],"pitch3":[],"pitch4":[], "devoiced":[]}')

folder = "data"
for dir_item in sorted(os.listdir(folder)):
    json_file = json.loads(open(folder + "/" + dir_item, "r", encoding = "UTF8").read())
    for pair in json_file["pairs"]:
        json_pitch = pair["pitchAccent"]

        #only one pitch 5 value exists and appears to also fit the pitch4 category
        if json_pitch == 5:
            json_pitch = 4

        pairs_index["pitch" + str(json_pitch)].append(dir_item)


    unvoiced_kanas = "かきくけこさしすせそたちつてとはひふへほ"
    devoiceable_kanas = "きくしすちつひふ"
    devoiceable = False
    devoiced = False
    for kana in json_file["kana"]:
        if kana in unvoiced_kanas:
            if devoiceable == True:
                devoiced = True
            elif kana in devoiceable_kanas:
                devoiceable = True
        else:
            devoiceable = False

    if devoiced:
        pairs_index["devoiced"].append(dir_item)

with open("js/pairs_index.js", "w", encoding = "UTF8") as pairs_index_file:
    pairs_index_file.write("const pairs_index = ")
    pairs_index_file.write(json.dumps(pairs_index))
        
