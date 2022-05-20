import React, { useEffect } from "react";
import { fetchUsers } from "./userActions";
import { connect } from "react-redux";

function UserContainer({ userData, fetchUsers }) {
  useEffect(() => {
    fetchUsers();
  }, []);
  return (
    <div>
      {userData.loading ? (
        <h2>Loading...</h2>
      ) : userData.err ? (
        <h2>{userData.err}</h2>
      ) : (
        <>
          <h2>List of Users</h2>
          {userData &&
            userData.users &&
            userData.users.map((user) => <li key={user.id}>{user.name}</li>)}
        </>
      )}
    </div>
  );
}

const mapStateToProps = (state) => {
  return {
    userData: state.user,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    fetchUsers: () => dispatch(fetchUsers()),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(UserContainer);
