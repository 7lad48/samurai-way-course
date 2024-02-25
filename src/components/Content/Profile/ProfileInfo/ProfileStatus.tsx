import React, {ChangeEvent} from 'react';
import profileInfo from './ProfileInfo.module.css';

type ProfileStatusPropsType = {
    status: string
}

class ProfileStatus extends React.Component<ProfileStatusPropsType> {
    state = {
        editMode: false,
        statusValue: this.props.status
    }
    toggleMode = () => {
        this.setState( {
            ...this.state,
            editMode: !this.state.editMode
        })
    }
    changeStatus = (e:ChangeEvent<HTMLInputElement>) => {
        this.setState({
            ...this.state,
            statusValue: e.currentTarget.value
        })
    }
    render() {
        return (
            <div>
                {this.state.editMode &&
                    <div>
                        <input autoFocus={true} onBlur={this.toggleMode} onChange={this.changeStatus} type="text" value={this.state.statusValue}/>
                    </div>
                }
                {!this.state.editMode &&
                    <div onDoubleClick={this.toggleMode}>{this.state.statusValue}</div>
                }
            </div>
        )
    }

}

export default ProfileStatus;