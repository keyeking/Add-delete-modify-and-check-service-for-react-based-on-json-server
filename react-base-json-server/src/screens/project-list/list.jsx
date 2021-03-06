 const List=({users,list})=>{
    return <table>
        <thead>
            <tr>
                <th>名称</th>
                <th>负责人</th>
            </tr>
           
                {
                    list.map(project=>{
                    return <tr key={project.id}>
                        <td>{project.name}</td>
                        <td>{users.find(user=>user.id===project.personId)?.name || '未知'}</td>
                    </tr>
                })
            }
           
        </thead>
    </table>
}
export default List