import React from 'react';

import Profile from '../Profile/Profile';

const Home = props => {

    return (
        <section className="mh-home" id="mh-home">
        <div className="home-ovimg">
            {console.log(props.name)}
            <Profile
                name={props.name}
                job={props.job}
                email={props.email}
                phone={props.phone}
                address={props.address} />

        </div>
      </section>
    );
}

export default Home;