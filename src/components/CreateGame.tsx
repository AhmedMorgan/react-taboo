const CreateGame = (props : any) => {
  return (
    <div>
      <div>Welcome to Taboo</div>
      <div>
        To start a new Game write the number of participants and the number of
        words for everyone then press Start Game
      </div>
      <label> number of participants</label>
      <input
        type="text"
        value={props.numberOfParticipants}
        onChange={(e) => {
            props.setNumberOfParticipants(e.target.value);
        }}
      />
      <br />
      <label> number of words</label>
      <input
        type="text"
        value={props.numberOfWordsForEveryOne}
        onChange={(e) => {
            props.setNumberOfWordsForEveryOne(e.target.value);
        }}
      />
      <br />
      <input
        type="submit"
        value="Start Game"
        disabled={
            props.numberOfParticipants === "" || props.numberOfWordsForEveryOne === ""
        }
        onClick={() => {
            props.setComponent(props.component + 1);
        }}
      />
    </div>
  );
};
export default CreateGame;
