import {Container, Row, Col} from "react-bootstrap";
import CalWeek from "./CalWeek";
import CalCourses from "./CalCourses"
import CalWkDays from "./CalWkDays";
import {useState} from "react";


// Given a month number and a year, returns the number of days in the month of the year
function daysInMonth (month, year) { // Use 1 for January, 2 for February, etc.
    return new Date(year, month, 0).getDate();
}

// Generates calendar display
function Calendar(props){
//__________________________________Instance Variables______________________________________//

    // Course lists to manipulate display of courses
    const courseList = ["chem", "math", "phys", "bio", "csci","engr","other"];
    const courseNameMap = [["",""], ["chem", "HMC Chemistry 23B SP22"],["math", "HMC Math 73 SP22"],
        ["phys", "HMC Phys 24 Sec 1-8 SP22"], ["bio", "Bio 52"], ["csci", "CS60 Spring 2020"], ["engr", "HMC E79 Fall 2020"], ["other", "HMC CS124 FA21"]];

    // Variables to hold information about the current month, the number of days in the current month,
    // and the number of days in the month before it
    const month = props.num_to_month(props.month_num),
          numDayInMonth = daysInMonth(props.month_num, props.year),
          numDayInPrevMonth = (props.month_num == 1? daysInMonth(12, props.year - 1) : daysInMonth(props.month_num-1, props.year))

    // State variables to control display of elements on the calendar
    const [filter, setCourseFilter] = useState(["",""]);
    const [weekPos, setWeekPos] = useState(0);

//__________________________________Functions______________________________________//

    // Changes the course filter (for filtered display of events by course)
    function changeFilter(elem_id){
        if(elem_id == filter[0]){
            setCourseFilter(["",""]);
        }
        else{
            for (let i=0; i < courseNameMap.length; i++){
                if(courseNameMap[i][0] == elem_id){
                    setCourseFilter(courseNameMap[i]);
                    return;
                }
            }
            setCourseFilter(["",""]);
        }
    }

    // Changes the week position (ie the week displayed on smaller display windows)
    function changeWeekPos(dir){
        if(dir == "up"){
            if (weekPos > 0){
                setWeekPos(weekPos-1);
            }
        }
        else{
            if(weekPos < 4){
                setWeekPos(weekPos + 1);
            }
        }
    }

    return(
        <div className={"mx-md-5 mx-3 my-3 my-md-4 mt-lg-4 mb-lg-3 pb-2 pb-lg-4 pb-xl-3 cal_card"}>
            <h1 className={"cal_head"}>{month + " " + props.year}</h1>
            <div className={"cal_stuff_immovable"}>
                <div className={"cal_stuff_movable down_"+weekPos.toString()}>
                    <CalWkDays/>
                    <Container className={"mx-sm-0 px-0 cal"}>

                        <CalWeek month={props.month_num} year={props.year} dayInMonth={numDayInMonth} wk_type={"cal_wk_fst"} wkNum={1} wk_of={props.current_wk_start}
                                 filter={filter[1]} eventOn={props.eventOn} enableEventOn={props.enableEventOn} selected={props.selected}
                                 dayInPrevMonth={numDayInPrevMonth} num_to_month={props.num_to_month} generateTimeInfo={props.generateTimeInfo}/>

                        <CalWeek month={props.month_num} year={props.year} dayInMonth={numDayInMonth} wk_type={"cal_wk snd"} wkNum={8} wk_of={props.current_wk_start+7}
                                 filter={filter[1]} eventOn={props.eventOn} enableEventOn={props.enableEventOn} selected={props.selected}
                                 dayInPrevMonth={numDayInPrevMonth} num_to_month={props.num_to_month} generateTimeInfo={props.generateTimeInfo}/>

                        <CalWeek month={props.month_num} year={props.year} dayInMonth={numDayInMonth} wk_type={"cal_wk trd"} wkNum={15} wk_of={props.current_wk_start+14}
                                 filter={filter[1]} eventOn={props.eventOn} enableEventOn={props.enableEventOn} selected={props.selected}
                                 dayInPrevMonth={numDayInPrevMonth} num_to_month={props.num_to_month} generateTimeInfo={props.generateTimeInfo}/>

                        <CalWeek month={props.month_num} year={props.year} dayInMonth={numDayInMonth} wk_type={"cal_wk frt"} wkNum={22} wk_of={props.current_wk_start+21}
                                 filter={filter[1]} eventOn={props.eventOn} enableEventOn={props.enableEventOn}selected={props.selected}
                                 dayInPrevMonth={numDayInPrevMonth} num_to_month={props.num_to_month} generateTimeInfo={props.generateTimeInfo}/>

                        <CalWeek month={props.month_num} year={props.year} dayInMonth={numDayInMonth} wk_type={"cal_wk_last"} wkNum={29} wk_of={props.current_wk_start+28}
                                 filter={filter[1]} eventOn={props.eventOn} enableEventOn={props.enableEventOn} selected={props.selected}
                                 dayInPrevMonth={numDayInPrevMonth} num_to_month={props.num_to_month} generateTimeInfo={props.generateTimeInfo}/>

                    </Container>
                </div>
            </div>
            <div className={"cal_up_down"}>
                <div className={"cud_up"} onClick={(e)=> changeWeekPos("up")}><i className="fa-solid fa-angle-up"></i></div>
                <div className={"cud_down"} onClick={(e)=> changeWeekPos("down")}><i className="fa-solid fa-angle-down"></i></div>
            </div>
            <CalCourses courseList={courseList} changeFilter={changeFilter} filter={filter[0]}/>
        </div>

    );
}

export default Calendar;