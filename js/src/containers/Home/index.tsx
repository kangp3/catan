import React, { useState } from "react";

import TextInput from "components/Input/TextInput";

import styles from "./styles.scss";

const Home = () => {
  const [gameId, setGameId] = useState("");
  return (
    <div className={styles.container}>
      <h1>C A T A N B O I S</h1>
      <form>
        <TextInput
          onChange={e => {
            setGameId(e.target.value);
          }}
          value={gameId}
        />
      </form>
    </div>
  );
};

export default Home;
