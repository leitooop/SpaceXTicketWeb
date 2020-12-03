import React, { useState } from "react";
import { Button, Form, FormGroup, Label, Input, FormText } from "reactstrap";
import Toasty from "./toasty";
const axios = require('axios');


const NewCardForm = (props) => {
  var [typeInput, setTypeInput] = useState("issue");
  var [title, setTitle] = useState("");
  var [description, setDescription] = useState("");
  var [category, setCategory] = useState("Maintenance");

  const cleanInputs = () => {
    setTitle("");
    setDescription ("");
    setCategory("Maintenance");
  };

  const selectTypeFunction = (selection) => {
    if (selection !== typeInput) {
      setTypeInput(selection);
      console.log(selection);
      cleanInputs();
    }
  };

  const createCard = (props) => {
    console.log("entra")
    var json = {};
    switch (typeInput) {
      case "issue":
        json = {
          type: typeInput,
          title: title,
          description: description,
        };
        break;
      case "bug":
        json = {
          type: typeInput,
          description: description,
        };
        break;
      case "task":
        json = {
          type: typeInput,
          title: title,
          category: category,
        };
        break;
      default:
        break;
    }
    console.log(json)
    axios.post("http://localhost:5000", json).then(function (response) {
    Toasty.notify(response)
    }).catch(error => {
      Toasty.notifyError(error)
    });
  };

  return (
    <Form>
      <Label for="title">Type</Label>
      <Input
        type="select"
        name="select"
        id="exampleSelect"
        onChange={(e) => selectTypeFunction(e.target.value)}
      >
        <option>issue</option>
        <option>bug</option>
        <option>task</option>
      </Input>
      {typeInput !== "bug" && (
        <FormGroup>
          <Label for="title">Title</Label>
          <Input
            type="textarea"
            name="title"
            id="titleInput"
            value={title}
            onChange={(e) => {
              setTitle(e.target.value);
            }}
          />
        </FormGroup>
      )}
      {typeInput !== "task" && (
        <FormGroup>
          <Label for="description">Description</Label>
          <Input
            type="textarea"
            name="description"
            id="description"
            value={description}
            onChange={(e) => {
              setDescription(e.target.value);
            }}
          />
        </FormGroup>
      )}
      <FormGroup></FormGroup>
      {typeInput === "task" && (
        <FormGroup>
          <Label for="categoryInput">Category</Label>
          <Input
            type="select"
            name="categoryInput"
            id="categoryInput"
            onChange={(e) => {
              setCategory(e.target.value);
            }}
          >
            <option>Maintenance</option>
            <option>Test</option>
            <option>Research</option>
          </Input>
        </FormGroup>
      )}

      <Button style={{ marginLeft: "auto", display: "flex" }} onClick={()=>createCard(props)}>Create</Button>
    </Form>
  );
};

export default NewCardForm;
