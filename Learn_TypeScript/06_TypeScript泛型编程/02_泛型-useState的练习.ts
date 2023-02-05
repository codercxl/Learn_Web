// 元组: useState函数
function useState<Type>(initialState: Type): [Type, (newState: Type) => void] {
  let state = initialState
  function setState(newState: Type) {
    state = newState
    return state
  }

  return [state, setState]
}

// 初始化count
const [count, setCount] = useState(100)
const [message, setMessage] = useState("Hello World")
const [banners, setBanners] = useState<any[]>([])

const res = setCount(200)
console.log(count, res)

export {}
