
const execute = _ => {
    var first_ops = ['+','-']
    var secon_ops = [,'*','/','=']
    var last_ops = ['sen','cos','tan','exp','raiz']

    var terms = []
    var dividers = []

    var i = 0

    first_ops.forEach(each => {
        if(!cadena.includes(each)){
            var ix = first_ops.indexOf(each)
            first_ops.splice(ix, 1)
        }
    })

    secon_ops.forEach(each => {
        if(!cadena.includes(each)){
            var ix = secon_ops.indexOf(each)
            secon_ops.splice(ix, 1)
        }
    })

    last_ops.forEach(each => {
        if(!cadena.inludes(each)){
            var ix = last_ops.indexOf(each)
            last_ops.splice(ix, 1)
        }
    })

    first_ops.forEach(each => {
        if(i = 0){
            terms = cadena.split(each)
        }else{
            terms.forEach(term => {
                each.split(each)
            })
        }
        i++
    })
    
}
