/*
有一只狗，不允许别人摸它，一旦摸它就会叫，然后就跑了；这只狗跑一段时间（20~50ms）以后就会停下来，也不叫了。

完成 Dog 组件，当用户点击的时候会执行自身的 bark 和 run 方法。给这个 Dog 组件加上状态 isRunning 和 isBarking，在进行相应的动作的时候设置为 true，停下来的时候设置为 false。

*/

class Dog extends Component {
  constructor () {
    super()
    this.state = {
      isRunning : false ,
      isBarking : false
    }
    /* TODO */
  }
  
  bark () {
    this.setState({ isBarking : true })
    setTimeout( () => this.setState({ isBarking: false }), 20 )
    /* TODO */
  }
  
  run () {
    this.setState({ isRunning : true })
    setTimeout(() => this.setState({ isRunning: false}), 20)
    /* TODO */
  }
  
  handleClickOnDog () {
    this.bark()
    this.run()
  }
 
  render () {
    return (<div onClick={this.handleClickOnDog.bind(this)}>DOG</div>)
  }
}
