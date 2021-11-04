import {useState,useEffect,useRef} from 'react';

const useFetch = async () =>{
    // eslint-disable-next-line react-hooks/rules-of-hooks
    const 연결전문가 = await 연결전문가_받아오기();
    return 연결전문가   
}

const useModal=()=>{
    const [popupOpened,setPopupOpened] = useState(false);
    
    const handlePopupSubmit = async()=>{
        await 질문전송(연결전문가.id);
        alert("질문을 전송했습니다")
    }

    const openPopup = ()=>{
        $target.innerHTML += (<Popup title="보험 질문하기">
            <div>전문가가 설명드려요</div>
            <button onClick={handlePopupSubmit}></button>    
        </Popup>)
    }
    return openPopup;
}

function Question(){
    const 연결전문가 = useFetch();
    const openPopup = usePopup();
    async function handleClick($target){
        openPopup($target);
    }

    return (
        <div ref={currentDiv}>
            <button onClick={handleClick(currentDiv.current)}>질문하기</button>
        </div>
    )
}

/*문제점
1. 어떤내용의 팝업을 띄우는지 알 수없다.
2. 팝업에서 버튼을 눌렀을때 어떤 액션을하는지 알 수 없다.
가장 중요한것이 위의 2가지인데 커스텀훅 속에 가려진 안티패턴이다. 
*/

/*
당장 몰라도 되는 디테일은 훅이나 컴포넌트속에 숨긴다.
코드파악에 필수적인 정보는 뭉치지 않는다.
뭉쳐서 코드가 짧아진다고 코드가 깨끗해지는 것이 아니다.
*/