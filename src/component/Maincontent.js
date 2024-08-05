import React from 'react';


import Mainbanner from './yys/Swiper_yys';
import Collabobanner from './yys/Collabobanner';
import Sustainability from './jjh/Sustainability';
import Review from './gms/Review';
import Store from './gms/Store';
import Recipe from './yjy/Recipe';
import Map from './pyj/map/Map';
import Eventbanner from './yys/Eventbanner';
import Form from './pyj/form/Form';

function Maincontent() {
    return (
        <>
            <Mainbanner cls="스와이퍼슬라이드" />
            <Collabobanner />
            <Sustainability />
            <Review />
            <Store />
            <Recipe />
            <Map />
            <Eventbanner />
            <Form />
         </>
      
    );
}

export default Maincontent;


