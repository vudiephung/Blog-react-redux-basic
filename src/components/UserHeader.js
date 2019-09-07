import React from 'react'
import { connect } from 'react-redux'

class UserHeader extends React.Component {

    render() {
        console.log(this.props.users)
        const user = this.props.users.find(user => {
            return user.id === this.props.userId
        })

        if (!user) {
            return null
        }

        return <div>{user.name}</div>
    }
}

const mapStateToProps = (state) => {
    return { users: state.users }
}

export default connect(mapStateToProps)(UserHeader)