import {useEffect, useState} from 'react';
import axios from 'axios';
import parse from 'html-react-parser';
function Profile() {
    let [returnData, setReturnData] = useState("");
    let URL;
    if(process.env.NODE_ENV === 'production'){
      URL = 'https://willkiss.ml:5000/';
    }else{
      URL = 'http://localhost:5000/';
    }
    useEffect(() => {
      async function readContent() {
        const ret = await axios.get(URL + 'Profile');
          setReturnData(ret.data);
      }
      readContent();
    }, [])
    return(
        <div>
            {parse(returnData)}
        </div>
    );
}
export default Profile;