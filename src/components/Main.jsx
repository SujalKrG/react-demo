import React from 'react'

const Main = () => {
    const users = [{
        id: 1,
        name: "Sujal",
        age: 25
    },
    {
        id: 2,
        name: "Rajeswari",
        age: 21
    }
]
  return (
    <main>
        <div>
            { users.map((user) => (
                <ul key={user.id}>
                    <li>{user.name}</li>
                    <li>{user.age}</li>
                </ul>
            )) }
        </div>

    </main>
  )
}

export default Main