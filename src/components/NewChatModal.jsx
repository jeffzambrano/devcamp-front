import { RiCloseLine } from "react-icons/ri";
import { useState } from "react";
import { useCreateGroup} from "../services/messaging";
import { useQueryClient } from "react-query";


export const NewChatModal = (props) => {
  const [name, setName] = useState("");
  const [description, setDescription] = useState("");
  const { mutate } = useCreateGroup();


  const enterName = (e) => {
    const nameData = e.target.value;
    setName(nameData);
  };
  const enterDescription = (e) => {
    const descriptionData = e.target.value;
    setDescription(descriptionData);
  };
  
  const clearInputs = () => {
    setName("");
    setDescription("");
  }

  const handleSubmit = async (e) => {
    e.preventDefault();
    await mutate({groupName: name, userId: props.user.id});
    clearInputs()
    props.toggleModal();
  }


  return (
    <div className={`newChatModal ${props.showModal ? "show" : ""}`}>
      <div className="newChatModal__content">
        <div className="newChatModal__header">
          <h2>New Chat</h2>
          <button onClick={() => props.toggleModal()}>
            <RiCloseLine />
          </button>
        </div>
        <form onSubmit={(e) => handleSubmit(e)}>
          <div className="newChatModal__body">
            <div className="newChatModal__body__input">
              <input
                type="text"
                placeholder="Enter chat name"
                value={name}
                onChange={(e) => enterName(e)}
              />
            </div>
            <div className="newChatModal__body__input">
              <input
                type="text"
                placeholder="Enter chat description"
                value={description}
                onChange={(e) => enterDescription(e)}
              />
            </div>
            <div className="newChatModal__body__button">
              <button type="button" onClick={() => props.toggleModal()}>
                Cancel
              </button>
              <button type="submit">Create Chat</button>
            </div>
          </div>
        </form>
      </div>
    </div>
  );
};
