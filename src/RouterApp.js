import {  BrowserRouter as Router, Route , Routes} from 'react-router-dom';
import BoardPage from './pages/BoardPage';


function RouterApp() {
    return(

        <div className="container">
            <Router>
                <Routes>
                    <Route path="/board" element={<BoardPage/>}></Route>
                </Routes>
            </Router>

        </div>
    )
}


export default RouterApp;