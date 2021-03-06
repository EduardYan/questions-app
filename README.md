# HTML Questions App.

A small app for answer **questions from the browser**, using HTML, Javascript, Bootstrap 5 for styles and icons from Fontawesome.

# View App using Docker.

You can view the app using docker, with a no-vnc server. Using a image with Ubuntu and lxde like
desktop enviroment. And executing the app with Chrome.

The Dockerfile is in this proyect and you can build a image and run a container.

```bash
$ docker build -t questions-web-app .  # building
$ docker run -p 6080:80 --name myapp -d questions-web-app # executing
```

Now you can visit this direction of the some browser like Chrome <a href="http://localhost:6080" target="_blank" rel="noreferrer">http://localhost:6080/</a>

And make this:

1. Open lxterminal and execute the config file:

```bash
$ config
```

2. Now execute for open the app using Chrome:
```bash
$ questions-app
```

---

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
