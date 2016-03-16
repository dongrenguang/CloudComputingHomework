import React from "react";
import ReactDOM from "react-dom";

export default class AllusionList  extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            allusions: null
        }
    }

    componentWillMount() {
        this.setState({
            allusions: this.props.allusions
        });
    }

    componentWillReceiveProps(nextProps)
    {
        this.setState({
            allusions: nextProps.allusions
        });
    }

    _onAllusionClick(allusion) {
        this.props.onSelectAllusion(allusion);
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
                            <li onClick={this._onAllusionClick.bind(this, allusion)} style={styles.allusion}>{allusion.id}</li>
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
    }
}
