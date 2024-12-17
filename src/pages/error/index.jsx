import { useLocation, useNavigate } from "react-router-dom";
import styled from "styled-components";

export default function ErrorPage() {
  const navigate = useNavigate();
  const location = useLocation();
  return (
    <>
      <h1>404 - Not Found!</h1>
      <Button onClick={() => navigate("/")}>Go to Home</Button>
      <Button onClick={() => navigate("/cart")}>Go to Cart</Button>
      <Button onClick={() => navigate("/profile")}>Go to Profile</Button>
      <p>Current location: {location.pathname}</p>
    </>
  );
}
const Button = styled.button`
  background-color: var(--primary);
  color: var(--background);
  padding: 8px 16px;
  border: none;
  border-radius: 4px;
  cursor: pointer;
  font-size: 16px;
  margin-right: 8px;
  &:hover {
    background-color: var(--primary-dark);
  }
`;
