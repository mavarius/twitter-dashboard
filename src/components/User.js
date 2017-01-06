import React from 'react'
import moment from 'moment'

const renderUser = user => {
  let created = moment(user.created_at, 'dd MMM DD HH:mm:ss ZZ YYYY', 'en')
  let latest = moment(user.status.created_at, 'dd MMM DD HH:mm:ss ZZ YYYY', 'en')

  return (
    <div>
      <div className="profileImage"><img src={user.profile_image_url}/></div>
      <h2>{user.name}</h2>
      <h3>{user.screen_name}</h3>
      <dl>
        <dt>Location</dt><dd>{user.location}</dd>
        <dt>Description</dt><dd>{user.description}</dd>
      </dl>
      <p>created
        <span className="twit_day">{created.format('dddd')}</span>
        <span className="twit_date">{created.format('MMM DD YYYY')}</span>
        <span className="twit_time">{created.format('h:mma')}</span>
      </p>
      <p>last update
        <span className="twit_day">{latest.format('dddd')}</span>
        <span className="twit_date">{latest.format('MMM DD YYYY')}</span>
        <span className="twit_time">{latest.format('h:mma')}</span>
      </p>
      <p>{user.followers_count} followers</p>
      <p>{user.statuses_count} tweets</p>
    </div>
  )
}

const User = props => (
  <div className="user">
    {props.user ? renderUser(props.user) : null}
  </div>
)

export default User
