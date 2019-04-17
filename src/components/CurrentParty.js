import React, { Component } from 'react';
import PartyMember from './PartyMember';

class CurrentParty extends Component {
    render() {
        const partyMembers = this.props.party;
        const partySize = partyMembers.length || 0;
        return (
            <div className="party-wrap">
                <h1 className="large">Your Party</h1>
                <div className="total">
                Current Party Size: &nbsp;  
                    <strong className={
                        // eslint-disable-next-line
                        partySize == 6 ? "full" : ""
                    }>
                        {partySize} / 6
                    </strong>
                </div>
                {partySize > 0 && (
                    <div className="party">{partyMembers.map((key, index) => (
                        <PartyMember
                            key={key}
                            index={index}
                            token={key}
                            details={this.props.characters[key]}
                            removeFromParty={this.props.removeFromParty}
                        />
                    ))}</div>
                )}
                <button onClick={() => this.props.removeAllFromParty()}>Clear All</button>
                <button 
                    className={
                        // eslint-disable-next-line
                        partySize != 6 ? "notfull" : ""
                    }
                    onClick={() => alert('Thank you for trying this demo!')}
                >
                    End Demo
                </button>
            </div>
        );
    }
}

export default CurrentParty;