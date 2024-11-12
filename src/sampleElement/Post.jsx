const styles = {
    wrapper : {
        margin : 8,
        padding : 8,
        border : "1px solid gray",
        borderRadius : 16,
        display : "flex",
        flexDirection : "row",
    },

    image : {
        width : 50,
        height : 50,
        borderRadius : 25,
    },
    writerTxt : {
        color : 'black',
        fontSize : 16,
        fontWeight : 'bold'
    },
    subjectTxt : {
        color : 'black',
        fontSize : 16,
        
    },
    content : {
        justifyContent : 'center',
        flexDirection : "column",
        display : 'flex',
        marginLeft : 8,
    }
}

function Post (props) {
        
    return (
        <div style={styles.wrapper} onClick={(e) => {
            console.log("debug >>> ", props.subject);
        }}>
            <div>
                <img src="https://upload.wikimedia.org/wikipedia/commons/8/89/Portrait_Placeholder.png" 
                style={styles.image} alt="human"/>
            </div>
            <div style={styles.content}>
                <span style={styles.writerTxt}>{props.writer}</span>
                <span style={styles.subjectTxt}>{props.subject}</span>
            </div>
        </div>
    );
}

export default Post ;
