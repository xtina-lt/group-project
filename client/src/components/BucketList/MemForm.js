import React, { useState } from "react";
import axios from "axios";
import Cookies from "js-cookie";
import { useNavigate } from "react-router-dom";


const MemForm = ({ list, setList, old, submit, bucket }) => {
  const [mem, setMem] = useState(
    // if there is an old item to edit use that
    old
      ? 
        old
      : // else use blank for create
        { price: "", notes:"", location:"", img: "", bucket: bucket}
  );
  const [success, setSuccess] = useState(false);
  const [errors, setErrors] = useState([]);
  const navigate = useNavigate();

  const changeComplete = () => {
    axios.put(`http://localhost:8000/api/bucket/${bucket.id}`, {...bucket, complete: true})
      .then(res => console.log('good', res))
      .catch(res => console.log('bad change', res.response.data.errors))
  }

  const handleSubmit = (e) => {
    e.preventDefault();
    // if we arent logged in navigate to login
    if (!Cookies.get("userId")) {
      navigate("/login");
      // if we are logged in post
    } else {
      console.log("logged in");
      console.log('else mems', mem)
      console.log("bucket", bucket)
      axios
        .post("http://localhost:8000/api/mems/new", {
          ...mem, bucket : bucket,
          creator: Cookies.get("userId"),
        })
        .then((res) => {
          console.log("success", res.data)
          changeComplete()
          setErrors([]);
          setSuccess(true);
          // deconstruct and add object returned
          setList([...list, res.data]);
          // set blank form
          setMem({ price: "", notes:"", location:"", bucket: bucket});
        })
        .catch((res) => {
          console.log("nto success", res.response.data.errors)
          setSuccess(false);
          setErrors(res.response.data.errors);
        });
    }
  };

  const handleEdit = (e) => {
    e.preventDefault();
    console.log("edit and logged in");
    axios
      .put(`http://localhost:8000/api/mems/${mem._id}`, mem)
      .then((res) => {
        setErrors([]);
        setSuccess(true);
      })
      .catch((res) => {
        setSuccess(false);
        console.log('errors', res.response.data.errors)
        setErrors(res.response.data.errors);
      });
  };

  return (
    // { name: "", price: "", notes:"", location:"", bucket: bucket, creator: Cookies.get("userId") }
    <form onSubmit={(submit) ? handleEdit: handleSubmit}>
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
        <input
          type="number"
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
      <label>
        {
          //IMG
          errors.img && (
            <>
              <span className="accent">{errors.img.message}</span>
              <br />
            </>
          )
        }
        <img src={mem.url}/>
        <br/>
        Img Src:
        <input
          type="text"
          value={mem.img}
          onChange={(e) => setMem({ ...mem, img: e.target.value })}
        />
      </label>
      <br/>
      <input type="submit" value={submit || "Add Memory"} />
    </form>
  );
};

export default MemForm;
