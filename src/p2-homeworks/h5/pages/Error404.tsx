import React from 'react'

function Error404() {
    return (
        <div className={'error404'}>
            <img src={require("../pages/404girl.jpg")} height={'400px'} width={'400px'} alt=""/>
            <div className={'content404'}>
                <span>404</span>
                <div>Page not found!</div>
                <div>But don't worry, there is navigation panel with actual links on left top corner=)</div>
            </div>
        </div>
    )
}

export default Error404
