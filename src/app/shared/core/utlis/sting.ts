export function pingjie(data:any):string {
    //现在这里的 data 数据格式已经发生了改变，他包含了所有在store中的 信息；
    // console.log('在拼接方法中，把数字进行拼接:',data);
    return data['entityCache'].counters.count + "lalalalalla"
}