import React, { useEffect, useState } from 'react';
import { UserAuth } from '../context/AuthContext';
import { useNavigate } from "react-router-dom";
import EditIcon from '@mui/icons-material/Edit';
import DeleteIcon from "@mui/icons-material/Delete";
import CheckIcon from '@mui/icons-material/Check';
import AddIcon from "@mui/icons-material/Add";
import { uid } from "uid";
import { auth, db } from "../firebase.js";
import { set, ref, onValue, update, remove } from "firebase/database";

const Account = () => {
  const [todo, setTodo] = useState("");
  const [todos, setTodos] = useState([]);
  const { logOut, user } = UserAuth();
  const [isEdit, setIsEdit] = useState(false);
  const [tempUidd, setTempUidd] = useState("");
  const navigate = useNavigate();

  const handleSignOut = async () => {
    try {
      await logOut();
    } catch (error) {
      console.log(error);
    }
  };
  useEffect(() => {
    auth.onAuthStateChanged((user) => {
      if (user) {
        // read
        onValue(ref(db, `/${auth.currentUser.uid}`), (snapshot) => {
          setTodos([]);
          const data = snapshot.val();
          if (data !== null) {
            Object.values(data).map((todo) => {
              setTodos((oldArray) => [...oldArray, todo]);
            });
          }
        });
      } else if (!user) {
        navigate("/");
      }
    });
  }, []);
  const writeToDatabase = () => {
    const uidd = uid();
    set(ref(db, `/${auth.currentUser.uid}/${uidd}`), {
      todo: todo,
      uidd: uidd
    });

    setTodo("");
  };

  //update
  const handleUpdate = (todo) => {
    setIsEdit(true);
    setTodo(todo.todo);
    setTempUidd(todo.uidd);
  };
  const handleEditConfirm = () => {
    update(ref(db, `/${auth.currentUser.uid}/${tempUidd}`), {
      todo: todo,
      tempUidd: tempUidd
    });

    setTodo("");
    setIsEdit(false);
  };
//delete
  const handleDelete = (uid) => {
    remove(ref(db, `/${auth.currentUser.uid}/${uid}`));
  };

  return (
    <div className='w-[300px] m-auto'>
      <h1 className='text-center text-2xl font-bold pt-12'>Let's List Your Todo's</h1>
      <div>
        <p>Welcome, {user?.displayName}</p>
      </div>
      
      <input type='text' placeholder='Add todo...' value={todo} onChange={(e)=> setTodo(e.target.value)}></input>
      <AddIcon onClick={writeToDatabase} className="add-confirm-icon" />
      {todos.map((todo) => (
        <div>
          <h1>{todo.todo}</h1>
          
          <EditIcon
          fontSize="large"
          onClick={() => handleUpdate(todo)}
          className="edit-button"
        />
         <DeleteIcon
            fontSize="large"
            onClick={() => handleDelete(todo.uidd)}
            className="delete-button"
          />
        </div>
          ))}
      {/* <button onClick={writeToDatabase}>Add</button> */}
      {isEdit ? (
        <div>
        <CheckIcon onClick={handleEditConfirm} className="add-confirm-icon"/>
        </div>
      ) : (
        <div>
         
        </div>
      )}
    </div>
  );
};

export default Account;
