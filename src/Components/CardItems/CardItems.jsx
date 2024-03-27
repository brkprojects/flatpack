import React from 'react'
import '../CardItems/CardItems.css'
import gym1 from '../Assets/gym1.jpg'
import gym2 from '../Assets/gym2.jpg'
import gym3 from '../Assets/gym3.jpg'

function CardItems() {
    return (
        <div class='gymlife'>
            <div class="toppadding">

                <div class="part">
                    <div class="imggym"><img src={gym1} class='logostyle' />
                    </div>
                    <div class="textgymstyle">
                        <p class="gym">Welcome to Gym</p>
                        <p class="gymtext">Lorem ipsum dolor sit amet consectetur adipiscing elite.</p>
                    </div>
                    <span class="linkbutton"><a>Join Now</a></span>
                </div>


                <div class="part">
                    <div class="imggym"><img src={gym2} class='logostyle' />
                    </div>
                    <div class="textgymstyle">
                        <p class="gym">Fitness Activities</p>
                        <p class="gymtext">Lorem ipsum dolor sit amet consectetur adipiscing elite.</p>
                    </div>
                    <span class="linkbutton"><a>Join Now</a></span>
                </div>



                <div class="part">
                    <div class="imggym"><img src={gym3} class='logostyle' />
                    </div>
                    <div class="textgymstyle">
                        <p class="gym">High quality Staff</p>
                        <p class="gymtext">Lorem ipsum dolor sit amet consectetur adipiscing elite.</p>
                    </div>
                    <span class="linkbutton"><a>Join Now</a></span>
                </div>

            </div>

        </div>
    )
}

export default CardItems
