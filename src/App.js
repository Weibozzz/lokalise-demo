import './App.css'
import { useState } from 'react'
import { IntlProvider, FormattedMessage } from 'react-intl'
import en from './content/locales/en.json'
import zh from './content/locales/zh_CN.json'
function App () {
  const [msgs, setMsgs] = useState('en')
  return (
    <div className="App">
      <h1>测试国际化方案</h1>
      <button onClick={() => setMsgs('zh-CN')}>切换中文</button>
      <button onClick={() => setMsgs('en')}>切换英文</button>
      <br/>
      <br/>
      <br/>
      <IntlProvider messages={msgs === 'zh-CN' ? zh : en} locale={msgs} defaultLocale="en">
        <p>
          <FormattedMessage
            id="myMessage2"
            defaultMessage="myMessage2 msg"
          />
        </p>
        <p>
          <FormattedMessage
            id="myMessage3"
            defaultMessage="myMessage3 msg"
          />
        </p>
      </IntlProvider>
    </div>
  )
}
export default App
