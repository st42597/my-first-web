import {useEffect} from 'react';
import GitHubCalendar from 'github-calendar';
function Github() {
    useEffect(() => {
        GitHubCalendar(".calendar", "st42597");
    })
    
    return(
        <div>
            <link
            rel="stylesheet"
            href="https://unpkg.com/github-calendar@latest/dist/github-calendar-responsive.css"
            />
            <div className="calendar">
            Loading the data just for you.
            </div>
        </div>
    );
}
export default Github;