/**
 * Created by yanji on 2019/8/21
 */
import React from 'react';

class Page extends React.Component {
    render() {
        return (
            <div style={{height: '100%'}}>
                {this.props.children}
            </div>
        )

    }
}

export default Page;