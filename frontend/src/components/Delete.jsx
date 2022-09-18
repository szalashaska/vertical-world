import React, { useContext } from "react";
import { useNavigate } from "react-router-dom";
import { ButtonStyled } from "../constans/GlobalStyles";
import AuthContext from "../contexts/AuthContext";
import MessageContext from "../contexts/MessageContext";

const Delete = ({ id, content, children }) => {
  const { authTokens } = useContext(AuthContext);
  const navigate = useNavigate();

  const { setSuccess } = useContext(MessageContext);

  // Check if props are correct
  const allowedContent = ["routes", "walls", "locations"];
  if (!allowedContent.includes(content)) return null;

  const handleDeleteContent = async () => {
    const requestOptions = {
      method: "DELETE",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${String(authTokens.access)}`,
      },
    };
    const endpoint = `/api/${content}/${id}`;

    try {
      const response = await fetch(endpoint, requestOptions);
      const data = await response.json();

      if (response.status === 200) {
        setSuccess(data.success);
        navigate("/");
      }
    } catch (err) {
      console.log("Unexpected error", err);
    }
  };

  return (
    <ButtonStyled
      onClick={() => handleDeleteContent()}
      type="button"
      disabled={children != 0}
    >
      Delete
    </ButtonStyled>
  );
};

export default Delete;
