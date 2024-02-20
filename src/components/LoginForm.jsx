import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { useAtom } from "jotai";
import { jwtAtom } from "../atoms/jwtAtom";

function LoginForm() {
  // state
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [, setJwt] = useAtom(jwtAtom);
  const navigateTo = useNavigate();
  // comportement
  const handleSubmit = (event) => {
    event.preventDefault();
    console.log("email:", email);
    console.log("password:", password);
    fetchData();
  };
  const fetchData = async () => {
    try {
      const response = await fetch("http://localhost:1337/api/auth/local", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          identifier: email,
          password: password,
        }),
      });
      if (response.ok) {
        console.log("Login successful");
        const data = await response.json();
        const token = data.jwt;
        setJwt(token);
        console.log("data:", data);
        console.log("token:", token);
        navigateTo("/profil");
      } else {
        console.log("Login failed", response.statusText);
      }
    } catch (error) {
      console.log("Login failed", error);
    }
  };
  // affichage
  return (
    <Form onSubmit={handleSubmit}>
      <Form.Group className="mb-3" controlId="formBasicEmail">
        <Form.Label>Email address</Form.Label>
        <Form.Control
          type="email"
          placeholder="Enter email"
          value={email}
          onChange={(event) => setEmail(event.target.value)}
        />
        <Form.Text className="text-muted"></Form.Text>
      </Form.Group>

      <Form.Group className="mb-3" controlId="formBasicPassword">
        <Form.Label>Password</Form.Label>
        <Form.Control
          type="password"
          placeholder="Password"
          value={password}
          onChange={(event) => setPassword(event.target.value)}
        />
      </Form.Group>
      <Button variant="primary" type="submit">
        Submit
      </Button>
    </Form>
  );
}

export default LoginForm;
