import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
  faCheck,
  faGlobeAfrica,
  faBabyCarriage,
  faStopwatch,
  faBuilding,
  faGavel,
  faCarCollision,faWheelchair,
  faCarCrash
} from '@fortawesome/free-solid-svg-icons';


const InsuranceInvoicTable = () => {
  return (
    <div>
      <table className='invoic-table'>
        <tbody>
          <tr className="top">
            <td className="td-left">
              <img src="/images/logo.png" alt="Image Description" className='table-img-logo' />
            </td>
            <td className="td-right">Quote #: 523 <br />Created: 05/09/2023</td>
          </tr>
          <tr className="information">
            <td colSpan="2">
              <table>
                <tbody>
                  <tr>
                    <td className="td-left">Insurance Company: Libano-Suisse<br />
                    Car Make/Model:<b> Audi A4</b><br />
                    Car Year:<b> 2021</b><br/>
                    Car Market Value:<b> 4,565 EGP</b><br/>
                    
                    
                    </td>
                    <td className="td-right">Full Name: <b>Ahmed Wael</b><br />
                      Email: <b>iahmedwael@gmail.com</b><br />
                      Mobile:<b> 01222151085</b></td>
                  </tr>
                  <tr style={{ backgroundColor: 'var(--bs-gray-200)' }}>
                    <td className="td-left"><b>Quote Details</b></td>
                    <td className="td-right"><b>Cover Description</b></td>
                  </tr>
                  <tr>
                    <td className="td-left">
                      <FontAwesomeIcon icon={faCheck} className='check-icon-motor' style={{ marginRight: '3px' }} />
                      <FontAwesomeIcon icon={faGlobeAfrica} className="fa-2x fa-color" />
                      <p>
                      Primary Cover (General)
                      </p>
                    </td>
                    <td className="td-right">Collision, Damage, Loss & Thef</td>

                  </tr>
                  <tr>
                    <td className="td-left">
                      <FontAwesomeIcon icon={faCheck} className='check-icon-motor' style={{ marginRight: '3px' }} />
                      <FontAwesomeIcon icon={faStopwatch} className="flaticon-stopwatch fa-disabled fa-2x" />
                      <p>
                      Policy Deductible


                      </p>
                    </td>
                    <td className="td-right">0.04 Deductible</td>

                  </tr>
                  <tr>
                    <td className="td-left">
                      <FontAwesomeIcon icon={faCheck} className='check-icon-motor' style={{ marginRight: '3px' }} />
                      <FontAwesomeIcon icon={faBuilding} className="far fa-building fa-2x fa-color" />
                      <p>Agency Co-Payment

</p>
                    </td>
                    <td className="td-right">0% Co-Payment</td>

                  </tr>
                  <tr>
                    <td className="td-left">
                      <FontAwesomeIcon icon={faCheck} className='check-icon-motor' style={{ marginRight: '3px' }} />
                      <FontAwesomeIcon icon={faGavel} className="flaticon-gavel fa-2x fa-color" />
                      <p>Liability</p>
                    </td>
                    <td className="td-right">10,000 EGP Cover</td>

                  </tr>
                  <tr>
                    <td className="td-left">
                      <FontAwesomeIcon icon={faCheck} className='check-icon-motor' style={{ marginRight: '3px' }} />
                      <FontAwesomeIcon icon={faWheelchair} className='fa-2x' />
                        <p>Personal Accident

</p>
                    </td>
                    <td className="td-right">Not Covered</td>

                  </tr>
                  <tr>
                    <td className="td-left">
                      <FontAwesomeIcon icon={faCheck} className='check-icon-motor' style={{ marginRight: '3px' }} />
                      <FontAwesomeIcon icon={faCarCrash} className='fa-2x'/>
                      <p>Strikes, Riots & Natural Hazards</p>                      
                                          </td>
                    <td className="td-right">Not Covered</td>

                  </tr>
                  <tr>
                    <td className="td-left">
                      <FontAwesomeIcon icon={faCheck} className='check-icon-motor' style={{ marginRight: '3px' }} />
                      <FontAwesomeIcon icon={faCarCrash} className='fa-2x' />                      
                                        <p>Roadside Assistance</p>
                                        
                                          </td>
                    <td className="td-right">Maternity</td>

                  </tr>
                  <tr>
                    <td className="td-left"><b>NET PREMIUM:</b></td>
                    <td className="td-right">
                      <p><i className="fw-bold fs-4" >149,900 EGP</i></p>
                    </td>
                  </tr>
                </tbody>
              </table>
            </td>
          </tr>
        </tbody>
      </table>
    </div>
  );
};

export default InsuranceInvoicTable;
