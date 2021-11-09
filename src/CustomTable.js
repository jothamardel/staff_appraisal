import {useState, useEffect} from 'react';
import './CustomTable.css';
import { data } from './data';
import { httpGetAllAnalysis } from './hooks/request';
import Nav from './Nav';


function CustomTable(props) {
  const [analysis, setAnalysis] = useState([]);
	const getAnalysis = async () => {
		setAnalysis(await httpGetAllAnalysis());

	}
	useEffect(() => {
		getAnalysis();
	}, []);
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
                  </tr>
                </thead>
                <tbody className="lh-copy">
                  {
                      analysis.length > 0 && analysis.map(item => (

                      <tr key={item.fullName}>
                        <td className="pv4 pr4 bb b--black-20">{item.fullName}</td>
                        <td className="pv3 pr3 bb b--black-20">john@email.com</td>
                        <td className="pv3 pr3 bb b--black-20">0794433322</td>
                        <td className="pv3 pr3 bb b--black-20">30</td>
                        <td className="pv3 pr3 bb b--black-20">Degree</td>
                        <td className="pv3 pr3 bb b--black-20">{item.qualification}</td>
                        <td className="pv3 pr3 bb b--black-20">{item.cod}</td>
                        <td className="pv3 pr3 bb b--black-20">{item.integrity}</td>
                        <td className="pv3 pr3 bb b--black-20">{item.initiative}</td>
                        <td className="pv3 pr3 bb b--black-20">{item.intellectual_ability}</td>
                        <td className="pv3 pr3 bb b--black-20">{item.relation_with_staff_public}</td>
                        <td className="pv3 pr3 bb b--black-20">{item.supervisory_ability}</td>
                        <td className="pv3 pr3 bb b--black-20">{item.atdp}</td>
                        <td className="pv3 pr3 bb b--black-20">{item.atwu}</td>
                        <td className="pv3 pr3 bb b--black-20">{item.tihj}</td>
                        <td className="pv3 pr3 bb b--black-20">{item.cwoaw}</td>
                        <td className="pv3 pr3 bb b--black-20">{item.cap}</td>
                        <td className="pv3 pr3 bb b--black-20">{item.pojacs}</td>
                        <td className="pv3 pr3 bb b--black-20">{item.attohr}</td>
                        <td className="pv3 pr3 bb b--black-20">{item.atpup}</td>
                        <td className="pv3 pr3 bb b--black-20">{item.praraeuos}</td>
                        <td className="pv3 pr3 bb b--black-20">{item.ecs}</td>
                        <td className="pv3 pr3 bb b--black-20">{item.atde}</td>
                        <td className="pv3 pr3 bb b--black-20">{item.bbsad}</td>
                        <td className="pv3 pr3 bb b--black-20">{item.tir}</td>
                        <td className="pv3 pr3 bb b--black-20">{item.per}</td>
                      </tr>
                      ))
                  }
                  
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