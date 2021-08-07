import React from "react";
import Bag from "../images/bag.png";
import Girl from "../images/girl.png";

function Block()
{
    const container=
        <div class="container">
            <div class="row">

                <div class="col-lg-6 col-md-6">
                    <div class="card">
                        <h1 class="title">Ready for autumn collection</h1>
                        <p>Treat yourself to some of our brand new autumn collection - all with the wonderful colours surrounding you.</p>
                        <button type="button" class="purchase  btn btn-outline-secondary">Purchase Now</button>       
                    </div>  
                    <img class="photo" src={Bag} alt="bag" />
                </div>

                <div class="col-lg-6 col-md-6">
                    <div class="card">
                        <h1 class="title">Ready for autumn collection</h1>
                        <p>Treat yourself to some of our brand new autumn collection - all with the wonderful colours surrounding you.</p>
                        <button type="button" class="purchase btn btn-outline-secondary">Purchase Now</button>  
                    </div>
                    <img class="photo" src={Girl} alt="girl" />
                </div> 
                
            </div>
        </div>
    return (container);
}

export default Block;