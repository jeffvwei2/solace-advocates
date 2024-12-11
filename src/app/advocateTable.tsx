"use client"

import { Advocate } from './types'

interface AdvocateTableProps {
  advocates: Advocate[]
}

const styles = {
  th: "px-6 py-3 text-left text-sm font-medium text-gray-600 border-b",
  td: "px-6 py-4 text-sm text-gray-800 border-b",
};

const formatPhone = (phone:string) => {
  return `(${phone.slice(0,3)}) ${phone.slice(3,6)}-${phone.slice(6)}`
}

export default function AdvocateTable({ advocates }: AdvocateTableProps){
  return (
    <div className="overflow-x-auto">
      <table className="min-w-full border-collapse border border-gray-200">
        <thead className='bg-gray-50'>
          <tr>
            <th className={styles.th}>First Name</th>
            <th className={styles.th}>Last Name</th>
            <th className={styles.th}>City</th>
            <th className={styles.th}>Degree</th>
            <th className={styles.th}>Specialties</th>
            <th className={styles.th}>Years of Experience</th>
            <th className={styles.th}>Phone Number</th>
          </tr>
        </thead>
        <tbody>
          {advocates.map((advocate: Advocate, idx ) => {
            return (
              <tr key={idx} className='odd:bg-white even:bg-gray-50 hover:bg-gray-100'>
                <td className={styles.td}>{advocate.firstName}</td>
                <td className={styles.td}>{advocate.lastName}</td>
                <td className={styles.td}>{advocate.city}</td>
                <td className={styles.td}>{advocate.degree}</td>
                <td className={styles.td}>
                  <ul>
                  {advocate.specialties.map((s,i) => (
                    <li key={i}>
                      - {s}
                    </li>
                  ))}
                  </ul>
                </td>
                <td className={styles.td}>{advocate.yearsOfExperience}</td>
                <td className={styles.td}>{formatPhone(String(advocate.phoneNumber))}</td>
              </tr>
            );
          })}
        </tbody>
      </table>
    </div>
  )

}