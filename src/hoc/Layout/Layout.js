import React, {Component} from 'react';
import './Layout.css';
import connect from "react-redux/es/connect/connect";
import Navbar from "../../components/Navigation/Navbar/Navbar";

class Layout extends Component {
    render() {
        return (
        <div className="Layout">
            <Navbar/>
          <main>
              { this.props.children }
          </main>
        </div>
        )
    }
}

function mapStateToProps(state) {
    return {

    }
}

function mapDispatchToProps(dispatch) {
    return {

    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Layout);

