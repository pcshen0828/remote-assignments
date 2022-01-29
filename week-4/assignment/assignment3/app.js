class Nav extends React.Component{
    state = {
        items: [
            {
                name: "Item 1",
                id: "item1"
            },
            {
                name: "Item 2",
                id: "item2"
            },
            {
                name: "Item 3",
                id: "item3"
            },
            {
                name: "Item 4",
                id: "item4"
            }
        ]
    }
    toggleMenu(){
        let burgerMenu = document.getElementsByClassName('navRightSide')[0];
        burgerMenu.classList.add('-on');
        let btnClose = document.getElementsByClassName('btnClose')[0];
        btnClose.addEventListener('click', function(){
            burgerMenu.classList.remove('-on');
        });
    }
    render(){
        return (
            <nav className="nav">
                <div className="navLeftSide">
                    <div className="logo">
                        Website Title / Logo
                    </div>
                </div>
                <div className="navRightSide">
                    <div className="btnClose">X</div>
                    {this.state.items.map(item => 
                        <div className="item" key={item.id}>{item.name}</div>
                    )}
                </div>
                <div className="hamburger" onClick={this.toggleMenu}>
                    <img src="./images/hamburger.png" alt="hamburger"/>
                </div>
            </nav>
        );
    }
}

class Welcome extends React.Component{
    state = {
        message: "Welcome Message"
    }
    render(){
        return (
            <div className="welcomeMessage" onClick={this.changeText}>
                {this.state.message}
            </div>
        );
    }
    changeText = (message) => {
        this.setState({
            message: "Have a Good Time!"
        })
    }
}

class Section extends React.Component{
    render(){
        return (
            <div className="sectionTitle">
                Section Title
            </div>
        );
    }
} 

class ContentBox extends React.Component{
    state = {
        isShown: "none",
        boxName1: [
            {
                name: "Content Box 1",
                id: "box1"
            },
            {
                name: "Content Box 2",
                id: "box2"
            },
            {
                name: "Content Box 3",
                id: "box3"
            },
            {
                name: "Content Box 4",
                id: "box4"
            }
        ],
        boxName2: [
            {
                name: "Content Box 5",
                id: "box5"
            },
            {
                name: "Content Box 6",
                id: "box6"
            },
            {
                name: "Content Box 7",
                id: "box7"
            },
            {
                name: "Content Box 8",
                id: "box8"
            }
        ]
    }
    showMore = (isShown) => {
        this.setState({
            isShown: "flex"
        })
    }
    render(){
        return (
            <div>
                <div className="contentBoxContainer">
                    {this.state.boxName1.map(box => 
                        <div className="contentBox" key={box.id}>{box.name}</div>
                    )}
                </div>

                <div className="callToAction">
                    <button className="cta" onClick={this.showMore}>Call To Action</button>
                </div>

                <div className="contentBoxContainer" style={{display: this.state.isShown}}>
                    {this.state.boxName2.map(box => 
                        <div className="contentBox" key={box.id}>{box.name}</div>
                    )}
                </div>

            </div>
        );
    }
}

class App extends React.Component{
    render(){
        return (
            <div>
                <Nav />
                <Welcome />
                <Section />
                <ContentBox />
            </div>
        );
    }
};

ReactDOM.render(
    <App />,
    document.getElementById('root')
);
