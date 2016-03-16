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
            <div className="detailsShow">
                <div className="allusion">
                    <span>{this.state.allusion.id}</span>
                    <span>{" --评分:"}</span>
                    <span>{this.state.allusion.probability.toFixed(2)}</span>
                </div>
                <table className="wordInPoetryList">
                    <thead>
                        <tr>
                            <td>标注</td>
                            <td>诗名</td>
                            <td>作者</td>
                            <td>诗句</td>
                        </tr>
                    </thead>
                    <tbody>
                    {
                        this.state.allusion.wordInPoetryList.map((poetry) => {
                            return (
                                <tr>
                                    <td><input type="checkbox" /></td>
                                    <td>{poetry.title}</td>
                                    <td>{poetry.author}</td>
                                    <td>{poetry.verse}</td>
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