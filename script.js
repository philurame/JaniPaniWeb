//-----------------------------------------------------------
// romajiToJapanese converter taken from https://github.com/aleckretch/Romaji-to-Japanese-Converter and modified
//-----------------------------------------------------------
const hiragana = {
  "a": "あ", "i": "い", "u": "う", "e": "え", "o": "お",
  "ka": "か", "ki": "き", "ku": "く", "ke": "け", "ko": "こ",
  "ga": "が", "gi": "ぎ", "gu": "ぐ", "ge": "げ", "go": "ご",
  "sa": "さ", "shi": "し", "su": "す", "se": "せ", "so": "そ",
  "za": "ざ", "ji": "じ", "zu": "ず", "ze": "ぜ", "zo": "ぞ",
  "ta": "た", "chi": "ち", "tsu": "つ", "te": "て", "to": "と",
  "da": "だ", "de": "で", "do": "ど",
  "na": "な", "ni": "に", "nu": "ぬ", "ne": "ね", "no": "の",
  "ha": "は", "hi": "ひ", "fu": "ふ", "he": "へ", "ho": "ほ",
  "ba": "ば", "bi": "び", "bu": "ぶ", "be": "べ", "bo": "ぼ",
  "pa": "ぱ", "pi": "ぴ", "pu": "ぷ", "pe": "ぺ", "po": "ぽ",
  "ma": "ま", "mi": "み", "mu": "む", "me": "め", "mo": "も",
  "ya": "や", "yu": "ゆ", "yo": "よ",
  "ra": "ら", "ri": "り", "ru": "る", "re": "れ", "ro": "ろ",
  "wa": "わ", "wo": "を",
  "nn": "ん",
  "kya": "きゃ", "kyu": "きゅ", "kyo": "きょ",
  "gya": "ぎゃ", "gyu": "ぎゅ", "gyo": "ぎょ",
  "sha": "しゃ", "shu": "しゅ", "sho": "しょ",
  "ja": "じゃ", "ju": "じゅ", "jo": "じょ",
  "cha": "ちゃ", "chu": "ちゅ", "cho": "ちょ",
  "nya": "にゃ", "nyu": "にゅ", "nyo": "にょ",
  "hya": "ひゃ", "hyu": "ひゅ", "hyo": "ひょ",
  "bya": "びゃ", "byu": "びゅ", "byo": "びょ",
  "pya": "ぴゃ", "pyu": "ぴゅ", "pyo": "ぴょ",
  "mya": "みゃ", "myu": "みゅ", "myo": "みょ",
  "rya": "りゃ", "ryu": "りゅ", "ryo": "りょ",
  "vu": "ゔ",
  "sakuon": "っ"
};

const katakana = {
  "a": "ア", "i": "イ", "u": "ウ", "e": "エ", "o": "オ",
  "ka": "カ", "ki": "キ", "ku": "ク", "ke": "ケ", "ko": "コ",
  "ga": "ガ", "gi": "ギ", "gu": "グ", "ge": "ゲ", "go": "ゴ",
  "sa": "サ", "shi": "シ", "su": "ス", "se": "セ", "so": "ソ",
  "za": "ザ", "ji": "ジ", "zu": "ズ", "ze": "ゼ", "zo": "ゾ",
  "ta": "タ", "chi": "チ", "tsu": "ツ", "te": "テ", "to": "ト",
  "da": "ダ", "zu": "ヅ", "de": "デ", "do": "ド",
  "na": "ナ", "ni": "ニ", "nu": "ヌ", "ne": "ネ", "no": "ノ",
  "ha": "ハ", "hi": "ヒ", "fu": "フ", "he": "ヘ", "ho": "ホ",
  "ba": "バ", "bi": "ビ", "bu": "ブ", "be": "ベ", "bo": "ボ",
  "pa": "パ", "pi": "ピ", "pu": "プ", "pe": "ペ", "po": "ポ",
  "ma": "マ", "mi": "ミ", "mu": "ム", "me": "メ", "mo": "モ",
  "ya": "ヤ", "yu": "ユ", "yo": "ヨ",
  "ra": "ラ", "ri": "リ", "ru": "ル", "re": "レ", "ro": "ロ",
  "wa": "ワ", "wo": "ヲ",
  "nn": "ン",
  "kya": "キャ", "kyu": "キュ", "kyo": "キョ",
  "gya": "ギャ", "gyu": "ギュ", "gyo": "ギョ",
  "sha": "シャ", "shu": "シュ", "sho": "ショ",
  "ja": "ジャ", "ju": "ジュ", "jo": "ジョ",
  "cha": "チャ", "chu": "チュ", "cho": "チョ",
  "nya": "ニャ", "nyu": "ニュ", "nyo": "ニョ",
  "hya": "ヒャ", "hyu": "ヒュ", "hyo": "ヒョ",
  "bya": "ビャ", "byu": "ビュ", "byo": "ビョ",
  "pya": "ピャ", "pyu": "ピュ", "pyo": "ピョ",
  "mya": "ミャ", "myu": "ミュ", "myo": "ミョ",
  "rya": "リャ", "ryu": "リュ", "ryo": "リョ",
  "vu": "ヴ",
  "va": "ヴァ", "vi": "ヴィ", "ve": "ヴェ", "vo": "ヴォ",
  "wi": "ウィ", "we": "ウェ",
  "fa": "ファ", "fi": "フィ", "fe": "フェ", "fo": "フォ",
  "che": "チェ",
  "di": "ディ", "du": "ドゥ",
  "ti": "ティ", "tu": "トゥ",
  "je": "ジェ",
  "she": "シェ",
  "sakuon": "ッ",
  "pause": "ー"
};

