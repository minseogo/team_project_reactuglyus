import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap-icons/font/bootstrap-icons.css';
import '../../css/yys.css';
function Footer() {
    return (
        <footer id='yfooter' className='mb-5 section_blankT '>

            <div className='d-lg-flex  d-none d-lg-block justify-content-between align-items-center mb-2 font_base'>
                <p className=' helpUs '>어글리어스 고객센터 070.4769.0271</p>
                <ul className='d-none d-lg-block d-lg-flex justify-content-between me-0 ms-0 snsicon'>
                    <li>
                        <a href="#"><img src="/img/img_yys/svg/sns_Instar.svg" alt="" />
                        </a>
                    </li>

                    <li>
                        <a href="#"><img src="/img/img_yys/svg/sns_kakao.svg" alt="" />
                        </a>
                    </li>

                    <li>
                        <a href="#"><img src="/img/img_yys/svg/sns_X.svg" alt="" />
                        </a>
                    </li>

                    <li>
                        <a href="#">
                            <img src="/img/img_yys/svg/sns_face.svg" alt="" />
                        </a>
                    </li>
                </ul>
            </div>

            <div className='d-none d-lg-block font_base mb-5 day_help'>
                <div className='d-lg-flex  align-items-center justify-content-between mb-5 tiem '>
                    <ul className='day'>
                        <li>화-목요일</li>
                        <li>월·금요일</li>
                        <li>토·일·공휴일
                        </li>
                    </ul>
                    <ul className=' text-wrap dayS '>
                        <li>11:00 ~ 18:00 (점심시간 12:00 ~ 13:00)</li>
                        <li>09:00 ~ 18:00 (점심시간 12:00 ~ 13:00)</li>
                        <li>휴무</li>
                    </ul>

                </div>
                <div className='d-flex align-items-center justify-content-between'>
                    <div>
                        <button className='me-2 fBtns'>문의하기</button>
                        <button className='fBtns'>자주하는질문</button>
                    </div>
                    <h2 className='fLogo'>
                        <a href="#">
                            <img src="/img/img_yys/svg/ugly_us_logo.svg" alt="로고" />
                        </a>
                    </h2>
                    

                </div>
                
                
            </div>

            <div className='d-lg-flex justify-content-between  font_base '>
                
                <ul className='text-right  about'>
                    <li className='d-lg-flex justify-content-start'>
                        <p className=''>
                            <strong>상호명</strong>: 주식회사 캐비지
                        </p>
                        <p>
                             <strong>대표</strong>: 최현주
                        </p>
                        <p>
                           <strong>사업자등록번호</strong>: 572-81-02287

                        </p>
                        <p>
                            <strong>소재지</strong>: 서울특별시 영등포구 양평로 144, 8층(양평동5가)
                        </p>
                    </li>

                    <li className='d-lg-flex justify-content-start'>
                        <p>
                           <strong>통신판매업 신고번호 </strong>: 2021-화성동부-0302
                        </p>
                        <p>
                           <strong>제휴 및 납품 문의</strong>: biz@uglyus.co.kr
                        </p>
                        <p>
                           <strong>농산물 납품 및 긴급구출 제보</strong>: farm@uglyus.co.kr
                        </p>
                    </li>
                </ul>
                <div className='d-lg-none d-flex align-items-center  m_btn'>
                    <p>고객센터</p>
                    <button className='bi bi-chevron-down'></button> 
                </div>
                <ul>
                <li className='svi text-center'>
                        <p>서비스 이용약관 개인정보 처리방침</p>
                    </li>
                </ul>

            </div>


        </footer>
    );
}

export default Footer;