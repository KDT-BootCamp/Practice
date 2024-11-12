import Avatar from './Avatar' ;

function UserInfo (props) {

    return ( 
            <div className="user-info">
 
                <Avatar user = {{
                    avatarUrl : "s",
                    name : "sss"
                }} />

                <div className="user-info-name">
                    {props.author.name}
                </div>
            </div>
        );
}