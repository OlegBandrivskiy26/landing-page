import { useState } from "react";
import "../styles/form.css";

const Form = () => {
  const [email, setEmail] = useState("");
  const [feedback, setFeedback] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Email:", email);
    console.log("Feedback:", feedback);
    alert("Ваш відгук відправлено!");
    setEmail("");
    setFeedback("");
  };

  return (
    <div className="form-container">
      <h2>Зворотний зв’язок</h2>
      <form onSubmit={handleSubmit}>
        <label htmlFor="email">Email</label>
        <input
          type="email"
          id="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          required
        />

        <label htmlFor="feedback">Ваш відгук</label>
        <textarea
          id="feedback"
          value={feedback}
          onChange={(e) => setFeedback(e.target.value)}
          required
        />

        <button type="submit">Відправити</button>
      </form>
    </div>
  );
};

export default Form;
