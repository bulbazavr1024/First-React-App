import React from 'react';
import s from './Profile.module.css';
import Profile from "./Profile";
import axios from "axios";
import {connect} from "react-redux";
import {setUserProfile} from "../../redux/profile_reducer";
import {withRouter} from "react-router";

class ProfileContainer extends React.Component {

    componentDidMount() {

        let userId = this.props.match.params.userId;

        axios.get(`https://social-network.samuraijs.com/api/1.0/profile/` + userId)
            .then(response => {
                this.props.setUserProfile(response.data);
                debugger
            });

    }

    render() {
        return (
            <div className={s.content}>
                <Profile {...this.props} profile={this.props.profile}/>
            </div>

        )
    }

}

let mapStateToProps = (state) => {
    return {
        profile: state.profilePage.profile
    }
}

let WithDataContainerComponent = withRouter(ProfileContainer)

export default connect(mapStateToProps, {setUserProfile})(WithDataContainerComponent);