import { useState } from "react";
const AddTask = ({ onAdd }) => {
  const [head, setHead] = useState("");
  const [body, setBody] = useState("");
  const [rem, setRem] = useState(false);
  const onsubmit = (e) => {
    e.preventDefault();
    if (!head) {
      alert("enter details");
      return;
    }
    const high_lov = rem ? "highlight" : "";
    onAdd({ head, body, high_lov });
    setHead("");
    setBody("");
    setRem(false);
  };
  return (
    <form className="add_task" onSubmit={onsubmit}>
      <div className="form-group">
        {/* <label htmlFor="">Event/Task</label> */}
        <input
          autoComplete="off"
          type="text"
          name="head"
          value={head}
          placeholder="heading"
          onChange={(e) => setHead(e.target.value)}
        />
      </div>
      <div className="form-group">
        {/* <label htmlFor="">description</label> */}
        <input
          autoComplete="off"
          type="text"
          value={body}
          placeholder="body"
          onChange={(e) => setBody(e.target.value)}
        />
      </div>
      <div className="checkbox check-container">
        <label htmlFor="rem" className="">
          Remainder
        </label>
        <input
          type="checkbox"
          name="remainder"
          checked={rem}
          id="rem"
          value={rem}
          onChange={(e) => setRem(e.currentTarget.checked)}
        />
      </div>
      <button className="btn" type="submit">
        submit
      </button>
    </form>
  );
};
export default AddTask;
