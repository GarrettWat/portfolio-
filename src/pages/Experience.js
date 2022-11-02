import React from 'react'
import {VerticalTimeline,VerticalTimelineElement,} from "react-vertical-timeline-component";
import "react-vertical-timeline-component/style.min.css";
import SchoolIcon from "@material-ui/icons/School";
import WorkIcon from "@material-ui/icons/Work";




function Experience() {
  return (
    <div className='experience'>
      <VerticalTimeline lineColor='#97BC62FF'>
        <VerticalTimelineElement className='vertical-timeline-element--education'
         date='2017 - 2021'
         iconStyle={{background: "#2C5F2D", color: "#fff"}}
         icon={<SchoolIcon/>}
         >
          <h3 className='vertical-timeline-element-title'> Hempfield Area Senior Highschool, Hempfield, Pennsylvania</h3>
          <p> High School Diploma</p>
         </VerticalTimelineElement>
        <VerticalTimelineElement className='vertical-timeline-element--education'
         date='2021 - Current'
         iconStyle={{background: "#2C5F2D", color: "#fff"}}
         icon={<SchoolIcon/>}
         >
          <h3 className='vertical-timeline-element-title'> Westmoreland County Community College, Youngwood, Pennsylvania</h3>
          <p> AS Computer Science</p>
         </VerticalTimelineElement>
        <VerticalTimelineElement className='vertical-timeline-element--education'
         date='2022'
         iconStyle={{background: "#2C5F2D", color: "#fff"}}
         icon={<SchoolIcon/>}
         >
          <h3 className='vertical-timeline-element-title'> Coding Temple, Remote</h3>
          <p> Software Engineering, Certificate of completion</p>
         </VerticalTimelineElement>
      </VerticalTimeline>
      </div>
  )
}

export default Experience