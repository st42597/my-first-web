import {useEffect, useState} from 'react';
import axios from 'axios';
import parse from 'html-react-parser';
function Profile() {
  let [returnData, setReturnData] = useState("");
  useEffect(() => {
    async function readContent() {
      const ret = await axios.get('/api/profile');
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