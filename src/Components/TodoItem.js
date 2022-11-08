import './TodoItem.css'

export default function TodoItem(props) {
    let cl = 'todoItem';
    if(props.item.isCompleted) {
        cl += ' todoItem-completed';
    }
    return (
        <li className={cl} onClick={props.onClickToogle}>
            {props.item.title} <span onClick={props.onClickDelete}><i className="fas fa-times"></i></span>
        </li>
    );
};