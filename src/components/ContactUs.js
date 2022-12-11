import React, { Component } from 'react';
export default class ContactUs extends Component {
  render() {
    let resumeData = this.props.resumeData;
    return (
      <section id="contact">
          <div className="row section-head">
            <div className="ten columns">
              <p className="lead">
             <h4> Feel free to contact me for any work or suggestions below </h4>
              </p>
			 	
            </div>
          </div>
          <div className="row">
            <aside className="eigth columns footer-widgets">
              <div className="widget">
			   <p>
			  <h4>Contact Me:
                  {resumeData.contact}
               </h4>
			</p>
            <p>			
			 <h4>Email Me :
                  {resumeData.email}
                </h4>	
			</p>
			<p>
                <h4>Linkedin ID :
                  {resumeData.linkedinId}
                </h4>
			</p>	
              </div>
            </aside>
          </div>
        </section>
        );
  }
}