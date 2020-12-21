import React from 'react'

export class ResetCounter extends React.PureComponent {

    render(){

        const disabled = this.props.counterValue === 0;

        return (
            <button disabled={disabled} onClick={() => this.props.onClick()}>Auf 0 zurücksetzen (auf null)</button>
        );
    }

}