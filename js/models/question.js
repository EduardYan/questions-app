/**
 * Model for a question.
 */

export class Question {
  /**
   * @param {number} id The id for choice the question
   * @param {string} toAsk The text to ask in the question
   * @param {string[]} options The list of the options
   * @param {string} answer The answer of the Question
   */
  constructor(id, toAsk, options, answer) {
    this.id = id;
    this.toAsk = toAsk;
    this.answer = answer;
    this.options = options;
  }

  /**
   * Show the question in the interface, with the values of the constructor
   */
  show() {
    const div = document.createElement("div");
    div.className = "card my-3 question";
    div.setAttribute("id", this.id);
    div.innerHTML = `
      <div class="card-header text-center">
        <h3 class="text-white">${this.toAsk}</h3>
      </div>
    `;

    const select = document.createElement("select");
    select.className = "text-center form-select w-50 mx-auto";
    select.setAttribute("id", "option");

    const button = document.createElement("a");
    button.setAttribute("href", "#alerts"); // redirect to the alerts view
    button.className = "btn btn-primary validate-button";
    button.innerText = "Validate";

    const buttonDiv = document.createElement("div");
    buttonDiv.className = "mx-auto w-100 text-center";
    buttonDiv.append(button);

    this.options.forEach((option) => {
      // adding values and text of the options
      const optionElement = document.createElement("option");
      optionElement.setAttribute("value", option);
      optionElement.innerText = option;

      select.append(optionElement);
    });

    const footerDiv = document.createElement("div");
    footerDiv.className = "card-footer";
    footerDiv.append(buttonDiv);

    // adding the last elemtns
    div.append(select, footerDiv);
    document.getElementById("questions-view").append(div);
  }
}
