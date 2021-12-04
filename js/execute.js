
const execute = chain => {
    var _ops_ = ['sin','cos','tan','exp','raiz']

    var op = ''
    var num = ''

    _ops_.forEach(each => {
        if(chain.includes(each)){
            op = each
        }
    })

    num = chain.split(op)[0]
    
    var op = `${op}(${num})`
    return math.evaluate(op)
}
