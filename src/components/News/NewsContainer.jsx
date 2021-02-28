import React from 'react';
import axios from "axios";
import News from "./News";
import {connect} from "react-redux";
import {setCount} from "../../redux/news_reducer"

class NewsContainer extends React.Component {

    componentDidMount() {
        axios.get(`https://api.coingecko.com/api/v3/simple/price?ids=bitcoin%2Cethereum%2Cpangolin&vs_currencies=usd`)
            .then(response => {
                this.props.setCount(response.data);
            })
    }

    render() {
        return (
            <div>
                <News {...this.props}
                      bitcoin={this.props.bitcoin}
                      ethereum={this.props.ethereum}
                      pangolin={this.props.pangolin}/>
            </div>
        )
    }
}

let mapStateToProps = (state) => {
    return {
        bitcoin: state.newsPage.bitcoin,
        ethereum: state.newsPage.ethereum,
        pangolin: state.newsPage.pangolin

    }
}


export default connect(mapStateToProps, {setCount})(NewsContainer)
