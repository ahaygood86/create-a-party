import React from 'react';

class Character extends React.Component {
    render() {
        const { age, image, job, level, name, race, status } = this.props.details;
        const currentPartySize = Object.keys(this.props.party).length || 0;
        const isAvailable = status === "available";
        return (
            <li className="menu-character">
                <img src={image} alt={name} />
                <h3 className="character-name">{name}
                    <span className="job">{job}</span>
                </h3>
                <p>Level: {level}</p>
                <p>Race: {race}</p>
                <p>Age: {age}</p>
                <button disabled={!isAvailable} onClick={() => this.props.addToParty(currentPartySize, this.props.index)}>
                {isAvailable ? 'Add to Party' : 'Hired!'}
                </button>
            </li>
        )
    }
}
export default Character;