import {useState,useEffect,useRef} from 'react';

function Test(){
    const targetRef = useRef();
    useEffect(()=>{
        const observer = new IntersectionObserver(
            ([{isIntersecting}]) =>{
                if(isIntersecting){
                    fetchCats(nextPage)
                }
            }
        );
        return () =>{
            observer.unobserve(targetRef.current);
        }
    })
    
    return <div ref={targetRef}>더 보기</div>
}

//intersection 부분과 api콜이 섞여있는것이 아쉽다.
