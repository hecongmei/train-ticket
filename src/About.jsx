
import React, {
  createContext,
  Component,
  lazy,
  Suspense,
  PureComponent,
  memo,
  useState,
  useEffect,
  useMemo,
  useCallback,
  useRef
} from 'react'




// class Counter extends PureComponent {
//   speak() {
//     console.log('counter speak')
//   }
//   render() {
//     const { props } = this
//     return <h1 onClick={props.onClick}>{props.count}</h1>
//   }
// }

// const Counter = memo(function Counter(props) {
//   console.log('counter render')
//   return <h1 onClick={props.onClick}>{props.count}</h1>
// })

// // 自定义hook, 自定义hook函数一定要以use开头
// function useCount(defaultCount) {
//   const [count,setCount] = useState(defaultCount)
//     const it = useRef()
//     useEffect(() => {
//       it.current = setInterval(() => {
//         setCount(count => count + 1)
//       }, 1000)
//     }, [])
  
//     useEffect(() => {
//       if (count >= 10) {
//         clearInterval(it.current)
//       }
//     })
//     return [count,setCount]
// }

// function App(props) {
//   const [count,setCount] = useCount(0)
//   // const [count, setCount] = useState(0)
//   // const counterRef = useRef()
//   // const it = useRef()
//   // const double = useMemo(() => {
//   //   return count * 2
//   // }, [count === 3])

//   // userMemo(()=>fn) === userCallback(fn)
//   // const onClick = useCallback(() => {
//   //   console.log('click')
//   //   console.log(counterRef.current)
//   //   counterRef.current.speak()
//   // }, [counterRef])

//   // useEffect(() => {
//   //   it.current = setInterval(() => {
//   //     setCount(count => count + 1)
//   //   }, 1000)
//   // }, [])

//   // useEffect(() => {
//   //   if (count >= 10) {
//   //     clearInterval(it.current)
//   //   }
//   // })

//   return (
//     <div>
//       <button
//         type="button"
//         onClick={() => {
//           setCount(count + 1)
//         }}
//       >
//         click: {count}
//          {/* double: {double} */}
//       </button>
//       {/* <Counter ref={counterRef} onClick={onClick} count={double} /> */}
//       <Counter count = {count}/>
//     </div>
//   )
// }

// function App2() {
//   const [count, setCount] = useState(0)
//   const [size, setSize] = useState({
//     width: document.documentElement.clientWidth,
//     height: document.documentElement.clientHeight
//   })

//   const onResize = () => {
//     setSize({
//       width: document.documentElement.clientWidth,
//       height: document.documentElement.clientHeight
//     })
//   }

//   useEffect(() => {
//     document.title = count
//   })
//   useEffect(() => {
//     window.addEventListener('resize', onResize, false)
//     return () => {
//       window.removeEventListener('resize', onResize, false)
//     }
//   }, [])

//   return (
//     <button type="button" onClick={() => setCount(count + 1)}>
//       click:{count}, size: {size.width}x{size.height}
//     </button>
//   )
// }

// class App2 extends Component {
//   state = {
//     count: 0,
//     size: {
//       width: document.documentElement.clientWidth,
//       height: document.documentElement.clientHeight
//     }
//   }

//   // 用类属性声明函数，用类函数不能保证this的正确性
//   onResize = ()=> {
//     // console.log('属性',this); //App2
//     this.setState({
//       size: {
//         width: document.documentElement.clientWidth,
//         height: document.documentElement.clientHeight
//       }
//     })
//   }
//   // onResize() {
//   //   console.log('函数',this); //window
//   // }
//   componentDidMount() {
//     document.title = this.state.count
//     window.addEventListener('resize',this.onResize,false)
//   }
//   componentDidUpdate() {
//     document.title = this.state.count
//   }
//   componentWillUnmount() {
//     window.removeEventListener('resize',this.onResize,false)
//   }
//   render() {
//     const { count,size } = this.state
//     return (
//       <button type="button" onClick={() => this.setState({ count: count + 1 })}>
//         click({count}),
//         size:{size.width}x{size.height}
//       </button>
//     )
//   }
// }

// useState按照固定的数量和顺序调用
function about(props) {
  // useState只在app第一次渲染时执行一次
  const [count, setCount] = useState(()=>{
    return props.defaultCount || 0
  })
  return (
    <button type="button" onClick={() => setCount(count + 1)}>
      click({count})
    </button>
  )
}

// pureComponent 只判断第一个层级的属性是否改变，层级内部改变不行
// class Foo extends PureComponent {
//   // shouldComponentUpdate(nextProps,nextState){
//   //   if(nextProps.name === this.props.name){
//   //     return false
//   //   }
//   //   return true
//   // }
//   render() {
//     console.log("Foo render");
//     return null;
//   }
// }

// // memo 和pureComponent 效果一样，避免组件重新渲染，减少性能开销  memo用于无状态组件
// const Foo = memo(function Foo(props) {
//   console.log('Foo render')
//   return <div></div>
// })

// class App extends Component {
//   state = {
//     count: 0
//   }
//   render() {
//     return (
//       <div>
//         <button onClick={() => this.setState({ count: this.state.count + 1 })}>
//           add
//         </button>
//         <Foo name="Mike" />
//       </div>
//     )
//   }
// }

// const About = lazy(() => import(/*webpackChunkName: "about"*/ './About.jsx'))

// // ErrorBoundary   componentDidCatch

// class App extends Component {
//   state = {
//     hasError: false
//   }
//   // componentDidCatch() {
//   //   this.setState({
//   //     hasError: true
//   //   })
//   // }
//   static getDerivedStateFromError() {
//     return {
//       hasError: true
//     }
//   }
//   render() {
//     if (this.state.hasError) {
//       return <div>error</div>
//     }
//     return (
//       <div>
//         {/* about是异步导入的组件，需要用suspense包裹 */}
//         <Suspense fallback={<div>loading</div>}>
//           <About></About>
//         </Suspense>
//       </div>
//     )
//   }
// }

// const BatteryContext = createContext(90)
// const OnlineContext = createContext()

// class Leaf extends Component {
//   // 一个context时使用contextType
//   static contextType = BatteryContext
//   render() {
//     const battery = this.context
//     return <h1>battery:{battery}</h1>
//   }

//   // render() {
//   //   return (
//   //     <BatteryContext.Consumer>
//   //       {/* 声明一个函数，唯一参数是context的值 */}
//   //       {battery => (
//   //         <OnlineContext.Consumer>
//   //           {online => (
//   //             <h1>
//   //               battery:{battery},online: {String(online)}
//   //             </h1>
//   //           )}
//   //         </OnlineContext.Consumer>
//   //       )}
//   //     </BatteryContext.Consumer>
//   //   )
//   // }
// }

// class Middle extends Component {
//   render() {
//     return <Leaf />
//   }
// }

// class App extends Component {
//   state = {
//     battery: 60,
//     online: false
//   }
//   render() {
//     const { battery, online } = this.state
//     return (
//       <BatteryContext.Provider value={battery}>
//         <OnlineContext.Provider value={online}>
//           <button
//             type="button"
//             onClick={() => this.setState({ battery: battery - 1 })}
//           >
//             press
//           </button>
//           <button
//             type="button"
//             onClick={() => this.setState({ online: !online })}
//           >
//             switch
//           </button>
//           <Middle />
//         </OnlineContext.Provider>
//       </BatteryContext.Provider>
//     )
//   }
// }


export default About;