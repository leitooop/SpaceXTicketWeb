module.exports = validation;

const { check, oneOf, body } = require("express-validator");

function validation() {
  return oneOf([
    [
      body("type").equals("issue").withMessage("Invalid type"),
      body("title")
        .exists()
        .not()
        .isEmpty()
        .withMessage("Invalid title for issue"),
      body("description")
        .exists()
        .not()
        .isEmpty()
        .withMessage("Invalid description for issue"),
    ],
    [
      body("category").equals("Test").withMessage("Invalid type"),
      body("title", "Invalid Description").exists().not().isEmpty(),
      body("type").equals("task").withMessage("Invalid type for task"),
    ],
    [
      body("category").equals("Maintenance").withMessage("Invalid type"),
      body("title", "Invalid Description").exists().not().isEmpty(),
      body("type").equals("task").withMessage("Invalid type for task"),
    ],
    [
      body("category").equals("Research").withMessage("Invalid type"),
      body("title", "Invalid Description").exists().not().isEmpty(),
      body("type").equals("task").withMessage("Invalid type for task"),
    ],
    [
      body("type").equals("bug").withMessage("Invalid type for bug"),
      body("description", "Invalid Description").exists(),
    ],
  ]);
}

module.exports = validation;
