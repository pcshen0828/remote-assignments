const Header = (props) => {
    // console.log(props);
    return (
        <header>
        <h1>{props.title}</h1>
        <span className="stats">Players: { props.totalPlayers }</span>
        </header>
    );
}

const Player = (props) => {
    // console.log(props.removePlayer);
    return (
        <div className="player">
        <span className="player-name">
            <button className="remove-player" onClick={ () => props.removePlayer(props.id) }>✖</button>
            {props.name}
        </span>

        <Counter/>
        </div>
    );
}

// function: receiving props
// const Counter = (props) => {
//     return (
//         <div className="counter">
//             <button className="counter-action decrement"> - </button>
//             <span className="counter-score">{props.score}</span>
//             <button className="counter-action increment"> + </button>
//         </div>
//     );
// };

// class: using state to update data
class Counter extends React.Component {
    // constructor(){
    //     // 子類別需要在constructor()中呼叫super()來使用父類別的建構函式
    //     // 子類別的constructor()呼叫super之前，this是沒有指向的，會跑出Refference Error
    //     super() 
    //     this.state = {
    //         score: 0
    //     };
    // }

    // shortcut: (interpreted by babel)
    // state is local to a component, which means that a component can maintain its own state
    // unlike props, which are read-only
    state = {
        score: 0
    };

    incrementScore = () => {
        // console.log(this);
        // In objests or classes, "this" usually refers to the parent that owns the method
        // custom methods created are not bound to the component by default
        // to bind custom methods, call "bind" in the render method
        
        // but if by using arrow functions which use lexical this binding
        // "this" will be automatically binded to the scope
        // console.log(this);

        // this.setState({
        //     score: this.state.score + 1
        // });

        // this.setState(prevState => {
        //     return {
        //         score: prevState.score + 1
        //     };
        // });

        // Due to state may be updated asynchronously
        // use callback function to setState to make sure the callback is guaranteed to fire 
        // after the update is applied and rendered out to the DOM  
        this.setState(prevState => ({
            score: prevState.score + 1
        }));
    }
    
    decrementScore = () => {
        // this.setState({
        //     score: this.state.score - 1
        // })

        // this.setState(prevState => {
        //     return {
        //         score: prevState.score - 1
        //     }
        // })

        this.setState(prevState => ({
            score: prevState.score - 1
        }));
    }

    render(){
        // each counter component that gets mounted into the DOM is an instance of the counter class
        // inside the render method, this refers to the counter component instance
        return (
            <div className="counter">
                <button className="counter-action decrement" onClick={this.decrementScore}> - </button>
                <span className="counter-score">{ this.state.score }</span>
                {/* <button className="counter-action increment" onClick={this.incrementScore.bind(this)}> + </button> */}
                <button className="counter-action increment" onClick={this.incrementScore}> + </button>
            </div>
        );
    };
}

class App extends React.Component{
    state = {
        players: [
            {
                name: "Guil",
                score: 50,
                id: 1
            },
            {
                name: "Treasure",
                score: 85,
                id: 2
            },
            {
                name: "Ashley",
                score: 95,
                id: 3
            },
            {
                name: "James",
                score: 80,
                id: 4
            }
        ]
    };

    handleRemovePlayer = (id) => {
        this.setState(prevState => {
            return {
                players: prevState.players.filter(p => p.id !== id)
            };
        })
    }

    render(){
        return (
            <div className="scoreboard">
                <Header title="Scoreboard" totalPlayers={ this.state.players.length }/>
                {/* <Header title="Scoreboard" totalPlayers={ n => n + 10 }/> */}
                {/* { an expression or something that returns a value } */}
    
                {/* Players list */}
                {this.state.players.map( player => 
                    <Player 
                        name={player.name} 
                        id={player.id}
                        key={player.id.toString()}
                        removePlayer={this.handleRemovePlayer}
                    />
                )}
            </div>
        );

    }
};
  
ReactDOM.render(
    <App />,
    document.getElementById('root')
);

//JSX
// const title = <h1>My First React Element!</h1>;
// const desc = <p>I just learned how to create a React node and render it into the DOM.</p>
// const header = React.createElement(
//     'header',
//     null,
//     title,
//     desc 
// );
// console.log(title);

// ReactDOM.render(
//     header,
//     document.getElementById('root')
// );