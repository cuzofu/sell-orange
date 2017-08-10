import React from 'react'

import HOCApp from './hoc/HOCDemo'

class HigherOrderComponentApp extends React.Component {

    constructor() {
        super();
    }

    render () {
        return (
            <HOCApp />
        );
    }
}

module.exports = HigherOrderComponentApp;