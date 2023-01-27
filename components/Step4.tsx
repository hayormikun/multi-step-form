import React, { useContext } from 'react'
import { SubContext } from './context/SubContext'

export const Step4 = () => {
  const { plan, setPlan } = useContext(SubContext)

  const changePlan = () => {
    if (plan === 'monthlyPlan') setPlan('yearlyPlan')
    else setPlan('monthlyPlan')
  }

  if (plan === 'monthlyPlan') {
    return (
      <div>
        <table>
          <thead>
            <tr>
              <th>
                <span>Arcade (Monthly) </span>
                <a
                  onClick={() => {
                    changePlan()
                  }}
                >
                  change
                </a>
              </th>
              <th>$9/mo</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>Online service</td>
              <td>+$1/mo</td>
            </tr>
            <tr>
              <td>Online service</td>
              <td>+$2/mo</td>
            </tr>
          </tbody>
          <tfoot>
            <tr>
              <td>Total (per month)</td>
              <td>+$12/mo</td>
            </tr>
          </tfoot>
        </table>
      </div>
    )
  }

  if (plan === 'yearlyPlan') {
    return (
      <div>
        <table>
          <thead>
            <tr>
              <th>
                <span>Arcade (Monthly) </span>
                <a
                  onClick={() => {
                    changePlan()
                  }}
                >
                  change
                </a>
              </th>
              <th>$90/yr</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>Online service</td>
              <td>+$10/yr</td>
            </tr>
            <tr>
              <td>Online service</td>
              <td>+$10/yr</td>
            </tr>
          </tbody>
          <tfoot>
            <tr>
              <td>Total (per year)</td>
              <td>$120/yr</td>
            </tr>
          </tfoot>
        </table>
      </div>
    )
  }
}