function romajiToJapanese(romaji) {
  romaji = romaji.toLowerCase();
  let currentAlphabet = hiragana;
  let hiraganaIsCurrent = true;
  let resultStr = "";
  let i = 0;

  while (i < romaji.length) {
    // Switch between hiragana and katakana when encountering '*'
    if (romaji[i] === "*") {
      if (hiraganaIsCurrent) {
        currentAlphabet = katakana;
        hiraganaIsCurrent = false;
      } else {
        currentAlphabet = hiragana;
        hiraganaIsCurrent = true;
      }
      if (resultStr.length==0 || romaji[i-1]===' ') {resultStr += "*";}
      i += 1;
    }
    // Handle space and potential " wa " rule
    else if (romaji[i] === " ") {
      resultStr = resultStr.replace(/\*/g, "");
      if ((i + 3) < romaji.length) {
        if (romaji.substring(i, i + 4) === " wa ") {
          // "wa" rule => 'ha' in the current alphabet
          resultStr += " " + currentAlphabet["ha"] + " ";
          i += 4;
          continue;
        }
      }
      resultStr += " ";
      i += 1;
    }
    // Handle case: "nn" + next chars => small tsu "っ" or "ッ"
    else if (
      (i + 2 < romaji.length) &&
      (romaji[i] === "n") &&
      (romaji[i + 1] === "n") &&
      !currentAlphabet.hasOwnProperty(romaji.substring(i + 1, i + 3))
    ) {
      resultStr += currentAlphabet["sakuon"];
      i += 1;
    }
    // Otherwise, try matching up to 3 characters
    else {
      let checkLen = Math.min(3, romaji.length - i);
      while (checkLen > 0) {
        let checkStr = romaji.substring(i, i + checkLen);

        if (currentAlphabet.hasOwnProperty(checkStr)) {
          // Match found in the current alphabet
          resultStr += currentAlphabet[checkStr];
          i += checkLen;

          if (i < romaji.length) {
            // ee => ei rule for hiragana
            if (
              romaji[i] === "e" &&
              romaji[i - 1] === "e" &&
              hiraganaIsCurrent
            ) {
              resultStr += currentAlphabet["i"];
              i += 1;
            }
            // Double vowel / letter handling for katakana
            else if (
              romaji[i] === romaji[i - 1] &&
              hiraganaIsCurrent === false
            ) {
              if (romaji[i] === "n") {
                // If it's "nn", we skip adding sokuon/pause here
                break;
              } else if (["a", "e", "i", "o", "u"].includes(romaji[i])) {
                resultStr += currentAlphabet["pause"];
              } else {
                resultStr += currentAlphabet["sakuon"];
              }
              i += 1;
            }
          }
          break;
        }
        // If no match at checkLen, and checkLen == 1, handle single char
        else if (checkLen === 1) {
          if (["?", ".", "!"].includes(checkStr)) {
            // Convert punctuation to "。"
            resultStr += "。";
          } else if (!/[a-z]/.test(checkStr)) {
            // Print non-letter characters as-is
            resultStr += checkStr;
          } else if (i + 1 < romaji.length && checkStr === romaji[i + 1]) {
            // Check for little tsu if the next character is the same
            resultStr += currentAlphabet["sakuon"];
          } else {
            // If still no match, just keep the single character
            resultStr += checkStr;
          }
          i += 1;
          break;
        }
        checkLen -= 1;
      }
    }
  }
  return resultStr;
}


