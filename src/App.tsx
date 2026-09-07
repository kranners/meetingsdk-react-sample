import "./App.css";
import { ZoomMtg } from "@zoom/meetingsdk";

ZoomMtg.preLoadWasm();
ZoomMtg.prepareWebSDK();

const meetingNumber = import.meta.env.VITE_ZOOM_MEETING_NUMBER;
const passWord = import.meta.env.VITE_ZOOM_PASSWORD;
const userName = import.meta.env.VITE_ZOOM_USER_NAME;
const userEmail = import.meta.env.VITE_ZOOM_USER_EMAIL;
const signature = import.meta.env.VITE_ZOOM_SIGNATURE;
const leaveUrl = import.meta.env.VITE_ZOOM_LEAVE_URL;

function App() {
  function startMeeting() {
    document.getElementById("zmmtg-root")!.style.display = "block";

    ZoomMtg.init({
      leaveUrl,
      patchJsMedia: true,
      leaveOnPageUnload: true,
      success: (success: unknown) => {
        console.log(success);
        // can this be async?
        ZoomMtg.join({
          signature: signature,
          meetingNumber: meetingNumber,
          passWord: passWord,
          userName: userName,
          userEmail: userEmail,
          success: (success: unknown) => {
            console.log(success);
          },
          error: (error: unknown) => {
            console.log(error);
          },
        });
      },
      error: (error: unknown) => {
        console.log(error);
      },
    });
  }

  return (
    <div className="App">
      <main>
        <h1>Zoom Meeting SDK Sample React</h1>
        <button onClick={startMeeting}>Join Meeting</button>
      </main>
    </div>
  );
}

export default App;
