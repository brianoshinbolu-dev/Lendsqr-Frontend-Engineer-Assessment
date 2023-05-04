const Users = () => {
    return(
        <div className="users" >
            <p className="title" style={{padding: '10px 40px' }}>Users</p>
            <div className="cards" >
                <div className="card">
                    <img src="" alt="" />
                    <p>USERS</p>
                    <p className="num">2453</p>
                </div>
                <div className="card">
                    <img src="" alt="" />
                    <p>ACTIVE USERS</p>
                    <p className="num">2453</p>
                </div>
                <div className="card">
                    <img src="" alt="" />
                    <p>USERS WITH LOAN</p>
                    <p className="num">2453</p>
                </div>
                <div className="card">
                    <img src="" alt="" />
                    <p>USERS WITH SAVINGS</p>
                    <p className="num">2453</p>
                </div>
            </div>
            <div className="user-list">
                <div className="table-head">
                    <h4>ORGANIZATION</h4>
                    <h4>USERNAME</h4>
                    <h4>EMAIL</h4>
                    <h4>PHONE NUMBER</h4>
                    <h4>DATE JOINED</h4>
                    <h4>STATUS</h4>
                </div>
            </div>
        </div>
    )
}

export default Users;