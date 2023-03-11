
import Adress from "./Adress";
import FullName from "./FullName"
import ProfilePic from "./ProfilePic";


function App() {
  return (
    <div style={{display:"flex" , flexDirection:"column" , alignItems:"center"}} className="App">
      <FullName  />
      <ProfilePic />
     <Adress />
    </div>
  );
}

export default App;
