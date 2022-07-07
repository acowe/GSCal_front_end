import TaskListDay from "./TaskListDay";

// Generates display for the list
function TaskList(props){
    return(
        <div className={"ms-lg-0 me-lg-5 mx-md-5 mx-3 pb-2 mt-4 mt-lg-0 mb-lg-0 task_card"}>
            <div className={"task_card_contents"}>
                <TaskListDay month_num={props.month_num} year={props.year} current_wk_start={props.current_wk_start} dayOfWeek={"monday"}
                             generateTimeInfo={props.generateTimeInfo}/>

                <TaskListDay month_num={props.month_num} year={props.year} current_wk_start={props.current_wk_start} dayOfWeek={"tuesday"}
                             generateTimeInfo={props.generateTimeInfo}/>

                <TaskListDay month_num={props.month_num} year={props.year} current_wk_start={props.current_wk_start} dayOfWeek={"wednesday"}
                             generateTimeInfo={props.generateTimeInfo}/>

                <TaskListDay month_num={props.month_num} year={props.year} current_wk_start={props.current_wk_start} dayOfWeek={"thursday"}
                             generateTimeInfo={props.generateTimeInfo}/>

                <TaskListDay month_num={props.month_num} year={props.year} current_wk_start={props.current_wk_start} dayOfWeek={"friday"}
                             generateTimeInfo={props.generateTimeInfo}/>

                <TaskListDay month_num={props.month_num} year={props.year} current_wk_start={props.current_wk_start} dayOfWeek={"saturday"}
                             generateTimeInfo={props.generateTimeInfo}/>

                <TaskListDay month_num={props.month_num} year={props.year} current_wk_start={props.current_wk_start} dayOfWeek={"sunday"}
                             generateTimeInfo={props.generateTimeInfo}/>
            </div>
        </div>
    );
}

export default TaskList;