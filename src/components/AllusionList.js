import React from "react";
import ReactDOM from "react-dom";

export default class AllusionList  extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            allusions: null,
            selectedAllusion: null,
        }
    }

    componentWillMount() {
        this.setState({
            allusions: this.props.allusions,
            selectedAllusion: this.props.allusions ? this.props.allusions[0] : null,
        });
    }

    componentWillReceiveProps(nextProps)
    {
        this.setState({
            allusions: nextProps.allusions,
        });
    }

    _onAllusionClick(allusion) {
        this.props.onSelectAllusion(allusion);
        this.setState({
            selectedAllusion: allusion,
        });
    }

    render() {
        if (!this.state.allusions) {
            return null;
        }

        return (
            <div className="allusionList" style={styles.allusionList}>
                <div style={styles.title} >
                    <span>典面推荐列表</span>
                </div>
                {
                    this.state.allusions.map((allusion) => {
                        return (
                            <li onClick={this._onAllusionClick.bind(this, allusion)} style={(allusion === this.state.selectedAllusion) ? styles.selectedAllusion : styles.allusion}>{allusion.id}</li>
                            // <li onClick={this._onAllusionClick.bind(this, allusion)} style={styles.allusion}>{allusion.id}</li>
                        );
                    })
                }
            </div>
        );
    }
}

const styles = {
    allusionList: {
        paddingTop: 20,
        display: "flex",
        flexDirection: "column",
        alignItem: "stretch"
    },
    title: {
        height: 50,
        textAlign: "center",
        fontSize: 30
    },
    allusion: {
        height: 30,
        paddingLeft: 80,
        fontSize: 18,
    },
    selectedAllusion: {
        height: 40,
        paddingLeft: 80,
        fontSize: 22,
        fontWeight: "bold",
        color: "green",
    }
}
