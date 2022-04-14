import React, {useState} from "react";
import { useHistory } from 'react-router-dom';

function Detail() {

    // 방문기록이 담겨있는 오브젝트
    let history = useHistory();

    return (
        <div className="container">
            <div className="row">
                <div className="col-md-6">
                    <img src="https://codingapple1.github.io/shop/shoes1.jpg" width="100%" />
                </div>
                <div className="col-md-6 mt-4">
                    <h4 className="pt-5">상품명</h4>
                    <p>상품설명</p>
                    <p>120000원</p>
                    <button className="btn btn-danger">주문하기</button>
                    <button className="btn btn-danger"
                        onClick={()=>{
                            history.goBack();  
                            // 해당경로로이동
                            // history.push('/')
                                  
                        }}
                    >뒤로가기</button>
                </div>
            </div>
        </div>
    )
}
// 익스포트할 변수,함수명
export default Detail;