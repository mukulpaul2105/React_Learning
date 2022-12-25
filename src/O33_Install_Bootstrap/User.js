import { Button, Alert } from "react-bootstrap";

export default function User() {
  return (
    <div>
      <h1> Install Bootstrap</h1>
      <Button onClick={() => alert("Hello")}>Click Me</Button>
      {
        <Alert variant={"warning"}>
          This is a Warning alert—check it out!
        </Alert>}
    </div>
  );
}
