import React, { PureComponent } from 'react';

export default class ValidationError extends PureComponent {
    render() {
        return (
            <div>
                {this.props.children}
                {this.renderError()}
            </div>
        );
    }

    renderError() {
        const { errorMessage } = this.props;

        if (!errorMessage) {
            return null;
        }

        return <div className='error'>{errorMessage}</div>;
    }
}
