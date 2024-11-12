import { useContext } from "react";
import TemaContext from "./TemaContext";

function MainContent(props) {

    const {theme, temaHandler} = useContext(TemaContext) ;



    return(
        <div className="container" 
            style={{backgroundColor : theme === 'light' ? 'white' : 'black',
            color : theme === 'light' ? 'black' : 'whiter'
            }}>
            <p>안녕 컨텍스트를 이용한 테마 변경 코드야</p>
            <button onClick={temaHandler}>Dark Or Light Theme Change</button>
        </div>
    );
}

export default MainContent ;