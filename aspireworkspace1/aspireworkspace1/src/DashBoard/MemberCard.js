import React from 'react'
import { GoChevronRight } from "react-icons/go";
import './Dashboardtab.css';

function MemberCard() {
    return (
        <div className='card2'>
            <h3>Members</h3>
            <div className='member-profile'>
                <div className='profile'>
                    <img src="https://blush.design/api/download?shareUri=wCG8AOcQLow6SFhF&c=Backdrop_0%7Ebeb0e4_Hair_0%7E724133_Skin_0%7Ed08b5b_Top_0%7Ee6d25f&bg=cedce3&w=800&h=800&fm=png" alt="" className='profile-picture' />
                    <h4>user1</h4>
                    <p>Full Access</p>
                </div>
                <div className='profile'>
                    <img src="https://blush.design/api/download?shareUri=VS6DwwewH6Ed4ucv&c=Backdrop_0%7Ebeb0e4_Hair_0%7E2c1b18_Skin_0%7Ed08b5b_Top_0%7E60ade6&bg=cedce3&w=800&h=800&fm=png" alt="" className='profile-picture' />
                    <h4>user2</h4>
                    <p>Full Access</p>
                </div>
                <div className='profile'>
                    <img src="https://blush.design/api/download?shareUri=3V7OitlsUWVBdScY&c=Backdrop_0%7Ebeb0e4_Hair_0%7E2c1b18_Skin_0%7Ed08b5b_Top_0%7E60e5ab&bg=cedce3&w=800&h=800&fm=png" alt="" className='profile-picture' />
                    <h4>user3  </h4>
                    <p>Full Access</p>
                </div>
            </div>
            <GoChevronRight className='right-arrow-icon' />
        </div>
    )
}

export default MemberCard