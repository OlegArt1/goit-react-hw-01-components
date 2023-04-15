import PropTypes from "prop-types";
import Css from "./Profile.module.css";

export const Profile = ({ avatar, username, tag, location, stats }) =>
{
    return (
        <div className={Css.profile}>
            <div className={Css.description}>
                <img className={Css.avatar} src={avatar} alt={username}/>
                <p className={Css.name}>Jacques Gluke{username}</p>
                <p className={Css.tag}>@{tag}</p>
                <p className={Css.location}>{location}</p>
            </div>
            <ul className={Css.stats}>
                <li className={Css.item}>
                    <span className={Css['label']}>Followers</span>
                    <span className={Css['quantiny']}>{stats.followers}</span>
                </li>
                <li className={Css.item}>
                    <span className={Css['label']}>Views</span>
                    <span className={Css['quantiny']}>{stats.views}</span>
                </li>
                <li className={Css.item}>
                    <span className={Css['label']}>Likes</span>
                    <span className={Css['quantiny']}>{stats.likes}</span>
                </li>
            </ul>
        </div>
    );
};
Profile.propTypes =
{
    userName: PropTypes.string.isRequired,
    tag: PropTypes.string.isRequired,
    location: PropTypes.string.isRequired,
    avatar: PropTypes.string.isRequired,
    stats: PropTypes.shape({
        followers: PropTypes.number.isRequired,
        likes: PropTypes.number.isRequired,
        views: PropTypes.number.isRequired,
  }).isRequired
};