import './Content.css';
import {useState, useEffect} from 'react';
import ReactMarkdown from 'react-markdown';
/*import Profile from './Profile.md';*/
import axios from 'axios';

function Content(props) {
    let styles;
    if(props.sidebarstate === 'OFF'){
        styles={width: `70vw`};
    }
    if(props.sidebarstate === 'ON'){
        styles={width: `calc(70vw - 240px)`};
    }
    let [markdown, setMarkdown] = useState("");
  
    useEffect(() => {
      async function a() {
        const Profile = await axios.get('http://localhost:5000/content')
        console.log(Profile.data.content);
        setMarkdown(Profile.data.content);
        /*fetch(Profile).then(res => res.text()).then((markdown) => setMarkdown(markdown));*/
      }
      a();
    }, [])
    let text = "# 1. 완전 탐색과 분할 정복\nPS를 할 때 가장 먼저 고려해야할 풀이는 문제에 주어진 그대로 \"무식하게 푸는 것\"입니다. 간과하기 쉬운 것이, 이 무식한 풀이로 풀리는 문제가 꽤 많은데 불구하고 많은 사람들은 쉬운 문제에 너무 어렵게 접근하곤 합니다. 오늘 다룰 알고리즘은 완전 탐색(brute-force)과 분할 정복(divide-and-conquer)입니다.\n\n## 완전 탐색 👊\nPS에서 \"무식하게 푼다\"라고 함은 가능한 경우의 수를 일일이 나열하면서 답은 찾는 방법을 의미합니다.\n이 알고리즘을 <b>완전 탐색(brute-force)</b>이라고 부르죠.";
    return (
      <div
      className="content-container"
      style={styles}
      >
        <div dangerouslySetInnerHTML={{__html: markdown} } />
          
      </div>
    );
  }
  
  export default Content;
  