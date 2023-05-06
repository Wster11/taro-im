import { Component } from 'react'
import EC from "easemob-websdk/miniProgram/Easemob-chat"
import './app.less'

const conn = new EC.connection({
  appKey: "1161210719091872#demo",
  url: "wss://im-api-wechat.easemob.com/websocket",
  apiUrl: "https://a1.easemob.com",
});


class App extends Component {

  componentDidMount () {
    conn.open({user:'sttest', pwd: 'sttest'}).then((res)=>{
      console.log(res, 'resss')
    })
  }

  componentDidShow () {}

  componentDidHide () {}

  render () {
    // this.props.children 是将要会渲染的页面
    return this.props.children
  }
}

export default App
