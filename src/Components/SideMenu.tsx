import {ReactComponent as Briefcase} from '../assets/svg/briefcase.svg';
import {ReactComponent as Dashboard} from '../assets/svg/dashboard.svg';
import {ReactComponent as Users} from '../assets/svg/users.svg';
import {ReactComponent as Guarantors} from '../assets/svg/guarantors.svg';
import {ReactComponent as Loans} from '../assets/svg/loans.svg';
import {ReactComponent as Decision} from '../assets/svg/decision-model.svg';
import {ReactComponent as Savings} from '../assets/svg/savings.svg';
import {ReactComponent as LoanRequest} from '../assets/svg/loan-request.svg';
import {ReactComponent as WhiteList} from '../assets/svg/whitelist.svg';
import {ReactComponent as Karma} from '../assets/svg/karma.svg';
import {ReactComponent as Organization} from '../assets/svg/organization.svg';
import {ReactComponent as LoanProducts} from '../assets/svg/loan-products.svg';
import {ReactComponent as SavingsProducts} from '../assets/svg/savings-products.svg';
import {ReactComponent as FeeNCharges} from '../assets/svg/fees-and-charges.svg';
import {ReactComponent as Transactions} from '../assets/svg/transactions.svg';
import {ReactComponent as Services} from '../assets/svg/services.svg';
import {ReactComponent as ServiceAccount} from '../assets/svg/service-account.svg';
import {ReactComponent as Settlements} from '../assets/svg/settlements.svg';
import {ReactComponent as Reports} from '../assets/svg/reports.svg';
import {ReactComponent as Preferences} from '../assets/svg/preferences.svg';
import {ReactComponent as FeeNPricing} from '../assets/svg/fees-and-pricing.svg';
import {ReactComponent as AuditLogs} from '../assets/svg/audit-logs.svg';




const SideMenu = () => {
    return(
        <div className="side-menu">
            <p><Briefcase />Switch Organisation</p>
            <br/>
            <p><Dashboard />Dashboard</p>
            <br/>
            <p>CUSTOMERS</p>
            <p><Users/> Users</p>
            <p><Guarantors /> Guarantors</p>
            <p><Loans/> Loans</p>
            <p><Decision /> Decision Models</p>
            <p><Savings /> Savings</p>
            <p><LoanRequest /> Loan Requests</p>
            <p><WhiteList /> Whitelist</p>
            <p><Karma /> Karma</p>
            <br/>
            <p>BUSINESS</p>
            <p><Organization /> Organization</p>
            <p><LoanProducts /> Loan Products</p>
            <p><SavingsProducts /> Savings Products</p>
            <p><FeeNCharges /> Fees and Charges</p>
            <p><Transactions /> Transactions</p>
            <p><Services /> Services</p>
            <p><ServiceAccount /> Service Account</p>
            <p><Settlements /> Settlements</p>
            <p><Reports /> Reports</p>
            <br/>
            <p>SETTINGS</p>
            <p><Preferences /> Preferences</p>
            <p><FeeNPricing /> Fees and Pricing</p>
            <p><AuditLogs /> Audit Logs</p>
        </div>
    )
}

export default SideMenu;