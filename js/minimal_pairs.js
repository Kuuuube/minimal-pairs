import {pairs_index} from "./pairs_index.js"

// globals
let current_correct_answer_button = -1;
let current_correct_answer = "";
let active_pitch_type = "";

let heiban_count = 0;
let correct_heiban_count = 0;
let atamadaka_count = 0;
let correct_atamadaka_count = 0;
let nakadaka_count = 0;
let correct_nakadaka_count = 0;


function start_test() {
    document.getElementById("start-info").classList.add("element-hidden");
    document.getElementById("test-area").classList.remove("element-hidden");
    fetch_random_pair();
}

function submit_answer(answer) {
    let is_correct_answer = false;
    if (answer === current_correct_answer_button) {
        is_correct_answer = true;
    }
    update_answer_stats(active_pitch_type, is_correct_answer);
    update_history(current_correct_answer, is_correct_answer);
    show_graded_buttons();
    if (is_correct_answer) {
        setTimeout(fetch_random_pair, 750);
    } else {
        show_continue_button();
    }
}

function show_continue_button() {
    document.getElementById("continue-button").classList.remove("continue-hidden");
}

function hide_continue_button() {
    document.getElementById("continue-button").classList.add("continue-hidden");
}

function update_answer_stats(pitch_type, is_correct_answer) {
    let is_correct_answer_int = is_correct_answer ? 1 : 0;
    if (pitch_type === "heiban") {
        correct_heiban_count += is_correct_answer_int;
        heiban_count += 1;
        document.getElementById("heiban-answers").innerHTML = "<strong>Heiban / Odaka:</strong> " + correct_heiban_count + " of " + heiban_count + " (" + Math.floor(correct_heiban_count / heiban_count * 100) + "%)";
    } else if (pitch_type === "atamadaka") {
        correct_atamadaka_count += is_correct_answer_int;
        atamadaka_count += 1;
        document.getElementById("atamadaka-answers").innerHTML = "<strong>Atamadaka:</strong> " + correct_atamadaka_count + " of " + atamadaka_count + " (" + Math.floor(correct_atamadaka_count / atamadaka_count * 100) + "%)";
    } else if (pitch_type === "nakadaka") {
        correct_nakadaka_count += is_correct_answer_int;
        nakadaka_count += 1;
        document.getElementById("nakadaka-answers").innerHTML = "<strong>Nakadaka:</strong> " + correct_nakadaka_count + " of " + nakadaka_count + " (" + Math.floor(correct_nakadaka_count / nakadaka_count * 100) + "%)";
    }
    let correct_all_count = correct_heiban_count + correct_atamadaka_count + correct_nakadaka_count;
    let all_count = heiban_count + atamadaka_count + nakadaka_count;
    document.getElementById("all-answers").innerHTML = "<strong>All:</strong> " + correct_all_count + " of " + all_count + " (" + Math.floor(correct_all_count / all_count * 100) + "%)<br>";
}

function update_history(correct_answer, is_correct_answer) {
    let success_failure = "danger"
    if (is_correct_answer) {
        success_failure = "success"
    }
    let new_list_item = '<div class="list-group-item list-group-item-' + success_failure + '">' + correct_answer + "</div>";
    document.getElementById("pairs-history").innerHTML = new_list_item + document.getElementById("pairs-history").innerHTML;
}

function update_answer_buttons(json_data, correct_answer_index) {
    document.getElementById("answer-button-row").innerHTML = "";
    document.getElementById("answer-button-row").classList.remove("element-hidden");
    let graded_answer_button_row = document.getElementById("graded-answer-button-row");
    graded_answer_button_row.innerHTML = '';
    for (const [index, currentValue] of json_data["pairs"].entries()) {
        let raw_pronunciation = currentValue.rawPronunciation;
        let accented_mora = currentValue["accentedMora"];
        let entry = output_accent_plain_text(raw_pronunciation, accented_mora);
        let new_answer_button = document.createElement("div");
        new_answer_button.classList.add("col");
        new_answer_button.innerHTML = '<div class="d-grid"><button type="button" class="btn btn-primary">' + entry + '</button></div>';
        new_answer_button.addEventListener("click", () => {submit_answer(index)})
        document.getElementById("answer-button-row").appendChild(new_answer_button);

        let sound_data = currentValue["soundData"];
        let button_sound_player = '<audio id="audio_index_' + index + '"src="data:audio/ogg;base64,' + sound_data + '" type="audio/mpeg"></audio>';

        let graded_answer_button_row_wrapper = document.createElement("div");
        graded_answer_button_row_wrapper.classList.add("col");

        let graded_answer_button_row_element = document.createElement("div");
        graded_answer_button_row_element.classList.add("d-grid");
        if (index === correct_answer_index) {
            graded_answer_button_row_element.innerHTML = button_sound_player + '<button type="button" class="btn btn-success">' + entry + '</button>';
        } else {
            graded_answer_button_row_element.innerHTML = button_sound_player + '<button type="button" class="btn btn-danger">' + entry + '</button>';
        }
        graded_answer_button_row_element.addEventListener("click", () => {document.getElementById("audio_index_" + index).play()})

        graded_answer_button_row_wrapper.appendChild(graded_answer_button_row_element);

        graded_answer_button_row.classList.add("element-hidden");
        graded_answer_button_row.appendChild(graded_answer_button_row_wrapper);
    };
}

