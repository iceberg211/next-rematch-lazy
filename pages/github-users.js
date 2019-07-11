import React, { Component } from 'react'
import Link from 'next/link'
import withRematch from '../shared/withRematch'
import { checkServer } from '../shared/utils'
import CounterDisplay from '../shared/components/counter-display'
import Header from '../shared/components/header'
import github from '../shared/models/github';


class Github extends Component {
  static async getInitialProps({ isServer, store }) {
    if (isServer) {
      await store.dispatch.github.fetchUsers()
    }
    return {}
  }

  render() {
    const { isLoading, fetchUsers, userList } = this.props

    return (
      <div>
        <Header />
        <h1> Github users </h1>
        <p>
          Server rendered github user list. You can also reload the users from
          the api by clicking the <b>Get users</b> button below.
        </p>
        {isLoading ? <p>Loading ...</p> : null}
        <p>
          <button onClick={fetchUsers}>Get users</button>
        </p>
        {userList.map(user => (
          <div key={user.login}>
            <Link href={user.html_url} passHref>
              <a>
                <img height='45' width='45' src={user.avatar_url} />
                <span> Username - {user.login}</span>
              </a>
            </Link>
            <br />
          </div>
        ))}
        <br />

        <CounterDisplay />
      </div>
    )
  }
}

const mapState = state => ({
  userList: state.github.users,
  isLoading: state.github.isLoading
})

const mapDispatch = ({ github: { fetchUsers } }) => ({
  fetchUsers: () => fetchUsers()
})

export default withRematch(
  mapState,
  mapDispatch,
  github
)(Github)
