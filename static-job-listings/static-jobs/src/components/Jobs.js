import React from 'react'
import '../index.css'

const Jobs = ({ jobs }) => {
  return (
    <>
      <section className='job-container'>
        {jobs.map((job) => {
          const {
            id,
            company,
            logo,
            featured,
            position,
            postedAt,
            contract,
            location,
            role,
            level,
            languages
          } = job
          return (
            <article key={id}>
              <div className='avatar'>
                <div>
                  <img src={logo} alt='' />
                </div>

                <div className='details'>
                  <h1>{company}</h1>

                  <small>{featured}</small>
                  <h5>{position}</h5>
                  <ul className='small'>
                    <li>{postedAt}</li>
                    <li>{contract}</li>
                    <li>{location}</li>
                  </ul>
                </div>
              </div>

              <div>
                <ul className='role'>
                  <li>{role}</li>
                  <li>{level}</li>
                  <li>{languages[0]}</li>
                  <li>{languages[1]}</li>
                  <li>{languages[2]}</li>
                </ul>
              </div>
            </article>
          )
        })}
      </section>
    </>
  )
}

export default Jobs
