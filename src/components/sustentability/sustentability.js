import React from "react";
import './sustentability.css';
import { useSelector } from 'react-redux';



export default function Sustentability(){
    const language = useSelector((state) => state.language);
    return(
        <div className="container-1">
            <div className="container-2">
                <h1>{language === 'spanish' ? 'Sustentabilidad: ' : 'Sustaniability: '}</h1>
                <div className="container-3">
                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed eu ullamcorper elit. Donec sed leo cursus, imperdiet tortor non, congue odio. Nunc tortor quam, auctor vel leo et, molestie aliquam felis. Fusce accumsan dolor leo, et suscipit libero congue quis. Duis luctus, ex vitae luctus dictum, lorem augue cursus mauris, in dapibus nibh neque vel tortor. Nullam mattis viverra dui, vitae sollicitudin ipsum vehicula eu. Praesent mauris sem, suscipit fermentum eros a, maximus aliquet mauris. Pellentesque quis nisi imperdiet, varius leo sed, finibus neque. In eleifend vel lectus eu convallis. Aenean et fermentum tellus. Pellentesque commodo risus in congue gravida.<br></br>Ut efficitur ac odio et congue. Vivamus sed erat sit amet est imperdiet dignissim vitae quis ante. Duis urna sem, posuere sit amet consequat ut, varius a metus. Praesent eget purus imperdiet, ullamcorper risus in, faucibus neque. Curabitur semper dui eget efficitur scelerisque. Fusce varius ultrices purus, non ullamcorper elit varius sed. Curabitur gravida arcu at turpis lobortis, at blandit dolor porttitor.</p>
                </div>
            </div>
        </div>
    )
}