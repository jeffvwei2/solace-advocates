"use client"

import { Advocate } from './types'

interface AdvocateTableProps {
  advocates: Advocate[]
}

export default function AdvocateTable({ advocates }: AdvocateTableProps){
  return (
    <div>
      <table>
        <thead>
          <tr>
            <th>First Name</th>
            <th>Last Name</th>
            <th>City</th>
            <th>Degree</th>
            <th>Specialties</th>
            <th>Years of Experience</th>
            <th>Phone Number</th>
          </tr>
        </thead>
        <tbody>
          {advocates.map((advocate: Advocate, idx ) => {
            return (
              <tr key={idx}>
                <td>{advocate.firstName}</td>
                <td>{advocate.lastName}</td>
                <td>{advocate.city}</td>
                <td>{advocate.degree}</td>
                <td>
                  <ul>
                  {advocate.specialties.map((s,i) => (
                    <li key={i}>
                      {s}
                    </li>
                  ))}
                  </ul>
                </td>
                <td>{advocate.yearsOfExperience}</td>
                <td>{advocate.phoneNumber}</td>
              </tr>
            );
          })}
        </tbody>
      </table>
    </div>
  )

}