//-----------------------------------------------------------
// HIEROGLYPH CLASS
//-----------------------------------------------------------
class HieroglyphType {
  static RADICAL = "radical";
  static KANJI = "kanji";
  static VOCAB = "vocab";
}
  
class Mnemonics {
  constructor(meaning, reading) {
    this.meaning = meaning;
    this.reading = reading;
  }
  
  static fromJSON(json) {
    return new Mnemonics(json.meaning, json.reading);
  }
}
  
class Reading {
  constructor(onyomi, kunyomi, vocab, main_reading) {
    this.onyomi = onyomi || [];
    this.kunyomi = kunyomi || [];
    this.vocab = vocab || [];
    this.main_reading = main_reading || "";
  }
  
  static fromJSON(json) {
    return new Reading(json.onyomi, json.kunyomi, json.vocab, json.main_reading);
  }
}
  
class ResourcePaths {
  constructor(pic, sound, wanikani_link) {
    this.pic = pic;
    this.sound = sound;
    this.wanikani_link = wanikani_link;
  }
  
  static fromJSON(json) {
    return new ResourcePaths(json.pic, json.sound, json.wanikani_link);
  }
}
  
class Hieroglyph {
  constructor(symbol, level, hieroglyph_type, meanings, readings, mnemonics, sentences, resource_paths) {
    this.symbol = symbol;
    this.level = level;
    this.hieroglyph_type = hieroglyph_type;
    this.meanings = meanings || [];
    this.readings = readings;
    this.mnemonics = mnemonics;
    this.sentences = sentences || [];
    this.resource_paths = resource_paths;
  }
  
  static fromJSON(json) {
    return new Hieroglyph(
      json.symbol,
      json.level,
      json.hieroglyph_type,
      json.meanings,
      Reading.fromJSON(json.readings),
      Mnemonics.fromJSON(json.mnemonics),
      json.sentences,
      ResourcePaths.fromJSON(json.resource_paths)
      );
  }
}
  
class HieroglyphDB {
  constructor(hieroglyphs) {
    this.hieroglyphs = hieroglyphs || [];
  }
  
  static fromJSON(json) {
    const items = (json.hieroglyphs || []).map(h => Hieroglyph.fromJSON(h));
    return new HieroglyphDB(items);
  }
}
  
//-----------------------------------------------------------
// GLOBALS
//-----------------------------------------------------------
let DB = null; // Will hold HieroglyphDB
let filteredHieroglyphs = []; // Hieroglyphs that match user selection (levels and types)
let currentQuestion = null; // The current Hieroglyph being asked about
let questionType = null; // 'meaning', 'onyomi', 'kunyomi', 'vocab'
let reviewHistory = []; // Array to store {hieroglyph, userAnswer, correctState} in the order played
let maxReviewLength = 300;
let currentSoundPath = null;
let minLvl = null;
let maxLvl = null;

//-----------------------------------------------------------
// UTILITY
//-----------------------------------------------------------
function sampleQuestion(filteredHieroglyphs) {
  currentQuestion = filteredHieroglyphs[Math.floor(Math.random() * filteredHieroglyphs.length)];
  const random_value = Math.random();
  
  const qType = currentQuestion.hieroglyph_type;
  switch (qType) {
    case HieroglyphType.RADICAL:
      questionType = "meaning";
      break;
    case HieroglyphType.KANJI:
      questionType = random_value < 0.33 ? "meaning" : random_value < 0.66 ? "onyomi" : "kunyomi";
      break;
    case HieroglyphType.VOCAB:
      questionType = random_value < 0.5 ? "meaning" : "vocab";
      break;
  }
}

