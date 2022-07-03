import CreateGame from "./CreateGame"
const WhichComponent = (props : any) => {
    if(props.component === 0){
      return <CreateGame component={props.component} setComponent={props.setComponent} numberOfParticipant={props.numberOfParticipants} setNumberOfParticipants={props.setNumberOfParticipants} numberOfWordsForEveryOne={props.numberOfWordsForEveryOne} setNumberOfWordsForEveryOne={props.setNumberOfWordsForEveryOne}/>;
    }
    // else if (component === 1){
    //   return <WriteWords />;
    // }else if( component === 2){
    //   return <RunningGame />;
    // }
     else return <div></div>;
  }
  export default WhichComponent;