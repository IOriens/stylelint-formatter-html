import React, { Component } from 'react'
// import logo from './logo.svg'
import style from './App.css'
import WarningList from './warning-list/'

class App extends Component {
  render () {
    let resultList = window.styleLintResult
    return (
      <div className={style.App}>
        {resultList.map(res => (
          <div className={style.resultList} key={res.source}>
            <h4>{res.source}</h4>
            <WarningList warnings={res.warnings} />
          </div>
        ))}
      </div>
    )
  }
}

export default App
