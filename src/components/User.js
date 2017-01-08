import React from 'react'
import moment from 'moment'

const renderUser = user => {
  let created = moment(user.created_at, 'dd MMM DD HH:mm:ss ZZ YYYY', 'en')
  let latest = moment(user.status.created_at, 'dd MMM DD HH:mm:ss ZZ YYYY', 'en')

  return (
    <div className="userProfile">
      <div className="dossier">
        <div className="profileImage">
          <img src={user.profile_image_url.replace('_normal', '')}/>
        </div>
        <div>
          <h2 className="userName">{user.name}</h2>
          <p className="screenName">@{user.screen_name}</p>
          <p className="location">{user.location}</p>
        </div>
      </div>
      <p className="description">{user.description}</p>

      <div className="userDates">
        <div className="createdDate">
          <h3>created</h3>
          <p>{created.format('dddd')}</p>
          <p>{created.format('MMM DD YYYY')}</p>
          <p>{created.format('h:mma')}</p>
        </div>
        <div className="updatedDate">
          <h3>last update</h3>
          <p>{latest.format('dddd')}</p>
          <p>{latest.format('MMM DD YYYY')}</p>
          <p>{latest.format('h:mma')}</p>
        </div>
      </div>
      <div className="sums">
        <div>
          <span>{user.followers_count}</span>
          <span>followers</span>
        </div>
        <div>
          <span>{user.statuses_count}</span>
          <span>tweets</span>
        </div>
      </div>
    </div>
  )
}

const User = props => (
  <div className="user">
    {props.user ? renderUser(props.user) : null}
  </div>
)

export default User
