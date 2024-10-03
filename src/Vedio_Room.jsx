import React from 'react'
import { ZegoUIKitPrebuilt } from '@zegocloud/zego-uikit-prebuilt';
import { useParams } from 'react-router-dom';

const Vedio_Room = () => {

    const {id} = useParams();

    const meeting = (element) => {

        // generate Kit Token
      const appID = 1603889952;
      const serverSecret = "ae710fbe3d5f27136f3dd7351ce5f86f";
      const kitToken =  ZegoUIKitPrebuilt.generateKitTokenForTest(appID, serverSecret, id, Date.now().toString, "shan");

        // Create instance object from Kit Token.
        const zp = ZegoUIKitPrebuilt.create(kitToken);

        zp.joinRoom({
            container: element,
            // sharedLinks: [
            //     {
            //       name: 'Personal link',
            //         url: 'wss://webliveroom1603889952-api.coolzcloud.com/ws',
            //        window.location.protocol + '//' + 
            //        window.location.host + window.location.pathname +
            //         '?id= shan' +
            //         id,
            //     },
            //   ],
            scenario: {
          mode: ZegoUIKitPrebuilt.OneONoneCall, // To implement 1-on-1 calls, modify the parameter here to [ZegoUIKitPrebuilt.OneONoneCall].
        },
      });
    }

  return (
    <>
      <div ref={meeting}></div>
    </>
  )
}

export default Vedio_Room
