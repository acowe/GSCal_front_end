
// Generates display of course key at the bottom of the calendar
function CalCourses(props){

    // Current course filter variable
    const courseFilter = props.filter;

    // Display variable to generate elements for the key
    const displayCourses = props.courseList.map((c,i) => {
        const tpStr = ((courseFilter == "" || c == courseFilter)? " " : " tp ");
        return(<li id={c} className={"ms-3 me-3 py-2" + tpStr + "course_"+(i+1)}
                       onClick={(e) => props.changeFilter(e.target.id)}>
                {c}</li>);
    });

    return(
        <div className={"mb-3 mt-1 mt-sm-3 ps-0 cal_key"}>
            <div className={"text-start mb-0 pe-0 key"}>
                <h4 className={"mb-0 key_text"}>View by class:</h4></div>
            <div className={"courses"}>
                <ul className={"ps-0"}>
                    {displayCourses}

                </ul>
            </div>
        </div>
    );
}
export default CalCourses;