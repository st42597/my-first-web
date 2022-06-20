import {useState, useEffect} from 'react';
import axios from 'axios';
function Corona() {
  let [returnData, setReturnData] = useState();
  useEffect(() => {
    async function readContent() {
      const ret = await axios.get('/api/corona');
      setReturnData(ret.data[0].accDefRate._text);
      console.log(ret);
    }
    readContent();
  }, [])
  return(
    <div>
      공공 데이터 api 활용 연습을 위한 페이지입니다.      
      {returnData}
    </div>
  );
}
export default Corona;