/**
 * This module have the questions
 * data.
 */

import { Question } from "../models/question.js";

// set the questions to use here
const questions = [
  {
    id: 1,
    toAsk: "Is a compiled programming language",
    options: ["Javascript", "C++", "Python"],
    answer: "C++",
  },
  {
    id: 2,
    toAsk: "Acronyms for Hypertext Transfer Protocol",
    options: ["FTP", "TCP", "HTTP"],
    answer: "HTTP",
  },
  {
    id: 3,
    toAsk: "Most used operating system in the world",
    options: ["GNU/Linux", "macOS", "Windows"],
    answer: "Windows",
  },
];

// converting to objects
export const questions_objects = questions.map(
  (question) =>
    new Question(question.id, question.toAsk, question.options, question.answer)
);
