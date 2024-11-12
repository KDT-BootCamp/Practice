import React from 'react' ;

const styles = {
    wwrapper : {

    },

    messageText : {

    },
};


class Notification extends React.Component {
    constructor(props) {
        super(props);
        this.state = {};
    
    }

    render() {
        return(
            <div style={styles.wraaper}>
                <span style={styles.messageText}>
                    {this.props.message}
                </span>
            </div>
        );  
    }

}


export default Notification ;