window.addEventListener('DOMContentLoaded', () => {
  const inputField = document.getElementById('answer-input');
  
  inputField.addEventListener('input', () => {
    const romajiText = inputField.value;
    const japaneseText = romajiToJapanese(romajiText);
    if (currentQuestion && ["onyomi", "kunyomi", "vocab"].includes(questionType)) {
      inputField.value = japaneseText;
    }
  });
});
  
//-----------------------------------------------------------
// INITIALIZE
//-----------------------------------------------------------
window.addEventListener("DOMContentLoaded", async () => {
  // Attach event listeners
  document.getElementById("question-params").addEventListener("click", changeParams);
  document.getElementById("submit-answer").addEventListener("click", submitClick);
  document.getElementById("show-info-page").addEventListener("click", showInfoForCurrent);
  
  // Search system
  document.getElementById("search-button").addEventListener("click", searchHieroglyphs);
  document.getElementById("show-review").addEventListener("click", showReview);
  document.getElementById("vocab-sound-button").addEventListener("click", () => playSound(currentSoundPath));

  // Add event listeners to each button
  document.querySelectorAll('.back-to-game').forEach(button => {
    button.addEventListener('click', () => {showSection("game-section")});
  });

  document.addEventListener('keydown', handleUserInteractionKeyDown);
  
  showSection("game-section");
  changeParams();
});

function handleUserInteractionKeyDown(event) {
  const is_question = !document.getElementById("game-section").classList.contains("hidden");
  const is_info     = !document.getElementById("info-section").classList.contains("hidden");

  if (event.key === 'Enter') {
    event.preventDefault();
    if (is_question) {submitClick();}
    else if (is_info) {searchHieroglyphs();}
  } else if (event.key === 'Escape') {
    event.preventDefault();
    if (is_question) {showInfoForCurrent();}
    else if (is_info && document.getElementById("search-query").value) {
      document.getElementById("search-query").value = "";
      searchHieroglyphs();
    }
    else if (!is_question) {showSection("game-section");}
  }
};
  
//-----------------------------------------------------------
// LOAD DATABASE
//-----------------------------------------------------------
async function loadHieroglyphDB(minLvl, maxLvl) {
  if (typeof minLvl === "undefined" || typeof maxLvl === "undefined") {
    // No range requested, load the whole database
    const response = await fetch("./HieroglyphDB.json");
    const data = await response.json();
    DB = HieroglyphDB.fromJSON(data);
  } else {
    // Load only the necessary chunks for the given level range
    const chunkSize = 5;
    // Helper function to find which chunk covers a given level
    const findChunkIndex = (level) => Math.floor((level - 1) / chunkSize) * chunkSize;
    
    const start = findChunkIndex(minLvl);
    const end   = findChunkIndex(maxLvl);
    const mergedDB = new HieroglyphDB();
  
    for (let i = start; i <= end; i += chunkSize) {
      const response = await fetch(`./jsons/HieroglyphDB_${i}.json`);
      const data = await response.json();
      const partialDB = HieroglyphDB.fromJSON(data);
      // Merge hieroglyphs
      mergedDB.hieroglyphs.push(...partialDB.hieroglyphs);
    }

    //// Filter hieroglyphs to only those within the requested levels
    // mergedDB.hieroglyphs = mergedDB.hieroglyphs.filter(h => h.level >= minLvl && h.level <= maxLvl);
    DB = mergedDB;
  }
}
  
//-----------------------------------------------------------
// HANDLERS
//-----------------------------------------------------------
  
// Start or Resume the quiz
async function changeParams() {
  // gather which type checkboxes are checked
  const rad = document.getElementById("type-radical").checked;
  const kan = document.getElementById("type-kanji").checked;
  const voc = document.getElementById("type-vocab").checked;
  
  if (!rad && !kan && !voc) {
    alert("Please select at least one type!");
    return;
  }
  
  // Re-filter the DB according to user selection (levels + types)
  const minLevel = parseInt(document.getElementById("minInput").value, 10);
  const maxLevel = parseInt(document.getElementById("maxInput").value, 10);

  // Check if need to load new DB:
  if (!minLvl || !maxLvl || minLevel<minLvl || maxLevel>maxLvl) {
    await loadHieroglyphDB(minLevel, maxLevel);
  }
  minLvl = minLevel;
  maxLvl = maxLevel;
  
  filteredHieroglyphs = DB.hieroglyphs.filter(h => {
    if (h.level < minLevel || h.level > maxLevel) return false;
    if (!rad && h.hieroglyph_type === HieroglyphType.RADICAL) return false;
    if (!kan && h.hieroglyph_type === HieroglyphType.KANJI)   return false;
    if (!voc && h.hieroglyph_type === HieroglyphType.VOCAB)   return false;
    return true;
  });
  
  if (filteredHieroglyphs.length === 0) {
    alert("No hieroglyphs match these settings.");
    return;
  }
  
  document.getElementById("question-area").classList.remove("hidden");
  document.getElementById("submit-answer").textContent = "Submit";
  showNewQuestion();
}

