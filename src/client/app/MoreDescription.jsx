import React from 'react';

class MoreDescription extends React.Component {
 
  render() {
    return (
      <div className="col s12 m4">
          <div className="icon-block">
            <h3 className="center brown-text"><i className="material-icons">{this.props.icon_name}</i></h3>
            <h4 className="center">{this.props.header}</h4>

            <p className="light">
              {
                this.props.body
              }
             </p>
          </div>
        </div>
    );
  }

}

export default MoreDescription;
