import { useState } from "react";
import { useNavigate, Link } from "react-router-dom";
import { getAuth, signInWithEmailAndPassword } from "firebase/auth";

const SignIn = () => {
  const auth = getAuth();

  const [formData, setFormData] = useState({
    email: "",
    password: "",
  });
  const { email, password } = formData;
  const navigate = useNavigate();

  const onChange = (e) => {
    setFormData({
      ...formData,
      [e.target.id]: e.target.value,
    });
  };

  const onSubmit = async (e) => {
    e.preventDefault();
    try {
      const userCredential = await signInWithEmailAndPassword(
        auth,
        email,
        password
      );
      navigate("/line");
    } catch (error) {
      console.log(error);
    }
  };
  return (
    <>
      <h1>ログインページ</h1>
      <form onSubmit={onSubmit}>
        <div>
          <input
            type="email"
            placeholder="Email"
            id="email"
            value={email}
            required
            onChange={onChange}
          />
        </div>
        <div>
          <input
            type="password"
            placeholder="Password"
            id="password"
            value={password}
            required
            onChange={onChange}
          />
        </div>
        <button type="submit">ログイン</button>
      </form>
      <div>
        新規登録は<Link to={`/signup/`}>こちら</Link>
      </div>{" "}
    </>
  );
};
export default SignIn;
