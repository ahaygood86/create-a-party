import React from 'react';
import Header from './Header';
import Character from './Character';
import CurrentParty from './CurrentParty';
import base from '../base';
import { copy } from '../helpers'

class App extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            characters: {},
            party: []
        }
    }

    componentDidMount() {
        this.roster = base.syncState("characters", {
            context: this,
            state: "characters"
        });
        this.team = base.syncState("party", {
            context: this,
            state: "party"
        })
        // this.ref = base.post('characters', {data: sampleCharacters})
    }

    componentWillUnmount() {
        base.removeBinding(this.roster);
        base.removeBinding(this.team);
    }

    addToParty = (key, val) => {
        let party = copy(this.state.party);
        let characters = copy(this.state.characters);
        let exists;

        party.length && party.includes(val) ? exists = true : exists = false;
        
        if (key < 6 && !exists) {
            party[key] = val;
            characters[val].status = "unavailable";
            this.setState({ 
                party,
                characters
            });
        }
        return null;        
    }

    removeFromParty = (key, val) => {
        let party = copy(this.state.party);
        let characters = copy(this.state.characters);
        party.splice(key, 1);
        characters[val].status = "available";
        this.setState({ 
            party,
            characters
         });
        return null;
    }

    removeAllFromParty = () => {
        let characters =  Object.assign({}, this.state.characters);
        for (var key in characters) {
            characters[key].status = "available";
        }
        this.setState({
            party: [],
            characters
        });
        return null;
    }

    render() {
        return (
            <div className="create-a-party">
                <div className="menu">
                    <Header tagline="Choose six adventurers" />
                    <ul className="characters">
                        {Object.keys(this.state.characters).map(key =>(
                            <Character
                                key={key}
                                index={key}
                                party={this.state.party}
                                details={this.state.characters[key]}
                                addToParty={this.addToParty}
                            />
                        ))}
                    </ul>
                </div>
                <CurrentParty 
                    characters={this.state.characters}
                    party={this.state.party}
                    removeFromParty={this.removeFromParty}
                    removeAllFromParty={this.removeAllFromParty}
                />
            </div>
        );
    }
}

export default App;