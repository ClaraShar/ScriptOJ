class Computer extends Component {
  // 注意语法
  constructor(){
    super()
    this.state = { status : "off"}
  }
  
  // 这似乎是一个内置函数
  handleClickOnChange(){
    this.setState({
      status : this.state.status === "off" ? "on" : "off"
    })
  }
  
  render () {
    return (
      <div>
        <button onClick={this.handleClickOnChange.bind(this)}>开关</button>
        <Screen showContent={this.state.status === 'off' ? '显示器关了' : '显示器亮了'} />
      </div>
    )
  }
}

class Screen extends Component {
  static defaultProps = { showContent : "无内容" }
  render () {
    const showContent = this.props.showContent 
    return (
      <div className='screen'>{ showContent }</div>
    )
  }
}
