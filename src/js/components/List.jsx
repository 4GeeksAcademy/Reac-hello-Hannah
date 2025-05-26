import React from "react";
import Item from "./Item";

const List = ({ tasks, onDelete }) => {
    return (
        <ul className="list-group">
            {tasks.map((task, index) => (
                <Item
                    key={index}
                    text={task}
                    onDelete={() => onDelete(index)}
                />
            ))}
        </ul>
    );
};

export default List;