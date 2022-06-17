function CalCourses(props){
    const displayCourses = props.courseList.map((c,i) => {
        return(<li className={"ms-3 me-3 py-2 course_"+(i+1)}>{c}</li>);
    })
    return(
        <div className={"my-3 ps-0 cal_key"}>
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