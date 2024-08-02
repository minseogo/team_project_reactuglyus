import React from 'react';
import '../../css/veg.css';
import { Buttonmore } from '../commonui';

const RecipeSection = () => {
    return (
        <section id="recipe_yjy" className="section section_blank">
            <div className="recipe_background"></div>
            <div className="container text-center">
                <h2 className="font_con_title_k title_blank font_yjy ">출구 없는 레시피</h2>
                <p className="font_leadcopy title_blank font_yjy18">나만의 레시피를 알려주세요</p>
                <div className="row mt-4 justify-content-center">
                    <ul className="row col-lg-6">
                        <li className="col-12 mb-4">
                            <div className="overflow-hidden orange d-flex flex-column after justify-content-between">
                                <a href="" className="d-block overflow-hidden targetThumb">
                                    <img src="./img/img_yjy/recipe/Jeonju_Bibimbap.jpg" alt="전주비빔밥" className="" />
                                </a>
                                <div className="j-text py-4 py-lg-0">
                                    <a href="">
                                        <p className="font_yjy letter_spacing my-0 text-start px-4">한끼뚝딱 전주비빔밥</p>
                                    </a>
                                    <div className="d-flex justify-content-between">
                                        <p className="font_yjy18 px-4 mb-0">#한식 #시금치 #당근</p>
                                        <p className="font_yjy18 text-right px-4 mb-0">윤주연님</p>
                                    </div>
                                </div>
                            </div>
                        </li>
                        <li className="col-6 overflow-hidden">
                            <div>
                                <a href="" className="d-block overflow-hidden targetThumb_a">
                                    <img src="./img/img_yjy/recipe/Vietnamese spring _roll.jpg" alt="월남쌈" className="" />
                                </a>
                            </div>
                            <div className="v-text">
                                <a href="">
                                    <p className="font_subtitle_k_yjy letter_spacing my-0 text-lg-start">한 입 가득 월남쌈</p>
                                </a>
                                <div className="d-flex justify-content-between d-none d-lg-flex">
                                    <p className="font_text_yjy">#볼 빵빵 #새싹채소 #파프리카</p>
                                    <p className="font_text_yjy text-right">정장훈 님</p>
                                </div> 
                            </div>
                        </li>
                        <li className="col-6 overflow-hidden">
                            <div>
                                <a href="" className="d-block overflow-hidden targetThumb_b">
                                    <img src="./img/img_yjy/recipe/cucumber.jpg" alt="오이소박이" className="" />
                                </a>
                            </div>
                            <div className="c-text">
                                <a href="">
                                    <p className="font_subtitle_k_yjy letter_spacing my-0  text-lg-start">아삭아삭 오이소박이</p>
                                </a>
                                <div className="d-flex justify-content-between d-none d-lg-flex">
                                    <p className="font_text_yjy">#새콤달콤 #오이 #부추</p>
                                    <p className="font_text_yjy text-right">박연주 님</p>
                                </div>
                            </div>
                        </li>
                    </ul>
                    
                    <ul className="row col-lg-6 d-none d-lg-flex">
                        <li className="col-12 order-lg-2 mt-4 d-none d-lg-block">
                            <div className="orange overflow-hidden d-flex flex-column after justify-content-between">
                                <a href="" className="d-block overflow-hidden targetThumb">
                                    <img src="./img/img_yjy/recipe/Jjambbong.jpg" alt="짬뽕" className="other" />
                                </a>
                                <div className="jjam-text">
                                    <p className="font_yjy letter_spacing my-0 text-start px-4">
                                        <a href="">해장엔? 짬뽕</a>
                                    </p>
                                    <div className="d-flex justify-content-between">
                                        <p className="font_yjy18 px-4 mb-0">#칼칼한 #청경채 #콩나물</p>
                                        <p className="font_yjy18 text-right px-4 mb-0">윤여선 님</p>
                                    </div>
                                </div>
                            </div>
                        </li>
                        <li className="col-6 order-lg-1 d-none d-lg-block">
                            <div className="">
                                <a href="" className="d-block overflow-hidden targetThumb_c">
                                    <img src="./img/img_yjy/recipe/pumpkin_porridge.jpg" alt="호박죽" className="" />
                                </a>
                                <div className="p-text">
                                    <a href="">
                                        <p className="font_subtitle_k_yjy letter_spacing my-0 text-start">달콤한 호박죽</p>
                                    </a>
                                    <div className="d-lg-flex d-none justify-content-between">
                                        <p className="font_text_yjy">#든든한 #단호박 #잣</p>
                                        <p className="font_text_yjy text-right">방보영 님</p>
                                    </div>
                                </div>
                            </div>
                        </li>
                        <li className="col-6 order-lg-1 ">
                            <div className="">
                                <a href="" className="d-block overflow-hidden targetThumb_d">
                                    <img src="./img/img_yjy/recipe/Mille_Feuille Nabe.jpg" alt="밀푀유나베" className="" />
                                </a>
                                <div className="m-text">
                                    <p className="font_subtitle_k_yjy letter_spacing my-0 text-start">
                                        <a href="">한 솥 가득 밀푀유나베</a>
                                    </p>
                                    <div className="d-lg-flex d-none justify-content-between">
                                        <p className="font_text_yjy">#집들이 #배추 #버섯</p>
                                        <p className="font_text_yjy text-right">고민서 님</p>
                                    </div>
                                </div>
                            </div>
                        </li>
                    </ul>
                </div>
            </div>
            <div class="section_blank_yjy d-flex justify-content-center flex-column align-items-center ">
                <Buttonmore>더보기</Buttonmore>
            </div>
        </section>
        
    );
}

export default RecipeSection;