function showHieroglyph(placeholder, h) {
  const is_info = placeholder === "detail-symbol";
  const symbolField = document.getElementById(placeholder);
  symbolField.classList.remove("radical", "kanji", "vocab");
  symbolField.classList.remove("radical-info", "kanji-info", "vocab-info");
  if (h.hieroglyph_type === HieroglyphType.RADICAL) {
    symbolField.classList.add(is_info ? 'radical-info' : "radical");
  } else if (h.hieroglyph_type === HieroglyphType.KANJI) {
    symbolField.classList.add(is_info ? 'kanji-info' : "kanji");
  } else if (h.hieroglyph_type === HieroglyphType.VOCAB) {
    symbolField.classList.add(is_info ? 'vocab-info' : "vocab");
  }
  if (!h.symbol) {
    symbolField.innerHTML = `<img src="${h.resource_paths.pic}" alt="Image for radical" style="max-width: ${is_info?60:80}%; height: auto;">`;
  } else {
    symbolField.textContent = h.symbol;
    switch (symbolField.textContent.length) {
      case 1:
        symbolField.style.fontSize = is_info ? '6em' : '10em';
      break;
      case 2:
        symbolField.style.fontSize = is_info ? '5em' : '8em';
      break;
      case 3:
        symbolField.style.fontSize = is_info ? '4em' : '6em';
      break;
      default:
        symbolField.style.fontSize = ((is_info ? 12 : 16)/symbolField.textContent.length).toFixed(0)+'em';
    }
  }
}
  
function showNewQuestion() {
  // Pick a random hieroglyph and question type
  sampleQuestion(filteredHieroglyphs);
  
  // Display the hieroglyph or image
  showHieroglyph("symbol-display", currentQuestion);
  
  document.getElementById("answer-input").value = "";
  document.getElementById("feedback").textContent = "";
  document.getElementById("answer-input").style.borderBottom = "2px solid var(--color-primary)";
  if (window.innerWidth>=700) {
    document.getElementById("left-rectangle").style.display  = 'none';
    document.getElementById("right-rectangle").style.display = 'none';
  }  
  // Display question text
  let questionText = "";
  if (questionType === "meaning") {
    questionText = "MEANING";
  } else if (questionType === "onyomi") {
    questionText = "ONYOMI READING";
  } else if (questionType === "kunyomi") {
    questionText = "KUNYOMI READING?";
  } else if (questionType === "vocab") {
    questionText = "READING";
  }
  
  document.getElementById("question-text").textContent = questionText;
}
  
function submitClick() {
  if (document.getElementById("submit-answer").textContent === "Next") {
    document.getElementById("submit-answer").textContent = "Submit";
    showNewQuestion();
    return;
  }
  document.getElementById("submit-answer").textContent = "Next";
  const userAnswer = document.getElementById("answer-input").value.trim();
  
  let correct = false;
  let possibleAnswers = [];
  
  switch (questionType) {
    case "meaning":
      possibleAnswers = currentQuestion.meanings;
      break;
    case "onyomi":
      possibleAnswers = currentQuestion.readings.onyomi || [];
      break;
    case "kunyomi":
      possibleAnswers = currentQuestion.readings.kunyomi || [];
      break;
    case "vocab":
      possibleAnswers = currentQuestion.readings.vocab || [];
      break;
  }
  
  // Lowercase compare or just unify
  const userAnswerLower = userAnswer.toLowerCase();
  possibleAnswers = possibleAnswers.map(ans => ans.toLowerCase());
  
  if (possibleAnswers.includes(userAnswerLower)) {
    correct = true;
  }
  
  // FEEDBACK
  displayFeedback(correct, possibleAnswers);
  
  // REVIEW HISTORY
  let state = correct ? "correct" : "incorrect";
  reviewHistory.push({
    hieroglyph: currentQuestion,
    userAnswer: userAnswer,
    correctState: state
  });
  if (reviewHistory.length > maxReviewLength) {
    reviewHistory.shift();
  }
}

