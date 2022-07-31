import React from "react";
import ReactDOM from "react-dom";
import Input from "@flexcodelabs/input";
import "./styles.css";

const UseCase = () => {
  const [variables, setVariables] = React.useState<{
    email: string;
    password: string;
    message: string;
  }>({
    email: "",
    password: "",
    message: "",
  });
  const { email, password, message } = variables;
  const onChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    // onChange event
    const { name, value } = e.target;
    setVariables({
      ...variables,
      [name]: value,
    });
  };
  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    // submit form
  };
  return (
    <form onSubmit={handleSubmit}>
      <p>Normal input</p>
      <Input label="Label" value={email} name="email" onChange={onChange} />
      <p>password input</p>
      <Input
        label="Password"
        value={password}
        type="password"
        name="password"
        onChange={onChange}
      />
      <p>message input</p>
      <Input
        label="Your Message"
        textarea
        required
        value={message}
        onChange={onChange}
        name="message"
      />
      <p>Input with error message</p>
      <Input
        label="Label"
        value={email}
        name="email"
        onChange={onChange}
        error="Error message"
      />
      <p>Input with success message</p>
      <Input
        label="Label"
        value={email}
        name="email"
        onChange={onChange}
        success="Success message"
      />
    </form>
  );
};

ReactDOM.render(
  <React.StrictMode>
    <UseCase />
  </React.StrictMode>,
  document.getElementById("root")
);
