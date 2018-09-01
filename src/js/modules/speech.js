/**
 * https://tutorialzine.com/2017/08/converting-from-speech-to-text-with-javascript
 */

import $ from 'jquery';

var SpeechRecognition = window.SpeechRecognition || window.webkitSpeechRecognition;
var recognition = new SpeechRecognition();

var noteTextarea = $('#search-term');
var noteContent = '';

recognition.continuous = true;

recognition.onresult = function (e) {
    var current = e.resultIndex;
    var transcript = e.results[current][0].transcript;
    var mobileRepeatBug = (current == 1 && transcript == e.results[0][0].transcript);

    if (!mobileRepeatBug) {
        noteContent += transcript;
        noteTextarea.val(noteContent);
    }
};

$('#start-record-btn').on('click', function (e) {
    if (noteContent.length) {
        noteContent += ' ';
    }
    recognition.start();
});

$('#pause-record-btn').on('click', function (e) {
    recognition.stop();
});

noteTextarea.on('input', function () {
    noteContent = $(this).val();
})

// export default speech
export { recognition };