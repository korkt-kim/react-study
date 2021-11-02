<div style={팝업스타일}>
    <button onClick={async()=>{
        const res = await 회원가입();
        if(res.success){
            프로필이동();
        }

    }}>전송</button>
</div>