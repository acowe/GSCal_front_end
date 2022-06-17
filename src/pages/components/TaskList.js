import TaskListEntry from "./TaskListEntry";

function TaskList(props){
    return(
        <div className={"ms-lg-0 me-lg-5 mx-md-5 mx-3 pb-2 mt-4 mt-lg-0 mb-lg-0 task_card"}>
            <div className={"task_card_contents"}>
                <TaskListEntry month_num={props.month_num} year={props.year} current_wk_start={props.current_wk_start} dayOfWeek={"monday"}/>
                <TaskListEntry month_num={props.month_num} year={props.year} current_wk_start={props.current_wk_start} dayOfWeek={"tuesday"}/>
                <TaskListEntry month_num={props.month_num} year={props.year} current_wk_start={props.current_wk_start} dayOfWeek={"wednesday"}/>
                <TaskListEntry month_num={props.month_num} year={props.year} current_wk_start={props.current_wk_start} dayOfWeek={"thursday"}/>
                <TaskListEntry month_num={props.month_num} year={props.year} current_wk_start={props.current_wk_start} dayOfWeek={"friday"}/>
                <TaskListEntry month_num={props.month_num} year={props.year} current_wk_start={props.current_wk_start} dayOfWeek={"saturday"}/>
                <TaskListEntry month_num={props.month_num} year={props.year} current_wk_start={props.current_wk_start} dayOfWeek={"sunday"}/>
            </div>
        </div>
    );
}

export default TaskList;