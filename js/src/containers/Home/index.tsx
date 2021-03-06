import React, { useState } from "react";
import { useHistory } from "react-router-dom";

import Form from "components/Form";
import TextInput from "components/Input/TextInput";
import Button from "components/Input/Button";

import styles from "./styles.scss";

const Home = () => {
  const history = useHistory();
  const [gameId, setGameId] = useState("");
  return (
    <div className={styles.container}>
      <h1>C A T A N B O I S</h1>
      <Form
        className={styles.form}
        onSubmit={e => {
          // TODO(peter): Handle invalid cases (e.g. empty, non-alphanum)
          history.push(`/play/${gameId}`);
        }}
      >
        <TextInput
          onChange={e => {
            setGameId(e.target.value);
          }}
          value={gameId}
          placeholder="mycoolnewgame"
        />
        <Button type="submit" className={styles.button}>
          GO
        </Button>
      </Form>
    </div>
  );
};

export default Home;
