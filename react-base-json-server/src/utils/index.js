export const isFalsy=value=>value===0?false:!value
export const cleanObject=(object)=>{
    //在一个函数里改变传入的对象本身是不好的
    const result={...object}
    Object.keys(result).forEach(key=>{
        const value=result[key]
        if(isFalsy(value)){
            delete result[key]

        } 
    })
    return result
}