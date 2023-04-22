import { Profile } from "./profile/Profile";
import user from "./profile/user.json";

import { Statistics } from "./statistics/Statistics";
import data from "./statistics/data.json";

import { FriendList } from "./friend-list/FriendList";
import friends from "./friend-list/friends.json";

import { TransactionHistory } from "./transaction-history/TransactionHistory";
import transactions from "./transaction-history/transactions.json";

export const App = () => {
    return (
        <div>
            <Profile
                userName={user.username}
                tag={user.tag}
                location={user.location}
                avatar={user.avatar}
                stats={user.stats}
            />
            <Statistics title="Upload stats" stats={data}/>
            <FriendList friends={friends}/>
            <TransactionHistory transactions={transactions}/>
        </div>
    );
};