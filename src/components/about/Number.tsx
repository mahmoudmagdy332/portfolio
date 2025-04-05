
const Number = () => {
    const ns=[{number:"+20",name:"Projects"},
        {number:"+4000",name:"Customers"},
        {number:"+100",name:"Trips"}];
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 w-10/12 mx-auto my-10">
        {ns.map((n,idx)=>(
            <div className="flex flex-col gap-4 items-center" key={idx}>
                 <h3 className="text-6xl font-bold">{n.number}</h3>
                 <p className="font-[300] text-3xl font-Poppins italic">{n.name}</p>
            </div>
        ))}
        <div></div>
    </div>
  )
}

export default Number