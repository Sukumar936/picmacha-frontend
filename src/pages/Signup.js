import { useState } from "react";

export default function Signup() {
  const [form, setForm] = useState({ name: "", email: "", password: "" });

  async function handleSignup(e) {
    e.preventDefault();
    const response = await fetch("http://localhost:8000/api/auth/register", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(form),
    });
    const data = await response.json();
    console.log("Signup response:", data);
  }

  return (
    <form onSubmit={handleSignup} style={{ maxWidth: "400px", margin: "50px auto" }}>
      <h2>Sign Up</h2>
      <input type="text" placeholder="Name"
             onChange={(e) => setForm({ ...form, name: e.target.value })} />
      <input type="email" placeholder="Email"
             onChange={(e) => setForm({ ...form, email: e.target.value })} />
      <input type="password" placeholder="Password"
             onChange={(e) => setForm({ ...form, password: e.target.value })} />
      <button type="submit">Register</button>
    </form>
  );
}
