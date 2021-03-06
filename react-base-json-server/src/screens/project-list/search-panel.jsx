export const SearchPanel=({users,param,setParam})=>{
    return <form >
        <div>
            <input type="text" value={param.name} onChange={evt=>setParam({
                ...param,
                name:evt.target.value
            })} />
            <select value={param.personId} onChange={evt=>setParam({
                ...param,
                personId:evt.target.value
            })} >
                <option value={''}>负责人</option>
                {
                    users.map(item=>{
                        return <option key={item.id} value={item.id}>{item.name}</option>
                    })
                }
            </select>
        </div>
    </form>
}