import React from 'react'

const Greeeting = ({timeOfDay}) => {

    return timeOfDay == "morning" ? <h1>Good morning</h1> : <h1>Good Afternoon</h1>
}

export default Greeeting