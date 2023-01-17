import { useSearchParams, useNavigate } from "react-router-dom";

const Edit = () => {
  const navigate = useNavigate();
  const [searchParams, setSearchParams] = useSearchParams();
  const id = searchParams.get("id");
  console.log(`id: ${id}`);
  const mode = searchParams.get("mode");
  console.log(`mode: ${mode}`);
  return (
    <div>
      <h1>Edit</h1>
      <p>id: {id}</p>
      <p>mode: {mode}</p>
      <br />
      <button onClick={() => setSearchParams({ name: "김선혁" })} />
      <button onClick={() => navigate("/")} />
    </div>
  );
};

export default Edit;
