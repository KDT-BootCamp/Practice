
import Button from './Button';

function ConfirmDialog() {
    return (
        <dvi>
            <p>
                확인 버튼을 눌러주세요       
                <Button color='green'>확인</Button>
                &nbsp;&nbsp;&nbsp;
                <button class='btn btn-primary'>확인2</button>
            </p>    
        </dvi>
    ) ;
}

export default ConfirmDialog



// html 태그는 소문자, Component 태그는 대문자 시작