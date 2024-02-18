import { useState } from 'react';
import styles from '../styles/style.module.scss';
import { TaskType } from '../App';
import Checkbox from './Task_Checkbox';
import TaskContent from './Task_Content';
import OptionButtons from './Task_OptionButtons';
interface TaskProps {
    task: TaskType;
    updateTaskInfo: (id: number, content?: string) => void;
    onRemoveClick: (id: number) => void;
}

export default function Task({
    task,
    updateTaskInfo,
    onRemoveClick,
}: TaskProps) {
    const [checked, setChecked] = useState(task.checked);
    const [content, setContent] = useState(task.content);
    const [editMode, setEditMode] = useState(false);

    // -------------- CheckBox -------------- //

    function handleCheck(e: React.MouseEvent) {
        setChecked(!checked);
        const target = e.target as HTMLDivElement;
        target.classList.toggle(`${styles.taskChecked}`);
        updateTaskInfo(task.id);
    }

    function handleCheckMouseIn(e: React.MouseEvent) {
        const target = e.target as HTMLDivElement;
        target.innerHTML = 'DONE?';
        target.classList.add(`${styles.taskHovered}`);
    }

    function handleCheckMouseOut(e: React.MouseEvent) {
        const target = e.target as HTMLDivElement;
        target.innerHTML = checked ? 'DONE!' : 'TODO';
        target.classList.remove(`${styles.taskHovered}`);
    }

    // -------------- TaskContent -------------- //

    function handleEditMode() {
        setEditMode(true);
    }

    function handleEdit(e: React.ChangeEvent) {
        const target = e.target as HTMLInputElement;
        setContent(target.value);
    }

    // -------------- TaskContent & OptionButtons -------------- //

    function handleEditConfirm() {
        setEditMode(false);
        updateTaskInfo(task.id, content);
    }

    // -------------- Task Element -------------- //

    return (
        <div className={styles.task}>
            <Checkbox
                onClick={handleCheck}
                onMouseOver={handleCheckMouseIn}
                onMouseLeave={handleCheckMouseOut}
                checked={checked}
            />
            <TaskContent
                id={task.id.toString()}
                checked={checked}
                content={content}
                editMode={editMode}
                onContentClick={handleEditMode}
                onInputChange={handleEdit}
                onEditClick={handleEditConfirm}
            />
            <OptionButtons
                id={task.id}
                editMode={editMode}
                onEditClick={handleEditConfirm}
                onRemoveClick={onRemoveClick}
            />
        </div>
    );
}
