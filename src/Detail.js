import React, {useState} from "react";
import { useHistory, useParams } from 'react-router-dom';

function Detail(props) {
//파라메터값을 변수로 받아 저장할 수 있다. 
// 현재 Url의 모든 값이 저징되어있음
// /:id id자리에 있는 값이 저장
    let { id } = useParams();

    // 방문기록이 담겨있는 오브젝트
    let history = useHistory();

  

    return (
        <div className="container">
            <div className="row">
                <div className="col-md-6">
                    <img src="https://codingapple1.github.io/shop/shoes1.jpg" width="100%" />
                </div>
                <div className="col-md-6 mt-4">
                    <h4 className="pt-5">
                    {props.shoes[id].title}</h4>
                    <p>{props.shoes[id].content}</p>
                    <p>{props.shoes[id].price}</p>
                    <button className="btn btn-danger">주문하기</button>
                    &nbsp;
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