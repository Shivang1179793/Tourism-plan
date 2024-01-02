import React, { useState } from "react";
function Cards({id, image, info, price,name,removeTour}) {
    const [readmore, setReadmore] = useState(false);
    const description = readmore?info:`${info.substring(0, 200)}....`
    function readmoreHandler() {
        setReadmore(!readmore);
    }
    return (
        <div className="card">
            <img src={image} className="image"></img>
            <div classname="tour-info">
                <div className="tour-details">
                    <h4 className="tour-price">₹{price}</h4>
                    <h4 className="tour-name">{name}</h4>
                </div>
                <div className="description">
                    {description}
                    <span className="read-more" onClick={readmoreHandler}>
                        {readmore ? `Show less`:`Read more`}
                    </span>
                </div>
            </div>
            <button className="btn-red" onClick={()=>removeTour(id)}>
                Not Interested
            </button>
        </div>
    );
};
export default Cards;