import React from 'react';

import Profile from '../profiles/ProfileShow';

const Home = props => {

    return (
        <section className="mh-home" id="mh-home">
            <div className="react-image image-bg">
                <div className="home-ovimg">
                    <Profile
                        name={props.name}
                        job={props.job}
                        email={props.email}
                        phone={props.phone}
                        address={props.address} />
                </div>
            </div>
        </section>
    );
}

export default Home;