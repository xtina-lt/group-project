import React, { useState } from "react";
import axios from "axios";
import Cookies from "js-cookie";
import { useNavigate } from "react-router-dom";

const MemForm = ({ list, setList, old, submit }) => {
  const [mem, setMem] = useState(
    // if there is an old item to edit use that
    old
      ? old
      : // else use blank for create
        { name: "", done: false }
  );
  const [success, setSuccess] = useState(false);
  const [errors, setErrors] = useState([]);
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();
    // if we arent logged in navigate to login
    if (!Cookies.get("userId")) {
      navigate("/login");
      // if we are logged in post
    } else {
      console.log("logged in");
      axios
        .post("http://localhost:8000/api/mems", {
          ...item,
          creator: Cookies.get("userId"),
        })
        .then((res) => {
          setErrors([]);
          setSuccess(true);
          // deconstruct and add object returned
          setList([...list, res.data]);
          // set blank form
          setMem({ name: "", done: false });
        })
        .catch((res) => {
          setSuccess(false);
          setErrors(res.response.data.errors);
        });
    }
  };

  const handleEdit = (e) => {
    e.preventDefault();
    console.log("edit and logged in");
    axios
      .put(`http://localhost:8000/api/mem/${item._id}`, item)
      .then((res) => {
        setErrors([]);
        setSuccess(true);
      })
      .catch((res) => {
        setSuccess(false);
        setErrors(res.response.data.errors);
      });
  };

  return (
    <form onSubmit={submit ? handleEdit : handleSubmit}>
      {/* success */}
      {success && (
        <>
          <span className="accent">SUCCESS</span>
          <br />
        </>
      )}
      {/* name */}
      <label>
        {
          // error with name
          errors.name && (
            <>
              <span className="accent">{errors.name.message}</span>
              <br />
            </>
          )
        }
        Name:
        <input
          type="text"
          value={mem.name}
          onChange={(e) => setMem({ ...mem, name: e.target.value })}
        />
      </label>
      <input type="submit" value={submit || "Add Memory"} />
    </form>
  );
};

export default MemForm;
