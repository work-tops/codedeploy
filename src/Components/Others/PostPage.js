import React from "react";


function PostPage() {
    return (
        <div className="row project_post">
            <div className="col-6">
                <p className="greetings-user">Good Afternoon , Abigail</p>
            </div>
            <div className="col-6">
                <span className="todo-tasks">Open Projects <span className="badge bg-secondary">0</span></span>
                <span className="todo-tasks">WorkStreams <span className="badge bg-secondary">2</span></span>
                <span className="todo-tasks">Invoice Due <span className="badge bg-secondary">1</span></span>
            </div>
        </div>
    )
}
export default PostPage