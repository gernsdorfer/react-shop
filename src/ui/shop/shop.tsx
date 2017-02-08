import * as React from 'react';
import './shop.css';

interface Props {
}

interface State {
}

export default class Shop extends React.PureComponent<Props , State> {
    render() {
        return (
            <div className="shop">
                {this.props.children}
            </div>

        );
    };
};