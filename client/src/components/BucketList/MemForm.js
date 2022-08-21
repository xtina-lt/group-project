import React, { useState } from "react";
import axios from "axios";
import Cookies from "js-cookie";
import { useNavigate } from "react-router-dom";


const MemForm = ({ list, setList, old, submit, bucket }) => {
  const [mem, setMem] = useState(
    // if there is an old item to edit use that
    old
      ? old
      : // else use blank for create
        { price: "", notes:"", location:"", bucket: bucket}
  );
  const [success, setSuccess] = useState(false);
  const [errors, setErrors] = useState([]);
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("in handle submit")
    // // if we arent logged in navigate to login
    // if (!Cookies.get("userId")) {
    //   navigate("/login");
    //   // if we are logged in post
    // } else {
    //   console.log("logged in");
    //   console.log('else mems', mem)
    //   axios
    //     .post("http://localhost:8000/api/mems/new", {
    //       ...mem,
    //       creator: Cookies.get("userId"),
    //     })
    //     .then((res) => {
    //       setErrors([]);
    //       setSuccess(true);
    //       // deconstruct and add object returned
    //       //setList([...list, res.data]);
    //       // set blank form
    //       setMem({ name: "", price: "", notes:"", location:"", bucket: bucket});
    //     })
    //     .catch((res) => {
    //       setSuccess(false);
    //       setErrors(res.response.data.errors);
    //     });
    // }
  };

  const handleEdit = (e) => {
    e.preventDefault();
    console.log("edit and logged in");
    axios
      .put(`http://localhost:8000/api/mem/${mem._id}`, mem)
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
    // { name: "", price: "", notes:"", location:"", bucket: bucket, creator: Cookies.get("userId") }
    <form onSubmit={handleSubmit}>
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
          //PRICE
          errors.price && (
            <>
              <span className="accent">{errors.price.message}</span>
              <br />
            </>
          )
        }
        Price:
        {mem.price}
        <input
          type="text"
          value={mem.price}
          onChange={(e) => setMem({ ...mem, price: e.target.value })}
        />
      </label>
      <label>
        {
          //NOTES
          errors.notes && (
            <>
              <span className="accent">{errors.notes.message}</span>
              <br />
            </>
          )
        }
        Notes:
        <input
          type="text"
          value={mem.notes}
          onChange={(e) => setMem({ ...mem, notes: e.target.value.split(",") })}
        />
      </label>
      <label>
        {
          //LOCATION
          errors.location && (
            <>
              <span className="accent">{errors.location.message}</span>
              <br />
            </>
          )
        }
        Location:
        <input
          type="text"
          value={mem.location}
          onChange={(e) => setMem({ ...mem, location: e.target.value })}
        />
      </label>
      {mem.bucket.name}
      <br/>
      <input type="submit" value={submit || "Add Memory"} />
    </form>
  );
};

export default MemForm;
