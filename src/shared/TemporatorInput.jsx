
const scaleNames = {
    c : '섭씨',
    f : '화씨',
}

function TemporatorInput (props) {


    const tempHandler = (e) => {

        props.onTempChange(e.target.value);
        // 값을 부모 컴포넌트의 state로 옮기는 건가 ?
    }

    return (
        <fieldset>
            <legend>
                온도를 입력하세요(단위 : {scaleNames[props.scale]})
            </legend>
                <input type="text" value={props.temp} onChange={tempHandler} />
            
        </fieldset>
    );
}


export default TemporatorInput ;