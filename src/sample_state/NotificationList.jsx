import React from 'react' ;
import Notification from './Notification' ;

const ary = [
    {
        id : 1,
        message : "안녕하세요, 오늘 일정을 알려드립니다."
    },
    {   
        id : 2,
        message : "점심 시간이 곧이다"
    },
    {
        id : 3,
        message : "이제 곧 미팅 시작이다"
    },
];


let timer ;

class NotificationList extends React.Component {
    constructor(props){
        super(props);
        this.state = {
            list : [],
        };
    }

    componentDidMount() {
        const { list } = this.state ;
        timer = setInterval(() => {
            if(list.length < ary.length) {
                list.push(ary[list.length]);
                this.setState({
                    list : list,
                });
            } else
            {
                clearInterval(timer) ;
            }
        }, 2000);
    }

    componentWillUnmount() {
        if(timer){
            clearInterval(timer);
        }
    }

    render() {
        return (    
            <div>{ this.state.list.map( (list) => {
                return <Notification  key={list.id} id={list.id} message={list.message} /> ;
        
            })}
            </div>
        );
    }



}


export default NotificationList ;