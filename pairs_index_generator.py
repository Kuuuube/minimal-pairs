import os
import json

pairs_index = json.loads("[]")

folder = "data"
for dir_item in os.listdir(folder):
    if os.path.isfile(folder + "/" + dir_item):
        pairs_index.append(dir_item)

with open("js/pairs_index.js", "w", encoding = "UTF8") as pairs_index_file:
    pairs_index_file.write("const pairs_index = ")
    pairs_index_file.write(json.dumps(pairs_index))
        
