/**
 * Principal javascript
 * for the app.
 */

import { questions_objects } from "./data/questions.js";
import { getQuestion, showAlert, setNote, setTotal } from "./utils.js";
import messages from "./data/messages.js";

questions_objects.forEach((question) => {
  // showing the question for each question
  question.show();
});

// to save the question
var question = null;

// note of the questions
var note = 0;

// length of the questions
var questionsLength = questions_objects.length;

// attemps for the questions
var attemps = 0;

const buttons = document.querySelectorAll(".validate-button");
buttons.forEach((button) => {
  button.addEventListener("click", () => {
    // getting the question
    question = getQuestion(button);

    questions_objects.forEach((questionObject) => {
      // validating the id and the answer for each question
      if (questionObject.id == question.id) {
        if (questionObject.answer == question.value) {
          // validating the attemps
          if (attemps < questionsLength) {
            note++;
            setNote(note);
            showAlert(messages.good_message, "good");
          } else if (attemps == questionsLength || attemps > questionsLength) {
            //  in case is the limit of questions
            showAlert(messages.info_message, "info");
          }
        } else {
          if (attemps < questionsLength) {
            if (!note == 0 || note < 0) {
              note--;
              setNote(note);
            } else {
              // in case the note not is 0 or less
              setNote(note);
              showAlert(messages.bad_message, "bad");
            }
          } else if (attemps == questionsLength || attemps > questionsLength) {
            showAlert(messages.info_message, "info");
          }
        }

        // adding to attemps
        attemps++;
      }
    });
  });
});

// setting the first note
setNote(note);
// setting the total
setTotal(questionsLength);
