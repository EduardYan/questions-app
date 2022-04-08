# HTML Questions App.

**A small app for answer questions from the browser, using HTML, Javascript, Bootstrap 5 for styles and icons from Fontawesome.**

## View App using Docker.

**You can view the app using docker, with a nginx server with the static files for the app.**

```bash
$ docker run -p 80:80 -d --name myapp eduarddan/questions-web-app
```

Now you can visit this direction of the some browser like Chrome <a href="http://localhost" target="_blank" rel="noreferrer">http://localhost</a>

## Questions.

You can edit the file **"data/questions.js"** for add new questions or change values.

### Syntax for the questions.

```js
import { Question } from "../models/question.js";

// set the questions to use here
const questions = [
  {
    id: 1,
    toAsk: "Some question to Ask ?",
    options: ["answer1", "answer2", "answer3"],
    answer: "answer1",
  },
];

// converting to objects to use
export const questions_objects = questions.map(
  (question) =>
    new Question(question.id, question.toAsk, question.options, question.answer)
);
```

## Screenshot.

![screenshot](./doc/screenshots/principal.png)
