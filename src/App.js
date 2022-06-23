import "./App.css";
import User from "./User";
import { useSelector, useDispatch } from "react-redux";
import { addUser, deleteUser, updateUsername } from "./cartSlice";
import { useState } from "react";

const App = () => {
  const userList = useSelector((state) => state.users.value);
  const dispatch = useDispatch();
  const [name, setName] = useState("");
  const [username, setUsername] = useState("");
  const [newusername, setNewusername] = useState("");

  console.log("hey whats up");

  return (
    <div className="App">
      {/* <User/> */}

      <div className="">
        {/* <input
          type="text"
          placeholder="name "
          onChange={(e) => {
            setName(e.target.value);
          }}
        />
        <br />
        <br />
        <br /> */}
        <input
          type="text"
          className="input-field"
          placeholder="Add a todo.... "
          onChange={(e) => {
            setUsername(e.target.value);
          }}
        />
        <br />
        <br />
       
        <button
        className="button-add"
          onClick={() =>
            dispatch(
              addUser({
                id: userList[userList.length - 1].id + 1,
                name: name,
                username: username,
              })
            )
          }
        >
          ADD
        </button>
        <div>
          {userList.map((user) => {
            console.log(user);
            return (
              <div className="card">
                <p>{user.name}</p>
                <p>{user.username}</p>
                <input
                  type="text"
                  className="input-field"
                  placeholder="Add a todo.."
                  onChange={(e) => {
                    setNewusername(e.target.value);
                  }}
                />
                <button
                className="button-delete"
                  onClick={() => {
                    dispatch(deleteUser({ id: user.id }));
                  }}
                >
                  Delete
                </button>
                <button
                 className="button-update"
                  onClick={() => {

                    dispatch(
                      updateUsername({ id: user.id, username: newusername })
                    );
                  }}
                >
                  Update
                </button>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default App;
