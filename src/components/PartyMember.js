import React, { Component } from 'react';

class PartyMember extends Component {
    render() {
        const { level, race, job, name } = this.props.details;
        return ( 
            <div className="entry">
                <div className="member">
                    <div className="charname">{name}</div>
                    <div>
                        <button className="rmv-button" onClick={() => this.props.removeFromParty(this.props.index, this.props.token)}>
                            REMOVE
                        </button>
                    </div>               
                </div>
                <div className="stats">
                    Level {level} { race } {job}
                </div>
            </div>
        );
    }
}

export default PartyMember;