function displayFeedback(is_correct, possibleAnswers) {
  document.getElementById("answer-input").style.borderBottom = is_correct ? "2px solid var(--color-correct)" : "2px solid var(--color-incorrect)";
  const feeDBackEl = document.getElementById("feedback");
  let feeDBackMsg = (is_correct ? "Correct!" : "Incorrect!") + " Possible answers: " + possibleAnswers.join(", ");
  feeDBackEl.textContent = feeDBackMsg;
  feeDBackEl.style.color = is_correct ? "var(--color-correct)" : "var(--color-incorrect)";

  if (window.innerWidth>700) {
    document.getElementById("left-rectangle").style.display  = 'flex';
    document.getElementById("right-rectangle").style.display = 'flex';

    document.getElementById("left-rectangle").style.backgroundColor  = 'var(--color-'+(is_correct ? 'correct)' : 'incorrect)');
    document.getElementById("right-rectangle").style.backgroundColor = 'var(--color-'+(is_correct ? 'correct)' : 'incorrect)');

    document.getElementById("left-rectangle").textContent  = is_correct ? '⛩️正しい⛩️' : '🌋正しくない🌋';
    document.getElementById("right-rectangle").textContent = is_correct ? '⛩️正しい⛩️' : '🌋正しくない🌋';

  }
  
}
  
//-----------------------------------------------------------
// INFO SECTION
//-----------------------------------------------------------
function showInfoForCurrent() {
  showSection("info-section");
  fillHieroglyphDetail(currentQuestion);
}
  
function searchHieroglyphs() {
  const query = document.getElementById("search-query").value.trim().toLowerCase();
  const resultsEl = document.getElementById("search-results");
  resultsEl.innerHTML = "";

  if (!query) {
    document.getElementById("search-results").style.border = "none";
    return;
  };
  document.getElementById("search-results").style.border = "1px solid var(--color-purple)";
  
  // Search ANY parameter
  // For example: symbol matches, or included in meaning, or level is the query, etc.
  let results = DB.hieroglyphs.filter(h => {
    if (h.symbol.toLowerCase().includes(query)) return true;
    if (h.meanings.some(m => m.toLowerCase().includes(query))) return true;

    // try romaji:
    if (h.readings.onyomi.some(r => r.toLowerCase().includes(romajiToJapanese(query)))) return true;
    if (h.readings.kunyomi.some(r => r.toLowerCase().includes(romajiToJapanese(query)))) return true;
    if (h.readings.vocab.some(r => r.toLowerCase().includes(romajiToJapanese(query)))) return true;

    if (h.readings.onyomi.some(r => r.toLowerCase().includes(query))) return true;
    if (h.readings.kunyomi.some(r => r.toLowerCase().includes(query))) return true;
    if (h.readings.vocab.some(r => r.toLowerCase().includes(query))) return true;
    if (h.hieroglyph_type.toLowerCase().includes(query)) return true;
    if ((""+h.level) === query) return true;
    return false;
  });
  
  const searchLength = Math.min(results.length, 5);
  if (searchLength === 0) {
    const li = document.createElement("li");
    li.textContent = "No results found.";
    li.style.color = "var(--color-incorrect)";
    resultsEl.appendChild(li);
    return;
  }

  for (let i = 0; i < searchLength; i++) {
    const li = document.createElement("li");
    li.textContent = results[i].symbol + " (" + results[i].meanings[0] + ")";
    switch (results[i].hieroglyph_type) {
      case HieroglyphType.RADICAL:
        li.style.color = "var(--color-radical)";
        break;  
      case HieroglyphType.KANJI:
        li.style.color = "var(--color-kanji)";
        break;
      case HieroglyphType.VOCAB:
        li.style.color = "var(--color-vocab)";
        break;
    }
    li.onclick = () => fillHieroglyphDetail(results[i]);
    resultsEl.appendChild(li);
  }
}

