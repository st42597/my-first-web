import {useState, useEffect} from 'react';
import axios from 'axios';
function Corona() {
  let [returnData, setReturnData] = useState();
  let URL;
  if(process.env.NODE_ENV === 'production'){
    URL = 'https://willkiss.ml:5000/';
  }else{
    URL = 'http://localhost:5000/';
  }
  useEffect(() => {
    async function readContent() {
      const ret = await axios.get(URL + 'Corona');
      setReturnData(ret.data);
      console.log(ret);
    }
    readContent();
  }, [])
  return(
    <div>
      공공 데이터 api 활용 연습을 위한 페이지입니다.      
      {returnData[0].accDefRate._text}
    </div>
  );
}
export default Corona;