import * as React from 'react';
import './header.css';
import ReactNode = React.ReactNode;

interface Props {
    leftButton?: ReactNode;
    rightButton?: ReactNode;
}

interface State {
}

export default class Header extends React.PureComponent<Props , State> {
    render() {
        return (
            <div className="header">
                <div>
                    {this.props.leftButton}
                </div>
                <div className="title">
                    {this.props.children}
                </div>
                <div>
                    {this.props.rightButton}
                </div>
            </div>

        );
    };
};