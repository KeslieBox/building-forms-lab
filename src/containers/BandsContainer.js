import React, {Component} from 'react'
import {connect} from 'react-redux'
import BandInput from "../components/BandInput"

class BandsContainer extends Component {

    renderBands = () => this.props.bands.map((b,i) => <li key={i}>{b}</li>)
        
    
    render() {
        return (
          <div>
              <BandInput addBand={this.props.addBand}/>
              Bands
              {this.renderBands()}    
          </div>
        )
    }   
}

const mapStateToProps = ({bands}) => ({bands})

const mapDispatchToProps = dispatch => ({ addBand: band => dispatch({ type: "ADD_BAND", band }) })

export default connect(mapStateToProps, mapDispatchToProps)(BandsContainer)