function fillHieroglyphDetail(h) {
  document.getElementById("hieroglyph-detail").classList.remove("hidden");
  document.getElementById("vocab-sound-button").classList.add("hidden");
  document.getElementById("line-radical").classList.add("hidden");
  document.getElementById("onkun").style.display='none';

  document.getElementById("detail-level").textContent = 'level '+h.level;

  const meaning = h.meanings[0].charAt(0).toUpperCase() + h.meanings[0].slice(1) + (h.meanings.length > 1 ? ', ' : '');
  const meanings = h.meanings.length > 1 ? h.meanings.slice(1).join(", ") : '';
  document.getElementById("detail-meaning").textContent = meaning;
  document.getElementById("extra-meanings").textContent = meanings;

  if (h.hieroglyph_type === HieroglyphType.RADICAL) {
    document.getElementById("line-radical").classList.remove("hidden");
  }
  else if (h.hieroglyph_type === HieroglyphType.KANJI) {
    document.getElementById("onkun").style.display = 'flex';

    const onyomi_style  = h.readings.onyomi.includes(h.readings.main_reading)  ? h.readings.onyomi.join(", ")  : '<span class="faded">' + h.readings.onyomi.join(", ")  + '</span>';
    const kunyomi_style = h.readings.kunyomi.includes(h.readings.main_reading) ? h.readings.kunyomi.join(", ") : '<span class="faded">' + h.readings.kunyomi.join(", ") + '</span>';
    document.getElementById("detail-onyomi").innerHTML  = onyomi_style;
    document.getElementById("detail-kunyomi").innerHTML = kunyomi_style;
  }
  else if (h.hieroglyph_type === HieroglyphType.VOCAB) {
    document.getElementById("vocab-sound-button").classList.remove('hidden');
    currentSoundPath = 'sounds/'+encodeURIComponent(h.resource_paths.sound);
    document.getElementById("vocab-sound-button").textContent = h.readings.vocab.join(", ");
  }
  document.getElementById("detail-mnemonic-meaning").textContent = h.mnemonics.meaning;
  document.getElementById("detail-mnemonic-reading").textContent = h.mnemonics.reading;
  
  // Sentences
  const detailSentences = document.getElementById("detail-sentences");
  detailSentences.innerHTML = "";

  if (h.sentences.length > 0) {
    h.sentences.forEach(s => {
      const li = document.createElement("li");
      li.classList.add("sentence-item");

      const jpSpan = document.createElement("span");
      jpSpan.classList.add("japanese");
      jpSpan.textContent = s[0]; // Assuming first part is Japanese

      const transSpan = document.createElement("span");
      transSpan.classList.add("translation");
      transSpan.textContent = s[1]; // Assuming second part is translation

      li.appendChild(jpSpan);
      li.appendChild(transSpan);
      detailSentences.appendChild(li);
    });
}

  showHieroglyph("detail-symbol", h);

  document.getElementById("detail-wanikani-link").href = h.resource_paths.wanikani_link || "#";
}

function playSound(path) {
  if (path!=null && path.includes("vocabulary")) {
    const audio = new Audio(path);
    audio.play();
  }
}
  
//-----------------------------------------------------------
// NAV UTILS
//-----------------------------------------------------------
function showSection(sectionId) {
  const allSections = ["game-section", "info-section", "review-section"];
  allSections.forEach(s => {
    document.getElementById(s).classList.add("hidden");
  });
  document.getElementById(sectionId).classList.remove("hidden");
  if (sectionId === "game-section") {
    document.getElementById("answer-input").focus();
  }
  else if (sectionId === "info-section") {
    document.getElementById("search-query").focus();
  }
}
  
//-----------------------------------------------------------
// REVIEW SECTION
//-----------------------------------------------------------
function showReview() {
  showSection("review-section");
  const reviewList = document.getElementById("review-list");
  reviewList.innerHTML = "";
  
  for (let i = reviewHistory.length - 1; i >= 0; i--) {
    const item = reviewHistory[i];
    const li = document.createElement("li");
    li.innerHTML = `<span class="symbol">${item.hieroglyph.symbol}</span><span class="divider">−−</span><span class="answer">${item.userAnswer}</span>`;
    li.style.color = item.correctState === "correct" ? "var(--color-correct)" : "var(--color-incorrect)";
    reviewList.appendChild(li);
  }
}