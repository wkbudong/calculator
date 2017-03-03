/**
 * Created by Administrator on 2017/3/3.
 */
export function add(){
    return {
        type:'ADD',
        preload: this.state.value++
    }
}
export function minus(){
    return {
        type:'MIUNS',
        preload: this.state.value--
    }
}