function update_audio(json_data, pairs_index) {
    let pairs_audio = {};
    for (const [index, currentValue] of json_data["pairs"].entries()) {
        pairs_audio[index] = currentValue["soundData"];
    };
    let sound_data = json_data["pairs"][pairs_index]["soundData"];
    document.getElementById("pair-sound-player").src = "data:audio/ogg;base64," + sound_data;
}

function set_pitch(json_data, pairs_index) {
    let pitch_accent = json_data["pairs"][pairs_index]["pitchAccent"];
    let moracount = json_data["pairs"][pairs_index]["moraCount"];
    if (pitch_accent == 0 || pitch_accent == moracount) {
        active_pitch_type = "heiban";
    } else if (pitch_accent == 1) {
        active_pitch_type = "atamadaka";
    } else {
        active_pitch_type = "nakadaka";
    }
}

function show_graded_buttons() {
    document.getElementById("graded-answer-button-row").classList.remove("element-hidden");
    document.getElementById("answer-button-row").classList.add("element-hidden");
}

function output_accent_plain_text(raw_pronunciation, accented_mora) {
    const small_kana = "ぁぃぅぇぉゃゅょゎァィゥェォヵㇰヶㇱㇲㇳㇴㇵㇶㇷㇷ゚ㇸㇹㇺャュョㇻㇼㇽㇾㇿヮ";
    let output = "";
    let mora = 0;
    let i = 0;
    while (i < raw_pronunciation.length) {
        output += raw_pronunciation.charAt(i);

        i++;
        mora++;

        while (i < raw_pronunciation.length && small_kana.includes(raw_pronunciation.charAt(i))) {
            output += raw_pronunciation.charAt(i);
            i++;
        }

        if (mora === accented_mora) {
            output += "＼";
        }
    }

    return output;
}

function get_json_id() {
    let possible_json_files = [];
    let pitches = ["pitch0", "pitch1", "pitch2", "pitch3", "pitch4"];
    let devoiced = document.getElementById("devoiced").checked;

    if (document.getElementById("strict-pair-finding").checked) {
        let checked_pitches = [];
        let unchecked_pitches = [];
        for (const currentPitch of pitches) {
            if (document.getElementById(currentPitch).checked) {
                checked_pitches.push(currentPitch);
            } else {
                unchecked_pitches.push(currentPitch);
            }
        };

        for (const currentPitch of checked_pitches) {
            for (const currentPair of pairs_index[currentPitch]) {
                let good_pair = true;
                for (const currentUncheckedPitch of unchecked_pitches) {
                    if (pairs_index[currentUncheckedPitch].includes(currentPair)) {
                        good_pair = false;
                    }
                };
                if (devoiced && !pairs_index["devoiced"].includes(currentPair)) {
                    good_pair = false;
                }
                if (good_pair) {
                    possible_json_files.push(currentPair);
                }
            };
        };
    } else {
        for (const currentPitch of pitches) {
            if (document.getElementById(currentPitch).checked) {
                if (devoiced) {
                    for (const currentPair of pairs_index[currentPitch]) {
                        if (pairs_index["devoiced"].includes(currentPair)) {
                            possible_json_files.push(currentPair);
                        }
                    };
                } else {
                    possible_json_files = possible_json_files.concat(pairs_index[currentPitch]);
                }
            }
        };
    }

    if (possible_json_files.length) {
        return possible_json_files[Math.floor(Math.random() * possible_json_files.length)];
    } else {
        return null;
    }
}

async function fetch_random_pair() {
    let json_file_id = get_json_id();
    if (json_file_id === null) {
        return;
    }
    let response = await fetch("./data/" + json_file_id);
    let json_data = await response.json();

    current_correct_answer_button = Math.floor(Math.random() * (json_data["pairs"].length));

    let raw_pronunciation = json_data["pairs"][current_correct_answer_button]["rawPronunciation"];
    let accented_mora = json_data["pairs"][current_correct_answer_button]["accentedMora"];
    current_correct_answer = output_accent_plain_text(raw_pronunciation, accented_mora);

    document.getElementById("kana-text").innerHTML = json_data["kana"];
    update_answer_buttons(json_data, current_correct_answer_button);
    update_audio(json_data, current_correct_answer_button);
    set_pitch(json_data, current_correct_answer_button);
    hide_continue_button();
}

document.querySelector("#start-test-button").addEventListener("click", start_test);
document.querySelector("#continue-button-button").addEventListener("click", fetch_random_pair);
for (const element of document.querySelectorAll(".pair-checkbox-input")) {
    element.addEventListener("click", fetch_random_pair);
}

for (const [index, element] of document.querySelectorAll(".answer-button-button").entries()) {
    element.addEventListener("click", () => {submit_answer(index)});
}
