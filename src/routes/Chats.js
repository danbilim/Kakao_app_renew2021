import React from 'react'
import Headerstatus from '../components/Headerstatus'
import friends from '../data/FriendList.json'
import ChatList from '../components/ChatList'
import {Link} from 'react-router-dom';
import '../styles/Headerstyle.scss'
import '../styles/Chats.scss'
import Friends from './Friends';

function Chats() {
    return (
        <>
        <header className="header header_main">
            <Headerstatus />
            <div className="title_bar">
                <h1>Chats <i className="fas fa-caret-down"></i></h1>
                <div className="left_item">
                    <Link to="#">Edit</Link>
                </div>
                <div className="right_item"></div>
            </div>
        </header>
        <main className="chats">
            <form className="search_box">
                <fieldset className="search_inner">
                    <legend className="blind">검색창</legend>
                    <i className="fas fa-search"></i>
                    <input type="search" name="search" id="search" placeholder="Find friends, chats, Plus Firends" />
                </fieldset>
            </form>
            <section className="main_section">
                <div className="section_header">
                    <h2 className="blind">Friends</h2>
                </div>
                <div className="chat_list">
                    {friends.map(friend => (
                        <ChatList 
                            id = {friend.id} 
                            name = {friend.name} 
                            profileword = {friend.profileword} 
                            profileimg = {friend.profileimg} 
                            profilebgimg = {friend.profilebgimg} 
                            email = {friend.email} 
                            lastmsg = {friend.lastmsg} 
                            lasttime = {friend.lasttime}
                        />
                    ))}
                </div>
                {/* <ul>
                    {friends.map(friend => {
                        return (
                            <li>
                                <Link to="/chatting" state={{id, name, profileword, profileimg, profilebgimg, email}}>
                                    <span className="chats_img empty">
                                        {friend.profileimg ? <img src={friend.profileimg} alt="" /> : ''}
                                    </span>
                                    <span className="chats_cont">
                                        <span className="chats_name">{friend.name}</span>
                                        <span className="chats_latest">{friend.lastmsg}</span>
                                    </span>
                                    <span className="chats_time"><span>{friend.lasttime}</span></span>
                                </Link>
                            </li>
                        )
                    })}
                </ul> */}
            </section>
        </main>
        </>
    )
}

export default Chats
