import { Link } from "react-router-dom";

export default function Home() {
  return (
    <>
      <h1>Welcome to Trilingo</h1>
      <p>
        Test your knowledge in French, German, and Italian!
      </p>
      <p>
        <Link to="/french">Get started ▶️</Link>
      </p>
    </>
  )
}