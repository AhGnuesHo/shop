import React, {useState} from "react";
import { useHistory, useParams } from 'react-router-dom';
import styled from 'styled-components';
import './Detail.scss';

// 박스라는 컴포넌트임
// css를 미리 입혀놓은 컴포넌트
let 박스 = styled.div`
    padding : 20px;
`;

let 제목 = styled.h4`
    font-size : 25px;
    // props 중에 색상이라는 것을 props에게 넣어주겠다
    color : ${ props => props.색상 }
`

function Detail(props) {
//파라메터값을 변수로 받아 저장할 수 있다. 
// 현재 Url의 모든 값이 저징되어있음
// /:id id자리에 있는 값이 저장
    let { id } = useParams();

    // 방문기록이 담겨있는 오브젝트
    let history = useHistory();

    let 찾은상품 = props.shoes.find(function(상품아이디){
        return 상품아이디.id == id
    });

    return (
        <div className="container">
            <박스>
                {/* <제목 색상 = {'red'}> */}
                <제목 className="red">
                 Detail
                </제목>
            </박스>
            <div className="row">
                <div className="col-md-6">
                    <img src="https://codingapple1.github.io/shop/shoes1.jpg" width="100%" />
                </div>
                <div className="col-md-6 mt-4">
                    <h4 className="pt-5">
                        {찾은상품.title}</h4>
                    <p>{찾은상품.content}</p>
                    <p>{찾은상품.price}</p>
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