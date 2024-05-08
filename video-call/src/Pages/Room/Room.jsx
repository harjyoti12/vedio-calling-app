
import React from "react";
import { useParams } from "react-router-dom";
import { ZegoUIKitPrebuilt } from "@zegocloud/zego-uikit-prebuilt";


const Room = () => {
  const { roomId } = useParams();

  const myMeeting = async (element) => {
    const userID = Math.floor(Math.random() * 10000) + "";
    const userName = "userName" + userID;
    const appID = Number( import.meta.env.VITE_APP_ID) ;
    const serverSecret =  import.meta.env.VITE_SERVER_SECRET;
    const kitToken = ZegoUIKitPrebuilt.generateKitTokenForTest(
      appID,
      serverSecret,
      roomId,
      userID,
      userName
      
    );
    const zc = ZegoUIKitPrebuilt.create(kitToken);
    zc.joinRoom({
      container: element,
      sharedLinks: [
        { name: "Copy Link", url: window.location.protocol + '//' + window.location.host  + window.location.pathname + '?roomId=' + roomId },
      ],
      scenario: {
        mode: ZegoUIKitPrebuilt.GroupCall,
      },
      showRoomTimer:true,
      showLayoutButton: true,
      maxUsers:6
    });
  };
  return (
    <div>
      <div ref={myMeeting} />
    </div>
  );
};

export default Room;













