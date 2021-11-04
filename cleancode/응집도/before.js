import {useState,useEffect} from 'react';

function Question(){
    const [popupOpend,setPopupOpend] = useState(false); // ☆
    async function handleClick(){
        setPopupOpend(true);
    }

    async function handlePopupSubmit(){ // ☆
        await 질문전송(연결전문가.id);
        alert("질문을 전송했습니다")
    }

    return (
        <div>
            <button onClick={handleClick}>질문하기</button>
            {popupOpend && <Popup title="보험 질문하기"> {/*☆*/}
                <div>전문가가 설명드려요</div>
                <button onClick={handlePopupSubmit}></button>    
            </Popup>}
        </div>
    )
}

//팝업을 조작하는 코드가 ☆ 의 3군대 뚝뚝 떨어져 있다. 
//팝업 열기조작, 팝업 전송조작, 팝업 html