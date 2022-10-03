import React from 'react'
import "./Chat.css"
import StudentDashboard from "../Dashboard/StudentDashboard"
import SchoolAdminDashboard from '../Dashboard/SchoolAdminDashboard'

const SchoolAdminChat = () => {
  return (
    <>
    <SchoolAdminDashboard/>
    <div className="chatclass">
    <div class="chatclcontainer">
  <div class="chatclchatbox">
    <div class="chatcltop-bar">
      <div class="chatclavatar"><p>V</p></div>
      <div class="chatclname">Voldemort</div>
      <div class="chatclicons">
        <i class="chatclfas fa-phone"></i>
        <i class="chatclfas fa-video"></i>
      </div>
      <div class="chatclmenu">
        <div class="chatcldots"></div>
      </div>
    </div>
    <div class="chatclmiddle">
      <div class="chatclvoldemort">
        <div class="chatclincoming">
          <div class="chatclbubble">Hey, Father's Day is coming up..</div>
          <div class="chatclbubble">What are you getting.. Oh, oops sorry dude.</div>
        </div>
        <div class="chatcloutgoing">
          <div class="chatclbubble lower">Nah, it's cool.</div>
          <div class="chatclbubble">Well you should get your Dad a cologne. Here smell it. Oh wait! ...</div>
        </div>
        <div class="chatcltyping">
          <div class="chatclbubble">
            <div class="chatclellipsis one"></div>
            <div class="chatclellipsis two"></div>
            <div class="chatclellipsis three"></div>
          </div>
        </div>
      </div>
    </div>
    <div class="chatclbottom-bar">
      <div class="chatclchat">
        <input class = "chatclinput" type="text" placeholder="Type a message..." />
        <button class = "chatclbutton" type="submit">Send</button>
      </div>
    </div>
  </div>
  <div class="chatclmessages"></div>
  {/* <div class="chatclprofile">
    <div class="chatclavatar"><p>H</p></div>
    <div class="chatclname2">Harry<p class="chatclemail">Harry@potter.com</p></div>
  </div> */}
  <ul class="chatclpeople">
    <li class="chatclperson focus">
      <span class="chatcltitle">Voldemort </span>
      <span class="chatcltime">2:50pm</span><br/>
      <span class="chatclpreview">What are you getting... Oh, oops...</span>
    </li>
     <li class="chatclperson">
      <span class="chatcltitle">Ron</span>
      <span class="chatcltime">2:25pm</span><br/>
      <span class="chatclpreview">Meet me at Hogsmeade and bring...</span>
    </li>
    <li class="chatclperson">
      <span class="chatcltitle">Hermione</span>
      <span class="chatcltime">2:12pm</span><br/>
      <span class="chatclpreview">Have you and Ron done your hom...</span>
    </li>
  </ul>
</div>
</div>
    </>
  )
}

export default SchoolAdminChat