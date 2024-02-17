function submit_answer(answer) {
    let is_correct_answer = false;
    if (answer === current_correct_answer_button) {
        is_correct_answer = true;
    }
    update_answer_stats(active_pitch_type, is_correct_answer);
    update_history(current_correct_answer, is_correct_answer);
    graded_buttons();
    if (is_correct_answer) {
        setTimeout(fetch_random_pair, 750);
    } else {
        add_continue_button();
    }
}

function add_continue_button() {
    document.getElementById("continue-button").innerHTML += '<hr><button class="col-12 btn btn-primary" type="button" onclick="fetch_random_pair()">Continue</button>'
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

function update_answer_buttons(json_data) {
    document.getElementById("answer-button-row").innerHTML = "";
    json_data["pairs"].forEach(function(currentValue, index, _) {
        let raw_pronunciation = currentValue["rawPronunciation"];
        let accented_mora = currentValue["accentedMora"];
        let entry = output_accent_plain_text(raw_pronunciation, accented_mora);
        let new_answer_button = '<div class="col">\n<div class="d-grid"><button type="button" class="btn btn-primary" onclick="submit_answer(' + index + ')">' + entry + '</button></div>\n</div>';
        document.getElementById("answer-button-row").innerHTML += new_answer_button;

        let sound_data = currentValue["soundData"];
        let button_sound_player = '<audio id="audio_index_' + index + '"src="data:audio/ogg;base64,' + sound_data + '" type="audio/mpeg"></audio>';
        if (index === current_correct_answer_button) {
            graded_answer_button_row += '<div class="col">\n<div class="d-grid">' + button_sound_player + '<button type="button" class="btn btn-success" onclick="document.getElementById(\'audio_index_' + index + '\').play()">' + entry + '</button></div>\n</div>';
        } else {
            graded_answer_button_row += '<div class="col">\n<div class="d-grid">' + button_sound_player + '<button type="button" class="btn btn-danger" onclick="document.getElementById(\'audio_index_' + index + '\').play()">' + entry + '</button></div>\n</div>';
        }
    });
}

function update_audio(json_data) {
    let pairs_audio = {};
    json_data["pairs"].forEach(function(currentValue, index, _) {
        pairs_audio[index] = currentValue["soundData"];
    });
    let sound_data = json_data["pairs"][current_correct_answer_button]["soundData"];
    document.getElementById("pair-sound-player").src = "data:audio/ogg;base64," + sound_data;
}

function set_pitch(json_data) {
    let pitch_accent = json_data["pairs"][current_correct_answer_button]["pitchAccent"];
    let moracount = json_data["pairs"][current_correct_answer_button]["moraCount"];
    if (pitch_accent == 0 || pitch_accent == moracount) {
        active_pitch_type = "heiban";
    } else if (pitch_accent == 1) {
        active_pitch_type = "atamadaka";
    } else {
        active_pitch_type = "nakadaka";
    }
}

function graded_buttons() {
    document.getElementById("answer-button-row").innerHTML = graded_answer_button_row;
    graded_answer_button_row = "";
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

async function fetch_random_pair() {
    let random = pairs_index[Math.floor(Math.random() * pairs_index.length)];
    let response = await fetch("./data/" + random);
    let json_data = await response.json();

    current_correct_answer_button = Math.floor(Math.random() * (json_data["pairs"].length));

    let raw_pronunciation = json_data["pairs"][current_correct_answer_button]["rawPronunciation"];
    let accented_mora = json_data["pairs"][current_correct_answer_button]["accentedMora"];
    current_correct_answer = output_accent_plain_text(raw_pronunciation, accented_mora);

    document.getElementById("kana-text").innerHTML = json_data["kana"];
    update_answer_buttons(json_data);
    update_audio(json_data);
    set_pitch(json_data);
    document.getElementById("continue-button").innerHTML = "";
}

fetch_random_pair();
