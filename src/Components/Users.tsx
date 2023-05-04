import {useState, useEffect} from 'react';
import {ReactComponent as ActiveUsers} from '../assets/svg/active-users.svg';
import {ReactComponent as UsersWithLoans} from '../assets/svg/users-with-loans.svg';
import {ReactComponent as UsersWithSavings} from '../assets/svg/users-with-savings.svg';
import {ReactComponent as NumUser} from '../assets/svg/number-of-users.svg';
import {ReactComponent as Filter} from '../assets/svg/filter.svg';


const Users = () => {

    const [users, setUsers] = useState([]);

    // const fetchUserData = () => {
    // fetch("https://6270020422c706a0ae70b72c.mockapi.io/lendsqr/api/v1/users")
    //   .then(response => response.json())
    //   .then(data => setUsers(data))
    // };

    useEffect(() => {
        fetch("https://6270020422c706a0ae70b72c.mockapi.io/lendsqr/api/v1/users")
        .then(response => response.json())
        .then(data => setUsers(data))
    }, []);


    // const show = () => {
    //     users.map(user => <p>{user.email}</p>);
    // }



    return(
        <div className="users" >
            <p className="title" style={{padding: '10px 40px' }}>Users</p>
            <div className="cards" >
                <div className="card">
                    <NumUser />
                    <p>USERS</p>
                    <p className="num">{users.length}</p>
                </div>
                <div className="card">
                    <ActiveUsers />
                    <p>ACTIVE USERS</p>
                    <p className="num">2453</p>
                </div>
                <div className="card">
                    <UsersWithLoans />
                    <p>USERS WITH LOAN</p>
                    <p className="num">2453</p>
                </div>
                <div className="card">
                    <UsersWithSavings />
                    <p>USERS WITH SAVINGS</p>
                    <p className="num">2453</p>
                </div>
            </div>
            <div className="user-list">
                <div className="table">
                    <table>
                        <thead>
                        <tr>
                            <th>ORGANIZATION <Filter /></th>
                            <th>USERNAME <Filter /></th>
                            <th>EMAIL <Filter /></th>
                            <th>PHONE NUMBER <Filter /></th>
                            <th>DATE JOINED <Filter /></th>
                            <th>STATUS <Filter /></th>
                        </tr>
                        </thead>
                        <tbody>
                            {users.length > 0 && 
                                users.map(user => (
                                <tr key={user.id}>
                                    <td>{user.orgName}</td>
                                    <td>{user.userName}</td>
                                    <td>{user.email}</td>
                                    <td>{user.phoneNumber}</td>
                                    <td>{user.createdAt}</td>
                                    <td>{user.email}</td>
                                </tr>))
                            }
                        </tbody>
                    </table>
                </div>
            </div>
        </div>
    )
}

export default Users;