import './CustomTable.css';
import { data } from './data';
import Nav from './Nav';


function CustomTable(props) {
	return (
    <>
      <Nav />
      <div style={{ display: 'flex', justifyContent: 'center', padding: '1rem'}}>

        <div className="custom-table-container">
          <div className="list-items-container">
          <div className="pa4">
            <div className="overflow-auto">
              <table className="f6 w-100 mw8 center" cellSpacing="">
                <thead>
                  <tr>

                    <th className="fw6 tl pa3 white b--solid bw1 w3 bg-navy">Name</th>
                    <th className="fw6 tl pa3 white b--solid bw1 w3 bg-navy">Email</th>
                    <th className="fw6 tl pa3 white b--solid bw1 w3 bg-navy">Phone</th>
                    <th className="fw6 tl pa3 white b--solid bw1 w3 bg-navy">Age</th>
                    {
                      data.map(item => (
                        <th className="fw6 tl pa3 white b--solid bw1 w3 bg-navy" key={item.id.toString()}>{item.title}</th>
                      ))
                    }
                    {/* <th className="fw6 tl pa3 white b--solid bw1 w3 bg-navy">Class of Degree</th>
                    <th className="fw6 tl pa3 white b--solid bw1 w3 bg-navy">Integrity</th>
                    <th className="fw6 tl pa3 white b--solid bw1 w3 bg-navy">Initiative</th>
                    <th className="fw6 tl pa3 white b--solid bw1 w3 bg-navy">Intellectual Ability</th>
                    <th className="fw6 tl pa3 white b--solid bw1 w3 bg-navy">Relation with Staff/Public</th>
                    <th className="fw6 tl pa3 white b--solid bw1 w3 bg-navy">Supervisory Ability</th>
                    <th className="fw6 tl pa3 white b--solid bw1 w3 bg-navy">Ability to Tackle Difficult Problems</th>
                    <th className="fw6 tl pa3 white b--solid bw1 w3 bg-navy">Ability to Work Unsupervised</th>
                    <th className="fw6 tl pa3 white b--solid bw1 w3 bg-navy">Thoroughness in Handling Jobs</th>
                    <th className="fw6 tl pa3 white b--solid bw1 w3 bg-navy">Cooperation with others at work</th>
                    <th className="fw6 tl pa3 white b--solid bw1 w3 bg-navy">Creative Ability/Productivity</th>
                    <th className="fw6 tl pa3 white b--solid bw1 w3 bg-navy">Power of Judgement and Common Sense</th>
                    <th className="fw6 tl pa3 white b--solid bw1 w3 bg-navy">Ability to take on higher Responsiblity</th>
                    <th className="fw6 tl pa3 white b--solid bw1 w3 bg-navy">Ability to Perform under Pressure</th>
                    <th className="fw6 tl pa3 white b--solid bw1 w3 bg-navy">Problems Recognitions and Resolution and Effective Utilization of Subordinate</th>
                    <th className="fw6 tl pa3 white b--solid bw1 w3 bg-navy">Effective Communication Skills (Especially Minutes or Meetings Budgetry Defenses, Processing of Vouchers and Carrying Out Maintenance Work Efficiently)</th>
                    <th className="fw6 tl pa3 white b--solid bw1 w3 bg-navy">Ability to Delegate Effectively and Ability to Offer Constructive Suggestions to Clients and Associates</th>
                    <th className="fw6 tl pa3 white b--solid bw1 w3 bg-navy">Broad Business Sense and Demostration of Leadership Skills</th>
                    <th className="fw6 tl pa3 white b--solid bw1 w3 bg-navy">Time in Rank 2.5 Marks per Year for Over and Above 3 years Time Rank (5 points)</th>
                    <th className="fw6 tl pa3 white b--solid bw1 w3 bg-navy">Promotion Examination Result</th> */}
                  </tr>
                </thead>
                <tbody className="lh-copy">
                  <tr>
                    <td className="pv4 pr4 bb b--black-20">Hassan Johnson</td>
                    <td className="pv3 pr3 bb b--black-20">hassan@companywithalongdomain.co</td>
                    <td className="pv3 pr3 bb b--black-20">0794433322</td>
                    <td className="pv3 pr3 bb b--black-20">30</td>
                    <td className="pv3 pr3 bb b--black-20">Degree</td>
                    <td className="pv3 pr3 bb b--black-20">1</td>
                    <td className="pv3 pr3 bb b--black-20">1</td>
                    <td className="pv3 pr3 bb b--black-20">1</td>
                    <td className="pv3 pr3 bb b--black-20">1</td>
                    <td className="pv3 pr3 bb b--black-20">1</td>
                    <td className="pv3 pr3 bb b--black-20">1</td>
                    <td className="pv3 pr3 bb b--black-20">1</td>
                    <td className="pv3 pr3 bb b--black-20">1</td>
                    <td className="pv3 pr3 bb b--black-20">1</td>
                    <td className="pv3 pr3 bb b--black-20">1</td>
                    <td className="pv3 pr3 bb b--black-20">1</td>
                    <td className="pv3 pr3 bb b--black-20">1</td>
                    <td className="pv3 pr3 bb b--black-20">1</td>
                    <td className="pv3 pr3 bb b--black-20">1</td>
                    <td className="pv3 pr3 bb b--black-20">1</td>
                    <td className="pv3 pr3 bb b--black-20">1</td>
                    <td className="pv3 pr3 bb b--black-20">1</td>
                    <td className="pv3 pr3 bb b--black-20">1</td>
                    <td className="pv3 pr3 bb b--black-20">1</td>
                    <td className="pv3 pr3 bb b--black-20">1</td>
                  </tr>
                  <tr>
                    <td className="pv3 pr3 bb b--black-20">Taral Hicks</td>
                    <td className="pv3 pr3 bb b--black-20">@hicks</td>
                    <td className="pv3 pr3 bb b--black-20">taral@companywithalongdomain.co</td>
                    <td className="pv3 pr3 bb b--black-20">72326219423551</td>
                  </tr>
                  <tr>
                    <td className="pv3 pr3 bb b--black-20">Tyrin Turner</td>
                    <td className="pv3 pr3 bb b--black-20">@tt</td>
                    <td className="pv3 pr3 bb b--black-20">ty@companywithalongdomain.co</td>
                    <td className="pv3 pr3 bb b--black-20">92325170324444</td>
                  </tr>
                  <tr>
                    <td className="pv3 pr3 bb b--black-20">Oliver Grant</td>
                    <td className="pv3 pr3 bb b--black-20">@oli</td>
                    <td className="pv3 pr3 bb b--black-20">oliverg@companywithalongdomain.co</td>
                    <td className="pv3 pr3 bb b--black-20">71165170352909</td>
                  </tr>
                  <tr>
                    <td className="pv3 pr3 bb b--black-20">Dean Blanc</td>
                    <td className="pv3 pr3 bb b--black-20">@deanblanc</td>
                    <td className="pv3 pr3 bb b--black-20">dean@companywithalongdomain.co</td>
                    <td className="pv3 pr3 bb b--black-20">71865178111909</td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>
          </div>
        </div>
      </div>
    </>
	)
}


export default CustomTable;