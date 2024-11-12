import UserInfo from './UserInfo' ;

function Comment (props) {

    return (
        <div className="comment">
            
            <UserInfo  author = {{
                name : "aaa"
            }}/>
            
            <div className="comment-text">
                {props.text}
            </div>

            <div className="comment-date">
                {formatDate(props.date)}
            </div>
        </div>

    );
}

export default Comment ;