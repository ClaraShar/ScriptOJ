/*
完成 Post 组件，它可以加载、刷新文章内容。

已有函数 getPostData，它会返回一个 Promise，你可以通过它获取文章的内容。

getPostData().then((postContent) => {
  // ...
})
在获取数据的时候，Post 组件的 div.post-content 中显示 数据加载中...，完成加载以后直接显示 getPostData 的返回结果。

页面有个按钮，点击可以重新加载数据。*/

// getPostData 已经可以直接使用
// 小提示：本系统可以直接 async/await

class Post extends Component {
  constructor () {
    super()
    this.state = {
      content: getPostData().then((postContent) => {
  // ...
  })
    }
  }

  //在页面加载完成之前执行
  componentWillMount () {
    this.loadData()
  }
  
  //这里使用了异步操作
  async loadData(){
    this.setState({ content:'数据加载中...' })
    const content = await getPostData()//遇到await就先执行返回
    this.setState({content})
  }
  
  render () {
    return (
      <div>
        <div className='post-content'>{this.state.content}</div>
        <button onClick={this.loadData.bind(this)}>刷新</button>
      </div>
    )
  }
}
