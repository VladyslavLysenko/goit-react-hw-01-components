// import PropTypes from 'prop-types'; 
export const FriendItem = ({ friend: {isOnline, avatar, name } }) => { 


    return (
        <section className="friends">
            <span className="status">{isOnline ? <span>Yes</span> : <span>No</span>} </span>
            <img className="avatar" src={avatar} alt="User avatar" width="48" />
            <p className="name">{name}</p>
        </section>
    )
}