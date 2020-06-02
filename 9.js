/*
做一个百分比换算器，需要你完成三个组件：

<Input />：封装了原生的<input />，可以输入任意数字

<PercentageShower />：实时 显示 <Input /> 中的数字内容，但是需要把它转换成百分比，例如 <Input /> 输入的是 0.1，那么就要显示 10.00%，保留两位小数。

<PercentageApp />：组合上述两个组件。
*/

class Input extends Component {
  constructor(){
    super()
    this.state = {
      number : ''
    }
  }
  handleNumberChange(event) {
      this.setState({
        number : event.target.value
      },()=>{
        if(this.props.onConvert){
          const {number} = this.state
          this.props.onConvert({number})
        }
      })
      /* ()=>后面的也很重要，onConvert是自定义的一个属性，属性值为PercentageApp的一个方法handleInput。
      Input调用this.props.onConvert将输入的数字传回PercentageApp里。Comment-app里有讲
      */
  }
  render () {
    return (
      <div>
        <input
          type='number' 
          value={this.state.number}
          onChange={this.handleNumberChange.bind(this)} />
      </div>
    )
  }
}

class PercentageShower extends Component {
  render () {
    var number = this.props.number*100;
    return (
      <div>{number.toFixed(2)}%</div>
    )
  }
}

class PercentageApp extends Component {
  constructor() {
    super()
    this.state = {
      number : ''
    }
  }
  handleInput(number) {
    this.setState(number)
    // 这里是传进来的number
  }
  render () {
    return (
      <div>
        <Input onConvert={this.handleInput.bind(this)}/>
        <PercentageShower number={this.state.number}/>
      </div>
    )
  }
}