import React from 'react'
import '../../scss/jjh.scss'

function Header() {
    return (
        <section id="we_jjh">
        <div className="container-fluid text-center">
            <h2 className="font_con_title_e title_blank">We are Ugly Us!</h2>

            <div className="textarea">   
                
                <strong className=" line_height_18 d-block text_blank font_f18regular ">
                    <span className="font_f18regular">Ugly Us</span>는 지속 가능한 식탁을 만듭니다.
                </strong>
               
            </div>

            <ul className="d-lg-flex justify-content-center we_blank_pyj ps-0 text-start text-lg-center">
                <li className="we_padding_pyj d-flex d-lg-block align-items-center mb-5 mb-lg-0  justify-content-center">
                    <img className="we_icon_pyj" src="./img/img_jjh/PNG/we_bag.png" alt="가방" />
                    <div className="col-7 col-lg-12 ps-4 ps-lg-0">
                        <strong className="d-block font_f30bold we_text_pyj">가장 소량씩,가장 신선하게!</strong>
                        <p className="font_text letter_spacing line_height_30">30% off, 합리적인 가격으로 만나요</p>
                    </div>
                    
                </li>
                <li className="we_padding_pyj d-flex d-lg-block align-items-center  mb-5 mb-lg-0  justify-content-center">
                    <img className="we_icon_pyj" src="./img/img_jjh/PNG/we_down.png" alt="가격" />
                    <div className="col-7 col-lg-12 ps-4 ps-lg-0">
                        <strong className="d-block font_f30bold we_text_pyj">친환경 채소를 가장 저렴하게!</strong>
                        <p className="font_text letter_spacing line_height_30">적은양으로 부담없이 즐겨요.</p>
                    </div>
                </li>
                <li className="we_padding_pyj d-flex d-lg-block align-items-center  mb-5 mb-lg-0  justify-content-center">
                    <img className="we_icon_pyj" src="./img/img_jjh/PNG/we_echo.png" alt="환경" />
                    <div className="col-7 col-lg-12 ps-4 ps-lg-0">
                        <strong className="d-block font_f30bold we_text_pyj">환경에 한 발 나은 선택!</strong>
                        <p className="font_text letter_spacing line_height_30">환경에 더 가까운 생산과 소비를 지지해요.</p>
                    </div>                    
                </li>
            </ul>
        </div>
    </section>
    )
}

export default Header
