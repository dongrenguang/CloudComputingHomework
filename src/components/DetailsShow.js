import React from "react";
import ReactDOM from "react-dom";

export default class DetailsShow extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            allusion: null
        };
    }

    componentWillMount() {
        this.setState({
            allusion: this.props.allusion
        });
    }

    componentWillReceiveProps(nextProps)
    {
        this.setState({
            allusion: nextProps.allusion
        });
    }

    render() {
        if (!this.state.allusion) {
            return null;
        }

        return (
            <div style={styles.detailsShow}>
                <div style={styles.allusion}>
                    <span style={styles.allusionId}>{this.state.allusion.id}</span>
                    <span style={styles.allusionLabel}>{"评分:"}</span>
                    <span style={styles.probability}>{this.state.allusion.probability.toFixed(3)}</span>
                </div>
                <table style={styles.basicWordInPoetryList}>
                    <thead style={styles.thead}>
                        <tr>
                            <td>标注</td>
                            <td>诗名</td>
                            <td>作者</td>
                            <td>诗句</td>
                        </tr>
                    </thead>
                    <tbody>
                    {
                        this.state.allusion.basicWordInPoetryList.map((poetry) => {
                            return (
                                <tr style={styles.tr}>
                                    <td style={{minWidth: 50}}><input type="checkbox" /></td>
                                    <td style={{minWidth: 500}}>{poetry.title}</td>
                                    <td style={{minWidth: 100}}>{poetry.author}</td>
                                    <td style={{minWidth: 500}}>{poetry.verse}</td>
                                </tr>
                            );
                        })
                    }
                    </tbody>
                </table>
            </div>
        );
    }
}

const styles = {
    detailsShow: {
        display: "flex",
        flexDirection: "column",
        alignItems: "stretch",
        paddingLeft: 30,
    },
    allusion: {
        height: 50,
        marginTop: 10,
    },
    allusionId: {
        fontSize: 25,
        color: "green",
        paddingRight: 10,
        fontWeight: "bold",
    },
    allusionLabel: {

    },
    probability: {
        paddingLeft: 5,
        fontWeight: "bold",
    },
    thead: {
        fontSize: 20,
        fontWeight: "bold",
    },
    basicWordInPoetryList: {
        flex: 1,
    },
    tr: {
        height: 25,
    }
}