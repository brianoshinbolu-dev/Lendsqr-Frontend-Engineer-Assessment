import {useState, useEffect} from 'react';
import {ReactComponent as ActiveUsers} from '../assets/svg/active-users.svg';
import {ReactComponent as UsersWithLoans} from '../assets/svg/users-with-loans.svg';
import {ReactComponent as UsersWithSavings} from '../assets/svg/users-with-savings.svg';
import {ReactComponent as NumUser} from '../assets/svg/number-of-users.svg';
import {ReactComponent as Filter} from '../assets/svg/filter.svg';


const Users = () => {

    const [users, setUsers] = useState([]);

    const fetchUserData = () => {
    fetch("https://6270020422c706a0ae70b72c.mockapi.io/lendsqr/api/v1/users")
      .then(response => response.json())
      .then(data => setUsers(data))
    };

    useEffect(() => {
        fetchUserData();
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
                    <p className="num">2453</p>
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
                <div className="table-head">
                    <h4>ORGANIZATION <Filter /></h4>
                    <h4>USERNAME <Filter /></h4>
                    <h4>EMAIL <Filter /></h4>
                    <h4>PHONE NUMBER <Filter /></h4>
                    <h4>DATE JOINED <Filter /></h4>
                    <h4>STATUS <Filter /></h4>
                </div>
                <div>
                    <p>{!users ? 'sup' : 'something'}</p>
                </div>
            </div>
        </div>
    )
}

export default Users;