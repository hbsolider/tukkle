import React from 'react';
import {connect} from 'react-redux'
function App({number}) {
  return (
    <div className="App" style={{display:'flex',alignItems:'center',justifyContent:'center',minHeight:'100vh'}}>
      {number}
    </div>
  );
}

const mapStateToProps = (state) => ({
  number: state.globalState.number
})

const appConnect = connect(mapStateToProps)(App)

export default appConnect;
