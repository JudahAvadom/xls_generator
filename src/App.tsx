interface IEmployee {
  id:number
  firstName: string,
  lastName: string
}

function App() {
  const employee : IEmployee[] = [
    {
      id:1,
      firstName: 'John',
      lastName: 'Wights'
    },
    {
      id:2,
      firstName: 'Sophia',
      lastName: 'Rouse'
    }
  ]
  const exportBtn = () => {
    console.log("Test");
  }
  return (
    <div className='p-2'>
      <div className="flex">
        <h2 className="text-2xl font-medium mx-2">Employee List</h2>
        <button onClick={exportBtn} className="text-xl bg-green-500 px-2 rounded-lg" type="button">Export</button>
      </div>
      <table className="table-auto">
        <thead>
          <tr>
            <th>ID</th>
            <th>First Name</th>
            <th>Last Name</th>
          </tr>
        </thead>
        <tbody>
          {
            employee.map((e:IEmployee, key:any) => (
              <tr key={key}>
                <td>{e.id}</td>
                <td>{e.firstName}</td>
                <td>{e.lastName}</td>
              </tr>
            ))
          }
        </tbody>
      </table>
    </div>
  )
}

export default App
