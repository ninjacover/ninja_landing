import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
  faCheck,
  faHospital,
  faUserMd,
  faPills,
  faTooth,
  faGlasses,
  faBabyCarriage,
} from '@fortawesome/free-solid-svg-icons';

const InsuranceTable = () => {
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
                      AGE: 35<br />
                      Employees: 50</td>
                    <td className="td-right">Full Name: Ahmed Wael<br />
                      Email: iahmedwael@gmail.com<br />
                      Mobile: 01222151085</td>
                  </tr>
                  <tr style={{ backgroundColor: 'var(--bs-gray-200)' }}>
                    <td className="td-left">Policy Covers</td>
                    <td className="td-right">Description</td>
                  </tr>
                  <tr>
                    <td className="td-left">In-Patient</td>
                    <td className="td-right">
                      <FontAwesomeIcon icon={faCheck} className='check-icon' style={{ marginRight: '3px' }} />
                      <FontAwesomeIcon icon={faHospital} className="fa-2x fa-color" />
                      <p>
                        50,000 EGP Cover
                      </p>
                    </td>
                  </tr>
                  <tr>
                    <td className="td-left">Out-Patient</td>
                    <td className="td-right">
                      <FontAwesomeIcon icon={faCheck} className='check-icon' style={{ marginRight: '3px' }} />
                      <FontAwesomeIcon icon={faUserMd} className="fa-2x fa-color" />
                      <p>
                        50,000 EGP Cover<br />
                        Consultations: 50,000 EGP 25% Deductible<br />
                        Medicines: 7,500 EGP 25% Deductible
                      </p>
                    </td>
                  </tr>
                  <tr>
                    <td className="td-left">Chronic & Pre-existing disease</td>
                    <td className="td-right">
                      <FontAwesomeIcon icon={faCheck} className='check-icon' style={{ marginRight: '3px' }} />
                      <FontAwesomeIcon icon={faPills} className="fa-2x fa-color" />
                      <p>Covered</p>
                    </td>
                  </tr>
                  <tr>
                    <td className="td-left">Dental (Left)</td>
                    <td className="td-right">
                      <FontAwesomeIcon icon={faCheck} className='check-icon' style={{ marginRight: '3px' }} />
                      <FontAwesomeIcon icon={faTooth} className="fa-2x fa-color" />
                      <p>500 EGP Cover<br />0% Deductible</p>
                    </td>
                  </tr>
                  <tr>
                    <td className="td-left">Optical</td>
                    <td className="td-right">
                      <FontAwesomeIcon icon={faCheck} className='check-icon' style={{ marginRight: '3px' }} />
                      <FontAwesomeIcon icon={faGlasses} className="fa-2x fa-color" />
                      <p>500 EGP Cover<br />0% Deductible</p>
                    </td>
                  </tr>
                  <tr>
                    <td className="td-left">Maternity</td>
                    <td className="td-right">
                      <FontAwesomeIcon icon={faCheck} className='check-icon' style={{ marginRight: '3px' }} />
                      <FontAwesomeIcon icon={faBabyCarriage} className="fa-2x fa-color" />
                      <p>1,000 EGP Cover</p>
                    </td>
                  </tr>
                  <tr>
                    <td className="td-left">TOTAL PREMIUM:</td>
                    <td className="td-right">
                      <p>149,900 EGP<br />Avg/Person: 2,998 EGP</p>
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

export default InsuranceTable;
