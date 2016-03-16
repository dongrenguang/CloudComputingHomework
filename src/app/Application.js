import React from "react";
import ReactDOM from "react-dom";

import AllusionList from "../components/AllusionList";
import DetailsShow from "../components/DetailsShow";

class Application extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            data: null,
            selectedAllusion: null
        }
    }

    componentDidMount() {
        fetch("/src/data/data.json").then((res) => {
            if (res.ok) {
                res.json().then((data) => {
                    this.setState({
                        data,
                        selectedAllusion: data[0]
                    });
                });
            }
        });
    }

    _onSelectAllusion(allusion) {
        this.setState({
            selectedAllusion: allusion
        });
    }

    render() {
        return (
            <div className="app" style={styles.app}>
                <div style={styles.allusionList}>
                    <AllusionList allusions={this.state.data} onSelectAllusion={this._onSelectAllusion.bind(this)} />
                </div>
                <div style={styles.detailsShow}>
                    <DetailsShow allusion={this.state.selectedAllusion} />
                </div>
            </div>
        );
    }
}

const styles = {
    app: {
        position: "absolute",
        top: 0,
        right: 0,
        bottom: 0,
        left: 0,
        backgroundColor: "rgba(0, 0, 0, 0.1)",
        display: "flex",
        flexDirection: "row",
        alignItems: "stretch"
    },
    allusionList: {
        flex: 2,
        backgroundColor: "rgb(255, 255, 211)",
        overflow: "scroll"
    },
    detailsShow: {
        flex: 8,
        overflow: "scroll"
    }
}

ReactDOM.render(
    <Application />,
    document.getElementsByTagName("body")[0]
);

