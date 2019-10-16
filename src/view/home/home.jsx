import React, { Component } from 'react'
import {isIe} from '../../utils/index'
import { getUserInfo } from '../../axios/index'

export default class Home extends Component {
    constructor(props){
      super(props)
      this.isMobile = this.props.isMobile;
      this.isIe = isIe()
    }
    state = {
      texta:'',
      textb:''
    }

    componentWillMount() {
      this.getUserInfo()
    }

    getUserInfo = () => {
      getUserInfo().then(res => {
        this.setState({texta: res.data && res.data.aa, textb: res.data && res.data.bb})
        console.log('aa2')
      })
    }

    render() {
      const { texta, textb } = this.state
      return (
        this.isMobile?
        <div>
            {texta}
        </div>:
        <div className="g-home">
            {this.isIe?
            <div>23231231323</div>
            :<div>{textb}</div>}
        </div>
      )
    }
}


