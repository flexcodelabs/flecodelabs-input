import React from "react";
import ReactDOM from "react-dom";
import Input from "@flexcodelabs/input";

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
  };
  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    // submit form
  };
  return (
    <form onSubmit={handleSubmit}>
      <p>Normal input</p>
      <Input
        label="Label"
        value={email}
        name="email"
        onChange={onChange}
        placeholder="Label"
      />
      <p>password input</p>
      <Input
        label="Password"
        value={password}
        type="password"
        name="password"
        onChange={onChange}
        placeholder="********"
      />
      <p>message input</p>
      <Input
        label="Your Message"
        textarea
        required
        value={message}
        handleChange={onChange}
        name="message"
      />
      <p>Input with error message</p>
      <Input
        label="Label"
        value={email}
        name="email"
        onChange={onChange}
        placeholder="Label"
        error="Error message"
      />
      <p>Input with success message</p>
      <Input
        label="Label"
        value={email}
        name="email"
        onChange={onChange}
        placeholder="Label"
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
