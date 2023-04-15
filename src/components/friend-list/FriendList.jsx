import Css from "./FriendList.module.css";

export const FriendList = ({ friends }) =>
{
    return (
        <ul className={Css.friend_list}>
            {friends.map(friend =>
            {
                return (
                    <li className={Css.item}>
                        <span className={Css['status']} style={{ backgroundColor: (friend.isOnline? "green" : "red") }}></span>
                        <img className={Css['avatar']} src={friend.avatar} alt={friend.name}/>
                        <span className={Css['name']}>{friend.name}</span>
                    </li>
                );
            })}
        </ul>
    );
};