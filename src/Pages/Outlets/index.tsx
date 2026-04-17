import "./outlets.css"

interface Outlet {
  id: number
  name: string
  address: string
}

const outlets: Outlet[] = [
  {
    id: 1,
    name:'Festac I - Festac Town',
    address: "Makay Plaza, 1 close, 21 Road, Festac Town"
  },
    {  id: 2,
    name:'Ilorin - Town',
    address: "10 Adewale str, Opp. Bookshop House, Lagos"
  },
    {  id: 3,
    name:'Lagos II - Agege Town',
    address: "29 Base str, Opp. power House, Lagos"
  },
    {  id: 4,
    name:'Osogbo I - Station Town',
    address: "20 station RD, Opp. Access House, Osogbo"
  },
    {  id: 5,
    name:'Osogbo II - Aregbe Area',
    address: "22 Igbona str, Ajegunle Osogbo"
  },
    {  id: 6,
    name:'Oyo I - Oyo Town',
    address: "15 Adeyemi str, Oyo town, Oyo."
  },
    {  id: 7,
    name:'Ibadan  - Ibadan Town',
    address: "12 Oluyole str, industrial area, Ibadan"
  },
    {  id: 8,
    name:'Ogbomosho - Ogbomosho Town',
    address: "9 Ayowole str, Termac House, Ogbomosho"
  },
    {  id: 9,
    name:'Ondo - Akure Town',
    address: "17 FUTA Area, FUTA North gate, Akure"
  },
    {  id: 10,
    name:'Abuja - Wuse Town ',
    address: "Zone 2, Wuse-Town, Abuja"
  }
]

const Outlet = () => {
  return (
    <div className="outlet">
      {/* Header */}
      <section className="outlet-header">
        <h1>Outlets</h1>
        <p>Below area all outlets across Nigeria. check them out to find the one closest </p>
      </section>
   
   {/* Table */}
   <section className="outlet-table">
     <div className="table-wrapper">
      <table>
        <thead>
          <tr>
            <th>S/N</th>
            <th>Outlet</th>
            <th>Outlet Address</th>
          </tr>
        </thead>
       
       <tbody>
         {outlets.map((item, index) => (
           <tr key={item.id}>
            <td>{index + 1}</td>
            <td className="outlet-name">{item.name}</td>
            <td>{item.address}</td>
           </tr>
          )
         )}
       </tbody>

      </table>
     </div>
   </section>



    </div>
  )
}

export default Outlet



