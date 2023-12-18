import {CirclesWithBar}  from "react-loader-spinner"

import "./index.css"

const Loader = () => (
    <div className = "loader-container">
        <CirclesWithBar
            height="100"
            width="100"
            color="#ffe619"
            wrapperStyle={{}}
            wrapperClass=""
            visible={true}
            outerCircleColor="black"
            innerCircleColor="#ffe619"
            barColor="#black"
            ariaLabel='circles-with-bar-loading'
        />
    </div>
)

export default Loader;