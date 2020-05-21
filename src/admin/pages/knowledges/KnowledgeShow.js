import React from 'react';
import { Link } from 'react-router-dom';

const KnowledgeShow = () => {
	return (
            <div style={{minHeight: '965px', marginTop: '-15px'}} className="ui inverted vertical center aligned segment">
                <div className="ui text container">
                    <h1 style={{fontSize: '4em', fontWeight: 'normal', marginBottom: 0, marginTop: '3em'}} className="ui inverted header">
                        Knowledge Show
                    </h1>
                    <Link to="/" className="ui huge primary button">
                        Main Application
                        <i aria-hidden="true" className="right arrow icon" />
                    </Link>
                </div>
            </div>
	);
};

export default KnowledgeShow;